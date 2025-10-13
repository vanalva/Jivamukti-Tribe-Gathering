// ===== FULLSCREEN MENU CASCADE ANIMATIONS =====
// Professional cascade effects for menu items
// Smooth, staggered, directional reveals

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for menu animations');
    return;
  }

  const menuToggle = document.getElementById('menuToggle');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  if (!menuToggle || !fullscreenMenu) return;

  // Get menu elements
  const menuLinks = fullscreenMenu.querySelectorAll('.menu-fullscreen_link');
  const menuImage = fullscreenMenu.querySelector('.menu-fullscreen_hero-image');
  const menuBadge = fullscreenMenu.querySelector('.menu-fullscreen_badge');
  const footerLeft = fullscreenMenu.querySelector('.menu-fullscreen_footer-left');
  const footerRight = fullscreenMenu.querySelector('.menu-fullscreen_footer-right');

  // Create timeline for menu entrance
  const menuTimeline = gsap.timeline({ paused: true });

  // Menu background fade in
  menuTimeline.from('.menu-fullscreen_background', {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, 0);

  // Menu links cascade - alternating from left/right
  if (menuLinks.length > 0) {
    menuLinks.forEach((link, index) => {
      const fromLeft = index % 2 === 0;

      menuTimeline.from(link, {
        x: fromLeft ? -120 : 120,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
      }, 0.1 + (index * 0.08));

      // Animate arrow icon separately for extra polish
      const arrow = link.querySelector('.menu-fullscreen_arrow-icon');
      if (arrow) {
        menuTimeline.from(arrow, {
          x: fromLeft ? -30 : 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out"
        }, 0.15 + (index * 0.08));
      }
    });
  }

  // Menu hero image - scale + fade from right
  if (menuImage) {
    menuTimeline.from(menuImage, {
      x: 100,
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, 0.3);
  }

  // Menu badge - rotate + scale entrance
  if (menuBadge) {
    menuTimeline.from(menuBadge, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.4)"
    }, 0.6);
  }

  // Footer left - slide from left
  if (footerLeft) {
    menuTimeline.from(footerLeft, {
      x: -80,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out"
    }, 0.5);
  }

  // Footer right links - stagger from right
  if (footerRight) {
    const footerItems = footerRight.children;
    menuTimeline.from(footerItems, {
      x: 60,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power2.out"
    }, 0.6);
  }

  // Listen for menu open/close
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const isOpen = fullscreenMenu.classList.contains('is-open');

        if (isOpen) {
          // Reset and play entrance animation
          menuTimeline.restart();
        } else {
          // Reset timeline when closed
          menuTimeline.pause(0);
        }
      }
    });
  });

  observer.observe(fullscreenMenu, {
    attributes: true,
    attributeFilter: ['class']
  });

  // === MENU LINK HOVER EFFECTS ===
  // Subtle parallax on hover
  menuLinks.forEach((link) => {
    let hoverTween;

    link.addEventListener('mouseenter', function() {
      const arrow = this.querySelector('.menu-fullscreen_arrow-icon');

      // Scale link slightly
      hoverTween = gsap.to(this, {
        x: 15,
        duration: 0.5,
        ease: "power2.out"
      });

      // Move arrow more
      if (arrow) {
        gsap.to(arrow, {
          x: 25,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });

    link.addEventListener('mouseleave', function() {
      const arrow = this.querySelector('.menu-fullscreen_arrow-icon');

      gsap.to(this, {
        x: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });

      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          duration: 0.4,
          ease: "power2.inOut"
        });
      }
    });
  });

  // === NAV MENU ITEMS CASCADE ===
  // Animate top nav menu items on page load
  const navMenuLinks = document.querySelectorAll('.nav_menu .link');
  if (navMenuLinks.length > 0) {
    gsap.from(navMenuLinks, {
      y: -20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out"
    });
  }

  // Nav logo subtle scale
  const navLogo = document.querySelector('.nav_logo');
  if (navLogo) {
    gsap.from(navLogo, {
      scale: 0.85,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "back.out(1.2)"
    });
  }

  // Hamburger button entrance
  const hamburger = document.querySelector('.nav_hamburger');
  if (hamburger) {
    gsap.from(hamburger, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.4)"
    });
  }
});
