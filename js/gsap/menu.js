// ===== NAVBAR LINK ANIMATIONS ONLY =====
// Simple cascade animation for top navigation links
// Professional, smooth entrance

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for menu animations');
    return;
  }

  // === TOP NAVBAR LINKS FADE IN ===
  // Simple fade in for nav menu links
  const navMenuLinks = document.querySelectorAll('.nav_menu .link');

  if (navMenuLinks.length > 0) {
    // Set initial state
    gsap.set(navMenuLinks, { opacity: 0 });

    // Fade in
    gsap.to(navMenuLinks, {
      opacity: 1,
      stagger: 0.08,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out"
    });
  }

  console.log('GSAP navbar animations initialized');
});
