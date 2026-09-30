// ===== GSAP CONFIGURATION =====
// Professional, smooth, non-flashy animations
// Optimized for modern, snappy feel

// Safety check - ensure GSAP is loaded
if (typeof gsap === 'undefined') {
  console.error('GSAP not loaded!');
} else if (typeof ScrollTrigger === 'undefined') {
  console.error('ScrollTrigger not loaded!');
} else {
  gsap.registerPlugin(ScrollTrigger);
}

// Set smooth, professional defaults
gsap.defaults({
  ease: "power2.out",
  duration: 1.2
});

// ScrollTrigger defaults - smooth and gradual
ScrollTrigger.defaults({
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none reverse",
  markers: false
});

// Smooth scrolling configuration
ScrollTrigger.config({
  limitCallbacks: true,
  syncInterval: 16
});

// Refresh on load to recalculate positions
window.addEventListener('load', function() {
  ScrollTrigger.refresh();
});

// Custom easing for extra smoothness
gsap.registerEase("smoothOut", "power3.out");
gsap.registerEase("smoothInOut", "power2.inOut");

// ---- Template layer: motion filter ------------------------------------------------
// The Rome stylesheet forced `transform: none !important` on every section, on every
// .text-h1 / .text-h4 / .text-body-lg element and on everything inside the schedule and
// day blocks (a "remove all stacking contexts" rule for the hover tooltip). That made every
// x / y / scale / rotation tween on those elements a no-op: they only fade. The project
// CSS carries no !important, so the same result is produced here by stripping transform
// properties from tweens whose target matches the same selector list.
(function () {
  if (typeof gsap === 'undefined') return;
  var NO_TRANSFORM_SELECTOR = [
    '.day_wrap', '.day_wrap *', '.day_row-item', '.day_row', '.day_row-text', '.day_header',
    '.text-h1', '.text-h4', '.text-body-lg',
    '.schedule_wrap *', '.schedule_content', '.schedule_content *',
    '.filter_wrap + .schedule_wrap', '.filter_wrap + .schedule_wrap *',
    'section.schedule_wrap', 'section.page_section'
  ].join(', ');
  var TRANSFORM_PROPS = ['x', 'y', 'z', 'scale', 'scaleX', 'scaleY', 'rotation', 'rotate', 'rotationX', 'rotationY',
    'xPercent', 'yPercent', 'skewX', 'skewY', 'transform', 'transformOrigin'];
  function blocked(t) { return t && t.nodeType === 1 && t.matches(NO_TRANSFORM_SELECTOR); }
  function strip(vars) {
    var out = {}; for (var k in vars) if (TRANSFORM_PROPS.indexOf(k) === -1) out[k] = vars[k]; return out;
  }
  function wrap(name) {
    var orig = gsap[name];
    gsap[name] = function (targets, a, b) {
      var list = gsap.utils.toArray(targets);
      var hit = list.filter(blocked), miss = list.filter(function (t) { return !blocked(t); });
      if (!hit.length) return orig.apply(gsap, arguments);
      if (name === 'fromTo') {
        if (miss.length) orig.call(gsap, miss, a, b);
        return orig.call(gsap, hit, strip(a), strip(b));
      }
      if (miss.length) orig.call(gsap, miss, a);
      return orig.call(gsap, hit, strip(a));
    };
  }
  ['to', 'from', 'fromTo', 'set'].forEach(wrap);
})();

// ---- Template layer: reduced motion (review fix, 30 Sep 2026) -----------------------
// With prefers-reduced-motion: reduce, nothing slides, fades or scrubs: gsap.from() leaves the
// element in its final (CSS) state, gsap.fromTo() jumps to its end values, gsap.to() applies its
// non-transform values at once and scroll-scrubbed tweens (parallax) are dropped. Content can
// never be left hidden. The wrapper gets .is-reduced-motion, which stops the stamp ring spinning
// (project.css). announce.js checks the query itself and is not affected.
(function () {
  if (typeof gsap === 'undefined' || !window.matchMedia) return;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  Array.prototype.forEach.call(document.querySelectorAll('[data-flwr]'), function (w) { w.classList.add('is-reduced-motion'); });
  var MOTION = ['x', 'y', 'z', 'scale', 'scaleX', 'scaleY', 'rotation', 'rotate', 'rotationX', 'rotationY',
    'xPercent', 'yPercent', 'skewX', 'skewY', 'transform'];
  var TIMING = ['duration', 'delay', 'stagger', 'ease', 'repeat', 'repeatDelay', 'yoyo', 'scrollTrigger', 'immediateRender',
    'onStart', 'onUpdate', 'onRepeat', 'onReverseComplete'];
  function still(vars, dropMotion) {
    var out = {};
    for (var k in vars) {
      if (TIMING.indexOf(k) !== -1) continue;
      if (dropMotion && MOTION.indexOf(k) !== -1) continue;
      out[k] = vars[k];
    }
    return out;
  }
  var set = gsap.set.bind(gsap);
  gsap.from = function (targets) { return set(targets, {}); };
  gsap.fromTo = function (targets, fromVars, toVars) { return set(targets, still(toVars || {}, false)); };
  gsap.to = function (targets, vars) {
    if (vars && vars.scrollTrigger) return set(targets, {});
    return set(targets, still(vars || {}, true));
  };
})();
