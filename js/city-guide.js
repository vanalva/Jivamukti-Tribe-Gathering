/* Luxembourg city guide (city.html).
 *
 * The page is a plain grouped list without this script. The script reveals the toolbar and filters the cards
 * by toggling `hidden`; every fact it uses sits in data-* attributes and the card text (rendered from
 * src/data/city.json). Filters: category (OR), area (OR), food (OR), search text (every word must match);
 * the groups combine with AND. State lives in the URL hash: #c=hotels,food&a=near&d=vegan&q=text
 * Chip counts show how many places each chip would give with the other filters applied.
 */
(function () {
  'use strict';
  var root = document.querySelector('[data-city-guide]');
  if (!root) return;
  var toolbar = root.querySelector('[data-cityg-toolbar]');
  if (!toolbar) return;

  var cards = [].slice.call(root.querySelectorAll('.cityg_card'));
  var groups = [].slice.call(root.querySelectorAll('.cityg_group'));
  var searchEl = root.querySelector('[data-cityg-search]');
  var clearEl = root.querySelector('[data-cityg-clear]');
  var countEl = root.querySelector('[data-cityg-count]');
  var emptyEl = root.querySelector('[data-cityg-empty]');
  var resetEls = [].slice.call(root.querySelectorAll('[data-cityg-reset]'));
  var toggleEl = root.querySelector('[data-cityg-toggle]');
  var panelEl = root.querySelector('[data-cityg-panel]');
  var activeCountEl = root.querySelector('[data-cityg-active-count]');
  var chipGroups = {};
  [].slice.call(root.querySelectorAll('[data-cityg-group]')).forEach(function (g) {
    chipGroups[g.getAttribute('data-cityg-group')] = { el: g, chips: [].slice.call(g.querySelectorAll('.cityg_chip')) };
  });
  var total = cards.length;
  var DIET = { 'vegan': ['vegan'], 'vegan-options': ['vegan-options', 'some-vegan-options'] };

  function fold(s) {
    s = String(s || '').toLowerCase();
    if (s.normalize) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s.replace(/[^a-z0-9\s]+/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // Per-card index: name, area, tags, note, category label, and the words "also a cafe" for cafe-tagged places.
  cards.forEach(function (card) {
    var tags = (card.getAttribute('data-tags') || '').split(' ').filter(Boolean);
    var parts = [card.getAttribute('data-name'), card.getAttribute('data-catlabel')];
    [].slice.call(card.querySelectorAll('.cityg_card-area, .cityg_tag, .cityg_card-note')).forEach(function (n) { parts.push(n.textContent); });
    card._idx = fold(parts.join(' '));
    card._cats = [card.getAttribute('data-category')];
    if (tags.indexOf('also-cafe') > -1) card._cats.push('cafes');
    card._areas = (card.getAttribute('data-area') || '').split(' ').filter(Boolean);
    card._tags = tags;
  });
  groups.forEach(function (g) { g._count = g.querySelector('[data-group-count]'); g._cards = [].slice.call(g.querySelectorAll('.cityg_card')); });

  var state = { c: [], a: [], d: [], q: '' };

  function any(list, wanted) { for (var i = 0; i < list.length; i++) if (wanted.indexOf(list[i]) > -1) return true; return false; }
  function dietMatch(card, d) {
    if (!d.length) return true;
    var wanted = [];
    d.forEach(function (k) { wanted = wanted.concat(DIET[k] || []); });
    return any(card._tags, wanted);
  }
  function textMatch(card, q) {
    if (!q) return true;
    var ws = q.split(' ');
    for (var i = 0; i < ws.length; i++) if (card._idx.indexOf(ws[i]) < 0) return false;
    return true;
  }
  // skip: which group to leave out (so its chips show what they would add)
  function matches(card, skip) {
    if (skip !== 'c' && state.c.length && !any(card._cats, state.c)) return false;
    if (skip !== 'a' && state.a.length && !any(card._areas, state.a)) return false;
    if (skip !== 'd' && !dietMatch(card, state.d)) return false;
    return textMatch(card, fold(state.q));
  }

  function hashFromState() {
    var p = [];
    if (state.c.length) p.push('c=' + state.c.join(','));
    if (state.a.length) p.push('a=' + state.a.join(','));
    if (state.d.length) p.push('d=' + state.d.join(','));
    if (state.q.trim()) p.push('q=' + encodeURIComponent(state.q.trim()));
    return p.join('&');
  }
  function stateFromHash(h) {
    var s = { c: [], a: [], d: [], q: '' };
    h = String(h || '').replace(/^#/, '');
    if (!/^[cadq]=/.test(h)) return null;
    var ok = { c: {}, a: {}, d: {} };
    ['c', 'a', 'd'].forEach(function (k) { chipGroups[{ c: 'cats', a: 'areas', d: 'diet' }[k]].chips.forEach(function (ch) { ok[k][ch.getAttribute('data-value')] = true; }); });
    h.split('&').forEach(function (pair) {
      var i = pair.indexOf('=');
      if (i < 1) return;
      var k = pair.slice(0, i), v = pair.slice(i + 1);
      if (k === 'q') { try { s.q = decodeURIComponent(v); } catch (e) { s.q = v; } }
      else if (ok[k]) s[k] = v.split(',').filter(function (x) { return x !== 'all' && ok[k][x]; });
    });
    return s;
  }

  var lastHash = null;
  function writeHash() {
    var h = hashFromState();
    if (h === lastHash) return;
    lastHash = h;
    try {
      history.replaceState(null, '', h ? '#' + h : location.pathname + location.search);
    } catch (e) { /* file:// or sandboxed frames: the filters still work, the URL just does not follow */ }
  }

  function setChip(chip, on) { chip.setAttribute('aria-pressed', on ? 'true' : 'false'); }

  function render() {
    var visible = 0, perGroup = {};
    cards.forEach(function (card) {
      var ok = matches(card, null);
      card.hidden = !ok;
      if (ok) visible++;
    });
    groups.forEach(function (g) {
      var n = 0;
      g._cards.forEach(function (c) { if (!c.hidden) n++; });
      g.hidden = n === 0;
      if (g._count) g._count.textContent = n;
    });

    // chips: pressed state and faceted counts
    var map = { cats: 'c', areas: 'a', diet: 'd' };
    Object.keys(chipGroups).forEach(function (name) {
      var key = map[name], g = chipGroups[name];
      g.chips.forEach(function (chip) {
        var v = chip.getAttribute('data-value'), n = 0, on;
        if (v === 'all') { on = state[key].length === 0; }
        else { on = state[key].indexOf(v) > -1; }
        cards.forEach(function (card) {
          if (!matches(card, key)) return;
          if (v === 'all') n++;
          else if (key === 'c' && card._cats.indexOf(v) > -1) n++;
          else if (key === 'a' && card._areas.indexOf(v) > -1) n++;
          else if (key === 'd' && dietMatch(card, [v])) n++;
        });
        setChip(chip, on);
        var cnt = chip.querySelector('[data-count]');
        if (cnt) cnt.textContent = n;
        chip.disabled = n === 0 && !on;
      });
    });

    var filtered = state.c.length || state.a.length || state.d.length || state.q.trim();
    countEl.textContent = visible === 0 ? 'No places match' : visible + ' of ' + total + ' places';
    resetEls.forEach(function (b) { if (!b.classList.contains('cityg_link--button')) b.hidden = !filtered; });
    emptyEl.hidden = visible !== 0;
    clearEl.hidden = !searchEl.value;
    var nPanel = state.a.length + state.d.length;
    if (activeCountEl) { activeCountEl.hidden = !nPanel; activeCountEl.textContent = nPanel ? ' (' + nPanel + ')' : ''; }
    writeHash();
    stick();
  }

  function toggleIn(list, v) { var i = list.indexOf(v); if (i > -1) list.splice(i, 1); else list.push(v); }

  Object.keys(chipGroups).forEach(function (name) {
    var key = { cats: 'c', areas: 'a', diet: 'd' }[name];
    chipGroups[name].el.addEventListener('click', function (e) {
      var chip = e.target.closest ? e.target.closest('.cityg_chip') : null;
      if (!chip || chip.disabled) return;
      var v = chip.getAttribute('data-value');
      if (v === 'all') state[key] = [];
      else toggleIn(state[key], v);
      render();
    });
  });

  var timer = null;
  searchEl.addEventListener('input', function () {
    clearEl.hidden = !searchEl.value;
    clearTimeout(timer);
    timer = setTimeout(function () { state.q = searchEl.value; render(); }, 160);
  });
  searchEl.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchEl.value) { e.preventDefault(); clearSearch(); }
    else if (e.key === 'Enter') { clearTimeout(timer); state.q = searchEl.value; render(); searchEl.blur(); }
  });
  function clearSearch() { clearTimeout(timer); searchEl.value = ''; state.q = ''; render(); searchEl.focus(); }
  clearEl.addEventListener('click', clearSearch);

  function resetAll() {
    clearTimeout(timer);
    state = { c: [], a: [], d: [], q: '' };
    searchEl.value = '';
    render();
  }
  resetEls.forEach(function (b) { b.addEventListener('click', function () { resetAll(); if (b.classList.contains('cityg_link--button')) searchEl.focus(); }); });

  // Filters panel on phones (CSS keeps it open on wider screens)
  function setPanel(open) {
    panelEl.classList.toggle('is-open', open);
    if (toggleEl) toggleEl.setAttribute('aria-expanded', open ? 'true' : 'false');
    stick();
  }
  if (toggleEl) toggleEl.addEventListener('click', function () { setPanel(!panelEl.classList.contains('is-open')); });

  // The sticky toolbar's height, so anchored groups clear it.
  function stick() { root.style.setProperty('--cityg-sticky', (toolbar.offsetHeight + 16) + 'px'); }
  window.addEventListener('resize', stick);

  // "Getting around" link: show the group even when filters hide it.
  [].slice.call(document.querySelectorAll('[data-cityg-jump]')).forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.getElementById((a.getAttribute('href') || '').replace(/^#/, ''));
      if (!target) return;
      e.preventDefault();
      if (state.c.length || state.a.length || state.d.length || state.q.trim()) resetAll();
      target.scrollIntoView({ block: 'start' });
    });
  });

  function applyHash() {
    var s = stateFromHash(location.hash);
    if (!s) return;
    state = s;
    lastHash = null;
    searchEl.value = s.q;
    render();
    // bring a pressed category chip into view in the scrolling row
    var row = chipGroups.cats.el;
    var first = chipGroups.cats.chips.filter(function (c) { return c.getAttribute('aria-pressed') === 'true' && c.getAttribute('data-value') !== 'all'; })[0];
    if (first && row.scrollWidth > row.clientWidth) row.scrollLeft = Math.max(0, first.offsetLeft - 16);
  }
  window.addEventListener('hashchange', function () { if (location.hash.replace(/^#/, '') !== lastHash) applyHash(); });

  toolbar.hidden = false;
  root.classList.add('is-enhanced');
  lastHash = '';
  applyHash();
  if (!stateFromHash(location.hash)) render();
})();
