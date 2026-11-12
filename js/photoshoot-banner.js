/* Photo shoot page (photoshoot.html): rotating banner of practitioner photos, hero-collage image slot.
 * This project has no flwr runtime.js hydration script loaded anywhere (it ships its own hand-written
 * JS per page instead), so this does by hand what flwr's runtime.js would otherwise do for a
 * [data-flwr="swiper"] block: add the classes Swiper's own CSS/JS require (swiper, swiper-wrapper,
 * swiper-slide — distinct from the flwr_swiper_* classes already in the markup for styling) and
 * construct the Swiper instance, reading config from the markup's data-flwr-swiper-* attributes.
 */
(function () {
  'use strict';
  if (typeof window.Swiper === 'undefined') return;
  var wrap = document.querySelector('[data-flwr="swiper"].photoshoot_banner');
  if (!wrap) return;
  var el = wrap.querySelector('.flwr_swiper_wrap');
  var track = wrap.querySelector('.flwr_swiper_track');
  if (!el || !track) return;

  el.classList.add('swiper');
  track.classList.add('swiper-wrapper');
  Array.prototype.forEach.call(track.children, function (slide) {
    slide.classList.add('swiper-slide');
  });

  var nextBtn = wrap.querySelector('[data-flwr-target="next"] button');
  var prevBtn = wrap.querySelector('[data-flwr-target="prev"] button');
  var paginationEl = wrap.querySelector('[data-flwr-target="pagination"]');
  /* Swiper's `navigation: {nextEl, prevEl}` only wires up click handlers to these elements —
     unlike flwr's own runtime.js (which isn't loaded on this project, see file header), it never
     adds the flwr_swiper_arrow styling class itself. Without it the buttons render as bare,
     unstyled ~24px default <button>s instead of the themed 44px circles — which is both why
     Juan called them ugly and why they were hard to actually hit (WhatsApp, 12 Nov 2026). */
  if (nextBtn) { nextBtn.classList.add('flwr_swiper_arrow', 'is-next'); }
  if (prevBtn) { prevBtn.classList.add('flwr_swiper_arrow', 'is-prev'); }
  var loop = wrap.getAttribute('data-flwr-swiper-loop') === 'true';
  var autoplay = wrap.getAttribute('data-flwr-swiper-autoplay') === 'true';
  var speed = parseInt(wrap.getAttribute('data-flwr-swiper-speed'), 10) || 600;
  var autoplayDelay = parseInt(wrap.getAttribute('data-flwr-swiper-autoplay-delay'), 10) || 4000;

  /* No observer/observeParents: that was added for resize resilience before the real fix
     (.photoshoot_banner absolute-fills its parent instead of relying on height:100%), and on a
     page with other animated content it re-measures Swiper on unrelated DOM mutations. Swiper
     already handles window resize on its own.
     effect: 'fade' instead of the default slide: these are portrait photos on a plain grey
     backdrop, not a filmstrip — sliding them sideways means every transition shows half of one
     photo and half bare backdrop at the same time, which is exactly the "ugly, sliced" look
     Juan flagged (WhatsApp, 12 Nov 2026). A crossfade never shows two partial photos at once. */
  var config = {
    loop: loop,
    speed: speed,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    grabCursor: true,
    watchOverflow: true,
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
    keyboard: { enabled: true, onlyInViewport: true }
  };
  if (nextBtn || prevBtn) config.navigation = { nextEl: nextBtn, prevEl: prevBtn };
  if (paginationEl) {
    config.pagination = {
      el: paginationEl,
      bulletClass: 'flwr_swiper_bullet',
      bulletActiveClass: 'is-active',
      bulletElement: 'button',
      clickable: true
    };
  }
  if (autoplay) {
    config.autoplay = { delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true };
  }

  try {
    new window.Swiper(el, config);
  } catch (err) {
    console.warn('[photoshoot-banner] Swiper init failed', err);
  }
})();
