// ===== SCHEDULE PAGE SPECIFIC ANIMATIONS =====
// Hero collage, CTA buttons, schedule cards
// Careful with existing hover interactions

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for page animations');
    return;
  }


  // === HERO COLLAGE ===
  // Hero image from left
  const heroImage = document.querySelector('.hero-collage_image-wrap');
  if (heroImage) {
    gsap.from(heroImage, {
      x: -100,
      scale: 0.93,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out"
    });
  }

  // Logo from right
  const heroLogo = document.querySelector('.hero-collage_logo-wrap');
  if (heroLogo) {
    gsap.from(heroLogo, {
      x: 100,
      opacity: 0,
      duration: 1.3,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // "SCHEDULE" title from bottom
  const heroTitleBottom = document.querySelector('.hero-collage_title-bottom');
  if (heroTitleBottom) {
    gsap.from(heroTitleBottom, {
      y: 80,
      opacity: 0,
      duration: 1.3,
      delay: 0.3,
      ease: "power3.out"
    });
  }

  // === CTA SECTION ===
  const ctaTitle = document.querySelector('.cta_wrap .text-h4');
  if (ctaTitle) {
    gsap.from(ctaTitle, {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaTitle,
        start: 'top 90%'
      }
    });
  }

  const ctaButtons = document.querySelectorAll('.cta_wrap .button');
  if (ctaButtons.length > 0) {
    gsap.from(ctaButtons, {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.cta_wrap .flex',
        start: 'top 90%'
      }
    });
  }

  // === SCHEDULE DAYS - DO NOT TOUCH DAY_ROW HOVER (already working) ===
  // Only animate entrance, not hover states

  // Day sections entrance
  const dayWraps = document.querySelectorAll('.day_wrap');
  dayWraps.forEach((dayWrap, index) => {
    // Day image entrance
    const dayImage = dayWrap.querySelector('.day_image');
    if (dayImage) {
      gsap.from(dayImage, {
        x: 100,
        opacity: 0,
        scale: 0.94,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: dayWrap,
          start: 'top 80%'
        }
      });
    }
  });

  // === SCHEDULE ROWS CASCADE ===
  // Animate row items but preserve hover interactions
  const dayTables = document.querySelectorAll('.day_table');
  dayTables.forEach((table) => {
    const rowItems = table.querySelectorAll('.day_row-item');

    gsap.from(rowItems, {
      x: -50,
      opacity: 0,
      stagger: 0.06,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: table,
        start: 'top 85%'
      }
    });
  });

  // === DAY CTA BUTTONS ===
  const dayCtaButtons = document.querySelectorAll('.day_cta .button');
  if (dayCtaButtons.length > 0) {
    dayCtaButtons.forEach((btn) => {
      gsap.from(btn, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btn,
          start: 'top 92%'
        }
      });
    });
  }

  // === PARALLAX EFFECTS ===
  // Day images parallax
  const dayImages = document.querySelectorAll('.day_image img');
  dayImages.forEach((img) => {
    gsap.to(img, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: img.closest('.day_wrap'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });
  });

  // Background parallax
  const scheduleBackground = document.querySelector('.schedule_background');
  if (scheduleBackground) {
    gsap.to(scheduleBackground, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: '.schedule_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3
      }
    });
  }
});
