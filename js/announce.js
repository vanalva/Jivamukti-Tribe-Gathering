/**
 * announce.js — motion for the announcement page (src/pages/index.html).
 *
 * Runs after js/gsap/config.js (GSAP + ScrollTrigger registered there, same defaults as the
 * full site). Fades and small vertical rises only, like the full site: no rotations, no skews.
 * Everything degrades: without GSAP the page is fully visible and static, and
 * prefers-reduced-motion skips every non-essential animation (the countdown still runs).
 */
(function () {
  'use strict';

  var page = document.querySelector('.an_page');
  if (!page) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';

  // ---- countdown (days to the first day) -------------------------------------------
  var target = new Date(page.getAttribute('data-countdown'));
  var numberEl = page.querySelector('[data-count="days"]');
  function tick() {
    if (!numberEl || isNaN(target.getTime())) return;
    var ms = target.getTime() - Date.now();
    numberEl.textContent = String(Math.max(0, Math.ceil(ms / 86400000)));
  }
  tick();
  setInterval(tick, 60000);

  // ---- hero: logo, date row and photo fade in on load --------------------------------
  if (hasGsap && !reduce) {
    gsap.from('.an_fade', { opacity: 0, y: 16, duration: 1.2, ease: 'power2.out', stagger: 0.15 });
  }

  // ---- scroll reveals (same vocabulary as js/gsap/animations.js) ---------------------
  if (hasST && !reduce) {
    gsap.from('.an_dates-word, .an_countdown', {
      opacity: 0, y: 40, duration: 1, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: '.an_dates', start: 'top 70%', once: true }
    });

    page.querySelectorAll('.an_nadi').forEach(function (path) {
      var len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      gsap.to(path, {
        strokeDashoffset: 0, ease: 'none',
        scrollTrigger: { trigger: '.an_dates', start: 'top 85%', end: 'bottom 40%', scrub: 0.6 }
      });
    });

    gsap.from('.an_split > *', {
      opacity: 0, y: 30, duration: 1, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: '.an_theme', start: 'top 75%', once: true }
    });

    gsap.utils.toArray('.an_names').forEach(function (list) {
      gsap.from(list.querySelectorAll('.an_name'), {
        opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', stagger: 0.07,
        scrollTrigger: { trigger: list, start: 'top 80%', once: true }
      });
    });

    gsap.from('.an_past-img', {
      opacity: 0, y: 30, duration: 0.9, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.an_past', start: 'top 75%', once: true }
    });

    gsap.from('.an_footer-inner > *', {
      opacity: 0, y: 24, duration: 1, ease: 'power2.out', stagger: 0.15,
      scrollTrigger: { trigger: '.an_footer', start: 'top 80%', once: true }
    });
  }

  // ---- surface awareness: the cursor and the corner stamp flip colours over dark, blue and photo
  //      surfaces ([data-cursor] on the sections). The stamp swaps its ring layer (navy text on
  //      light surfaces, yellow text over dark ones); the centre disc stays as it is.
  var cursor = document.querySelector('.custom-cursor');
  var stamp = page.querySelector('.an_stamp');
  var ring = stamp && stamp.querySelector('.site-stamp_ring');
  function surfaceAt(x, y) {
    var el = document.elementFromPoint(x, y);
    var host = el && el.closest ? el.closest('[data-cursor]') : null;
    return host ? host.getAttribute('data-cursor') : '';
  }
  if (cursor) {
    document.addEventListener('pointermove', function (e) {
      var s = surfaceAt(e.clientX, e.clientY);
      cursor.classList.toggle('is-on-dark', s === 'dark');
      cursor.classList.toggle('is-on-blue', s === 'blue');
      cursor.classList.toggle('is-on-photo', s === 'photo');
    }, { passive: true });
  }
  if (stamp && ring) {
    var ringLight = stamp.getAttribute('data-ring-light'), ringDark = stamp.getAttribute('data-ring-dark');
    var stampTick = null;
    var checkStamp = function () {
      stampTick = null;
      var r = stamp.getBoundingClientRect();
      var s = surfaceAt(r.left + r.width / 2, r.top + r.height / 2);
      var want = (s === 'dark' && ringDark) ? ringDark : ringLight;
      if (want && ring.getAttribute('src') !== want) ring.setAttribute('src', want);
    };
    var queueStamp = function () { if (!stampTick) stampTick = requestAnimationFrame(checkStamp); };
    window.addEventListener('scroll', queueStamp, { passive: true });
    window.addEventListener('resize', queueStamp);
    checkStamp();
  }

  // ---- line-up hover card (pointer devices only; phones show the tile inline) --------
  var card = page.querySelector('.an_hover-card');
  var cardImg = card && card.querySelector('.an_hover-card-img');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (card && cardImg && finePointer) {
    var moveX = hasGsap ? gsap.quickTo(card, 'x', { duration: 0.35, ease: 'power3.out' }) : null;
    var moveY = hasGsap ? gsap.quickTo(card, 'y', { duration: 0.35, ease: 'power3.out' }) : null;
    var show = function (on) {
      if (hasGsap && !reduce) gsap.to(card, { opacity: on ? 1 : 0, duration: 0.3, ease: 'power2.out' });
      else card.style.opacity = on ? '1' : '0';
    };
    page.querySelectorAll('.an_name').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        var src = item.getAttribute('data-image');
        if (src && cardImg.getAttribute('src') !== src) cardImg.setAttribute('src', src);
        show(true);
      });
      item.addEventListener('mouseleave', function () { show(false); });
    });
    page.addEventListener('pointermove', function (e) {
      if (moveX) { moveX(e.clientX + 40); moveY(e.clientY); }
      else { card.style.transform = 'translate(' + (e.clientX + 40) + 'px,' + e.clientY + 'px) translate(-50%, -50%)'; }
    }, { passive: true });
  }
})();
