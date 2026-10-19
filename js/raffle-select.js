/* Raffle custom dropdowns (win.html).
 *
 * Every <select class="flwr_field_select"> inside the raffle form keeps its real element (same name,
 * options and values, still `required`, still what the form submits) but is hidden and driven by a
 * trigger button plus a listbox panel. ARIA: the trigger is a button with aria-haspopup="listbox" and
 * aria-expanded; focus moves to the listbox, which exposes the highlighted row through
 * aria-activedescendant. Keys: Arrow Up/Down, Home/End, PageUp/PageDown, type-ahead, Enter or Space to
 * choose, Escape to close, Tab to close and move on. Without JavaScript the native select stays.
 *
 * Phones: the same custom panel is used (not the native picker) so the list looks the same everywhere.
 * It scrolls inside a max-height of about 60vh with 44px tap rows, and overscroll-behavior stops the
 * page from moving behind it.
 */
(function () {
  'use strict';
  var form = document.querySelector('[data-raffle-form]');
  if (!form) return;
  var selects = form.querySelectorAll('select.flwr_field_select');
  if (!selects.length) return;

  var open = null;
  var uid = 0;

  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (var k in attrs) if (Object.prototype.hasOwnProperty.call(attrs, k)) n.setAttribute(k, attrs[k]);
    return n;
  }
  function fire(node, type) { node.dispatchEvent(new Event(type, { bubbles: true })); }

  function enhance(sel) {
    var id = sel.id || ('raffle-sel-' + (++uid));
    sel.id = id;
    var wrap = el('div', 'raffle_select');
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);
    sel.classList.add('raffle_select_native');
    sel.tabIndex = -1;
    sel.setAttribute('aria-hidden', 'true');

    var label = form.querySelector('label[for="' + id + '"]');
    if (label && !label.id) label.id = id + '-label';

    var trigger = el('button', 'flwr_field_select raffle_select_trigger', { type: 'button', 'aria-haspopup': 'listbox', 'aria-expanded': 'false', 'aria-controls': id + '-list' });
    trigger.id = id + '-trigger';
    var value = el('span', 'raffle_select_value');
    value.id = id + '-value';
    trigger.appendChild(value);
    trigger.setAttribute('aria-labelledby', (label ? label.id + ' ' : '') + value.id);

    var list = el('ul', 'raffle_select_list', { role: 'listbox', tabindex: '-1' });
    list.id = id + '-list';
    if (label) list.setAttribute('aria-labelledby', label.id);
    if (sel.required) list.setAttribute('aria-required', 'true');
    wrap.appendChild(trigger);
    wrap.appendChild(list);

    var items = [];
    var active = -1;
    var typed = '';
    var typedTimer = null;

    for (var i = 0; i < sel.options.length; i++) {
      var o = sel.options[i];
      if (o.value === '' && sel.required) continue;   // the placeholder is not an answer
      var li = el('li', 'raffle_select_option', { role: 'option', id: id + '-opt-' + i });
      li.textContent = o.textContent;
      li.__idx = i;
      li.__label = o.textContent.trim().toLowerCase();
      list.appendChild(li);
      items.push(li);
    }

    function sync() {
      var o = sel.options[sel.selectedIndex];
      var empty = !o || o.value === '';
      value.textContent = o ? o.textContent : '';
      value.classList.toggle('is-placeholder', empty);
      for (var j = 0; j < items.length; j++) {
        var on = items[j].__idx === sel.selectedIndex;
        items[j].classList.toggle('is-selected', on);
        items[j].setAttribute('aria-selected', on ? 'true' : 'false');
      }
      if (!empty) trigger.classList.remove('is-error');
    }
    function itemFor(idx) {
      for (var j = 0; j < items.length; j++) if (items[j].__idx === idx) return j;
      return -1;
    }
    function setActive(j, scroll) {
      if (active >= 0 && items[active]) items[active].classList.remove('is-active');
      active = j;
      if (j < 0 || !items[j]) { list.removeAttribute('aria-activedescendant'); return; }
      items[j].classList.add('is-active');
      list.setAttribute('aria-activedescendant', items[j].id);
      if (scroll !== false) {
        var it = items[j];
        if (it.offsetTop < list.scrollTop) list.scrollTop = it.offsetTop;
        else if (it.offsetTop + it.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = it.offsetTop + it.offsetHeight - list.clientHeight;
      }
    }
    function place() {
      var r = trigger.getBoundingClientRect();
      var vh = window.innerHeight;
      var cap = Math.round(vh * 0.6);
      var below = vh - r.bottom - 12;
      var above = r.top - 12;
      var want = Math.min(cap, items.length * 44 + 2);
      if (Math.max(below, above) < Math.min(want, 200)) {
        trigger.scrollIntoView({ block: 'center' });
        r = trigger.getBoundingClientRect();
        below = vh - r.bottom - 12;
        above = r.top - 12;
      }
      var up = below < want && above > below;
      wrap.classList.toggle('is-up', up);
      list.style.setProperty('--raffle-select-max', Math.max(120, Math.min(cap, up ? above : below)) + 'px');
    }
    function openList() {
      if (open && open !== api) open.close(false);
      open = api;
      place();
      wrap.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      var cur = itemFor(sel.selectedIndex);
      setActive(cur >= 0 ? cur : 0, false);
      list.focus({ preventScroll: true });
      if (active >= 0) {
        var it = items[active];
        list.scrollTop = Math.max(0, it.offsetTop - (list.clientHeight - it.offsetHeight) / 2);
      }
    }
    function close(refocus) {
      if (open === api) open = null;
      wrap.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      setActive(-1);
      if (refocus) trigger.focus({ preventScroll: true });
    }
    function choose(j) {
      if (j < 0 || !items[j]) return;
      var changed = sel.selectedIndex !== items[j].__idx;
      sel.selectedIndex = items[j].__idx;
      sync();
      close(true);
      if (changed) { fire(sel, 'input'); fire(sel, 'change'); }
    }
    function typeahead(ch) {
      clearTimeout(typedTimer);
      typed += ch.toLowerCase();
      typedTimer = setTimeout(function () { typed = ''; }, 600);
      var same = typed.length > 1 && typed.split('').every(function (c) { return c === typed.charAt(0); });
      var needle = same ? typed.charAt(0) : typed;
      var start = active < 0 ? 0 : active;
      for (var n = 0; n < items.length; n++) {
        var j = (start + (typed.length === 1 || same ? n + 1 : n)) % items.length;
        if (items[j].__label.indexOf(needle) === 0) { setActive(j); return; }
      }
    }
    var api = { close: close, wrap: wrap };

    trigger.addEventListener('click', function () {
      if (wrap.classList.contains('is-open')) close(false); else openList();
    });
    trigger.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'Enter' || k === ' ' || k === 'ArrowDown' || k === 'ArrowUp') { e.preventDefault(); openList(); }
      else if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); openList(); typeahead(k); }
    });
    list.addEventListener('keydown', function (e) {
      var k = e.key;
      e.stopPropagation();
      if (k === 'ArrowDown') { e.preventDefault(); setActive(Math.min(items.length - 1, active + 1)); }
      else if (k === 'ArrowUp') { e.preventDefault(); setActive(Math.max(0, active - 1)); }
      else if (k === 'Home') { e.preventDefault(); setActive(0); }
      else if (k === 'End') { e.preventDefault(); setActive(items.length - 1); }
      else if (k === 'PageDown') { e.preventDefault(); setActive(Math.min(items.length - 1, active + 6)); }
      else if (k === 'PageUp') { e.preventDefault(); setActive(Math.max(0, active - 6)); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(active); }
      else if (k === 'Escape') { e.preventDefault(); close(true); }
      else if (k === 'Tab') { close(true); }   // focus returns to the trigger, so Tab moves on from there
      else if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); typeahead(k); }
    });
    list.addEventListener('mousedown', function (e) { e.preventDefault(); });   // keep focus on the list
    list.addEventListener('click', function (e) {
      var li = e.target.closest ? e.target.closest('.raffle_select_option') : null;
      if (li) choose(items.indexOf(li));
    });
    list.addEventListener('mousemove', function (e) {
      var li = e.target.closest ? e.target.closest('.raffle_select_option') : null;
      if (li) { var j = items.indexOf(li); if (j !== active) setActive(j, false); }
    });
    list.addEventListener('blur', function () {
      setTimeout(function () {
        if (open === api && document.activeElement !== list && document.activeElement !== trigger) close(false);
      }, 0);
    });
    if (label) label.addEventListener('click', function (e) { e.preventDefault(); trigger.focus(); });
    // Required validation: the native select is still the validated control. When the browser flags it,
    // show the error state on the custom field and hand focus to the trigger.
    sel.addEventListener('invalid', function () {
      trigger.classList.add('is-error');
      trigger.focus({ preventScroll: true });
    });
    sel.addEventListener('focus', function () { trigger.focus(); });
    sel.addEventListener('change', sync);
    if (sel.form) sel.form.addEventListener('reset', function () { setTimeout(function () { sync(); trigger.classList.remove('is-error'); }, 0); });
    sync();
  }

  for (var s = 0; s < selects.length; s++) enhance(selects[s]);
  function outside(e) {
    if (open && !open.wrap.contains(e.target)) open.close(false);
  }
  document.addEventListener('pointerdown', outside);
  document.addEventListener('mousedown', outside);
  document.addEventListener('touchstart', outside, { passive: true });
  window.addEventListener('resize', function () { if (open) open.close(false); });
})();
