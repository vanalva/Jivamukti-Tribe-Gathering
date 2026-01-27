// ===== PAGE ENTRANCE ANIMATIONS =====
// Hero, navigation, footer logo displacement
// Professional entrance effects - smooth and non-flashy

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for entrance animations');
    return;
  }

  // === HERO ENTRANCE ANIMATIONS ===
  // Animate hero floating images on page load
  const heroFloatingImages = document.querySelectorAll('.hero_floating_image');
  if (heroFloatingImages.length > 0) {
    heroFloatingImages.forEach((img, index) => {
      // Alternate direction: left images from left, right images from right
      const isLeft = img.classList.contains('hero_floating_image-topleft');

      gsap.from(img, {
        x: isLeft ? -120 : 120,
        y: -50,
        opacity: 0,
        scale: 0.92,
        duration: 1.6,
        delay: 0.4 + (index * 0.15),
        ease: "power3.out"
      });
    });
  }

  // Animate hero main logo with subtle scale
  const heroLogo = document.querySelector('.hero_logo_wrap');
  if (heroLogo) {
    gsap.from(heroLogo, {
      scale: 0.88,
      opacity: 0,
      duration: 1.8,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // === NAVIGATION ENTRANCE ===
  // Subtle nav fade in
  const nav = document.querySelector('.nav_wrap');
  if (nav) {
    gsap.from(nav, {
      y: -30,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
      ease: "power2.out"
    });
  }

  // === FOOTER LOGO DISPLACEMENT EFFECT ===
  // Logo starts displaced down and slides into position on scroll
  const footerLogo = document.querySelector('.footer_logo-wrap');
  if (footerLogo) {
    // Initially displaced
    gsap.set(footerLogo, {
      y: 150,
      opacity: 0.3
    });

    // Animate into position when footer comes into view
    gsap.to(footerLogo, {
      y: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.footer_wrap',
        start: 'top 90%',
        end: 'top 60%',
        scrub: 1.2
      }
    });
  }

  // === BUTTON ENTRANCE EFFECTS ===
  // Buttons fade in from bottom
  const buttons = document.querySelectorAll('.button');
  if (buttons.length > 0) {
    buttons.forEach((btn, index) => {
      gsap.from(btn, {
        y: 25,
        opacity: 0,
        duration: 1,
        delay: 0.8 + (index * 0.08),
        ease: "power2.out",
        scrollTrigger: {
          trigger: btn,
          start: 'top 92%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // === HOME ABOUT SECTION HERO IMAGE ===
  // Large hero image entrance
  const aboutHeroImage = document.querySelector('.home-about_hero-image-wrap');
  if (aboutHeroImage) {
    gsap.from(aboutHeroImage, {
      x: -80,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutHeroImage,
        start: 'top 85%'
      }
    });
  }

  // === VIDEO/PLAY BUTTON ENTRANCE ===
  const videoWrap = document.querySelector('.home-rome_video-wrap');
  if (videoWrap) {
    gsap.from(videoWrap, {
      scale: 0.94,
      opacity: 0,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoWrap,
        start: 'top 80%'
      }
    });
  }

  // === LOOKING BACK SECTION IMAGES ===
  const lookbackImage = document.querySelector('.home-lookback_image-wrap');
  if (lookbackImage) {
    gsap.from(lookbackImage, {
      y: 60,
      opacity: 0,
      scale: 0.96,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lookbackImage,
        start: 'top 82%'
      }
    });
  }
});
