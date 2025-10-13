// ===== BOOKING PAGE SPECIFIC ANIMATIONS =====
// Hero, app download section, pricing cards
// Professional directional animations

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for page animations');
    return;
  }


  // === HERO SECTION ===
  // Hero image from left with scale
  const heroImage = document.querySelector('.hero-collage_image-wrap');
  if (heroImage) {
    gsap.from(heroImage, {
      x: -100,
      scale: 0.92,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out"
    });
  }

  // "BOOKING" title from bottom
  const heroTitle = document.querySelector('.hero-collage_title-bottom');
  if (heroTitle) {
    gsap.from(heroTitle, {
      y: 80,
      opacity: 0,
      duration: 1.3,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // === APP DOWNLOAD SECTION ===
  const appTitle = document.querySelector('.plan_wrap .text-h1');
  if (appTitle) {
    gsap.from(appTitle, {
      x: -70,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: appTitle,
        start: 'top 85%'
      }
    });
  }

  const appDescription = document.querySelector('.plan_wrap .text-body-md');
  if (appDescription) {
    gsap.from(appDescription, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: appDescription,
        start: 'top 88%'
      }
    });
  }

  const appButton = document.querySelector('.plan_wrap .button--primary');
  if (appButton) {
    gsap.from(appButton, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: appButton,
        start: 'top 90%'
      }
    });
  }

  // Phone mockup from right
  const phoneMockup = document.querySelector('.plan_wrap img[alt="Tribe App Mockup"]');
  if (phoneMockup) {
    gsap.from(phoneMockup, {
      x: 100,
      y: 50,
      opacity: 0,
      scale: 0.94,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: phoneMockup,
        start: 'top 82%'
      }
    });

    // Subtle floating animation
    gsap.to(phoneMockup, {
      y: -15,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: phoneMockup,
        start: 'top 80%'
      }
    });
  }

  // === PRICING SECTIONS ===
  // Sticky titles - fade from left
  const pricingTitles = document.querySelectorAll('.pricing_title-sticky .text-h1');
  pricingTitles.forEach((title) => {
    gsap.from(title, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: 'top 85%'
      }
    });
  });

  // Badge images (300HR, 75HR) - rotate + scale entrance
  const badges = document.querySelectorAll('.logo-300hr, .logo-75hr');
  badges.forEach((badge) => {
    gsap.from(badge, {
      scale: 0,
      rotation: -90,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: badge,
        start: 'top 88%'
      }
    });
  });

  // === PRICING CARDS ===
  // Card cascade entrance
  const pricingCards = document.querySelectorAll('.card_primary_wrap');
  pricingCards.forEach((card, index) => {
    gsap.from(card, {
      x: 80,
      y: 50,
      opacity: 0,
      duration: 1.1,
      delay: index * 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      }
    });

    // Card hover effect
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -10,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    });
  });

  // Card content stagger
  pricingCards.forEach((card) => {
    const cardElements = card.querySelectorAll('.text-h4, .text-h1, .text-body-md, .button');

    gsap.from(cardElements, {
      y: 20,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 82%'
      }
    });
  });

  // === BUTTON HOVER ENHANCEMENTS ===
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.2,
        ease: "power2.inOut"
      });
    });
  });

  // === PARALLAX EFFECTS ===
  // Section backgrounds subtle movement
  const sectionBackgrounds = document.querySelectorAll('.plan_wrap .u-cover-absolute');
  sectionBackgrounds.forEach((bg) => {
    gsap.to(bg, {
      y: 40,
      ease: "none",
      scrollTrigger: {
        trigger: bg.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2.5
      }
    });
  });
});
