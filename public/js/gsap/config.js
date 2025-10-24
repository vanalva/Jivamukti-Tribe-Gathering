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

// Custom easing for extra smoothness
gsap.registerEase("smoothOut", "power3.out");
gsap.registerEase("smoothInOut", "power2.inOut");
