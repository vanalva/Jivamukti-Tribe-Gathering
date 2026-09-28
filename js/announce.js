/**
 * announce.js — motion for the announcement page (src/pages/index.html).
 *
 * Runs after js/gsap/config.js (GSAP + ScrollTrigger registered there, same defaults as the
 * full site). Everything degrades: without GSAP the page is fully visible and static, and
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
    var days = Math.max(0, Math.ceil(ms / 86400000));
    numberEl.textContent = String(days);
  }
  tick();
  setInterval(tick, 60000);

  // ---- hero reveal: line → geometric lotus (halo) → illustrated lotus → wordmark -----
  var halo = page.querySelector('.an_lk-halo');
  var lotus = page.querySelectorAll('.an_lk-lotus');
  var text = page.querySelectorAll('.an_lk-text');
  var line = page.querySelector('.an_hero-line');
  var facts = page.querySelectorAll('.an_hero-dates, .an_hero-location, .an_hero-countdown, .an_top-eyebrow, .an_top-mark');

  if (hasGsap && !reduce && halo) {
    gsap.set(halo, { transformOrigin: '50% 50%', scaleX: 0.02, opacity: 0 });
    gsap.set(lotus, { transformOrigin: '50% 60%', opacity: 0, scale: 0.92 });
    gsap.set(text, { opacity: 0, y: 14 });
    gsap.set(facts, { opacity: 0, y: 20 });
    gsap.set(line, { scaleY: 0, opacity: 1 });

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to(line, { scaleY: 1, duration: 0.7, ease: 'power2.inOut' })
      .to(halo, { opacity: 1, duration: 0.2 }, '-=0.1')
      .to(halo, { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }, '<')
      .to(line, { opacity: 0, duration: 0.5 }, '-=0.6')
      .to(lotus, { opacity: 1, scale: 1, duration: 0.9, stagger: 0.012 }, '-=0.55')
      .to(text, { opacity: 1, y: 0, duration: 0.7, stagger: 0.012 }, '-=0.5')
      .to(facts, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, '-=0.3');
  } else if (line) {
    line.style.display = 'none';
  }

  // ---- scroll: dates moment, nadis drawing, theme, line-up ---------------------------
  if (hasST && !reduce) {
    gsap.from('.an_dates-word', {
      opacity: 0, y: 60, duration: 1.1, ease: 'power3.out', stagger: 0.14,
      scrollTrigger: { trigger: '.an_dates', start: 'top 70%', once: true }
    });

    page.querySelectorAll('.an_nadi').forEach(function (path, i) {
      var len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      gsap.to(path, {
        strokeDashoffset: 0, ease: 'none',
        scrollTrigger: { trigger: '.an_dates', start: 'top 85%', end: 'bottom 40%', scrub: 0.6 }
      });
    });

    gsap.from('.an_theme-inner > *', {
      opacity: 0, y: 40, duration: 1, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: '.an_theme', start: 'top 75%', once: true }
    });

    gsap.utils.toArray('.an_names').forEach(function (list) {
      gsap.from(list.querySelectorAll('.an_name'), {
        opacity: 0, x: -40, duration: 0.9, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: list, start: 'top 80%', once: true }
      });
    });

    gsap.from('.an_footer-inner > *', {
      opacity: 0, y: 30, duration: 1, ease: 'power2.out', stagger: 0.15,
      scrollTrigger: { trigger: '.an_footer', start: 'top 80%', once: true }
    });
  }

  // ---- line-up hover card (pointer devices only; phones show the tile inline) --------
  var card = page.querySelector('.an_hover-card');
  var cardImg = card && card.querySelector('.an_hover-card-img');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (card && cardImg && finePointer) {
    var moveX = hasGsap ? gsap.quickTo(card, 'x', { duration: 0.35, ease: 'power3.out' }) : null;
    var moveY = hasGsap ? gsap.quickTo(card, 'y', { duration: 0.35, ease: 'power3.out' }) : null;
    var show = function (on) {
      if (hasGsap && !reduce) gsap.to(card, { opacity: on ? 1 : 0, rotate: on ? -4 : -8, duration: 0.35, ease: 'power2.out' });
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
      else { card.style.transform = 'translate(' + (e.clientX + 40) + 'px,' + e.clientY + 'px) translate(-50%, -50%) rotate(-4deg)'; }
    }, { passive: true });
  }
})();
