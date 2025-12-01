// ===== SITE-WIDE GSAP ANIMATIONS =====
// Subtle, professional scroll-triggered animations
// Smooth fade-ins, reveals, and parallax effects

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not available');
    return;
  }

  // ============================================
  // SECTION FADE-INS
  // All major sections get a subtle fade-in
  // ============================================

  const sections = document.querySelectorAll('.u-section:not(.nav_wrap):not(.fullscreen-menu)');
  sections.forEach((section) => {
    // Skip hero sections (they have special animations)
    if (section.classList.contains('hero_wrap')) return;

    gsap.from(section, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // ============================================
  // HERO ANIMATIONS
  // ============================================

  // Main hero logo (homepage)
  const heroLogo = document.querySelector('.hero_logo_wrap');
  if (heroLogo) {
    gsap.from(heroLogo, {
      scale: 0.9,
      opacity: 0,
      duration: 1.4,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // Hero floating images (homepage)
  const heroFloatingImages = document.querySelectorAll('.hero_floating_image');
  heroFloatingImages.forEach((img, index) => {
    const isLeft = img.classList.contains('hero_floating_image-topleft');
    gsap.from(img, {
      x: isLeft ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      duration: 1.4,
      delay: 0.4 + (index * 0.15),
      ease: "power3.out"
    });
  });

  // Hero date
  const heroDate = document.querySelector('.hero_date');
  if (heroDate) {
    gsap.from(heroDate, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power2.out"
    });
  }

  // Hero collage (other pages)
  const heroCollageImage = document.querySelector('.hero-collage_image-wrap');
  if (heroCollageImage) {
    gsap.from(heroCollageImage, {
      x: -60,
      scale: 0.95,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out"
    });
  }

  const heroCollageLogo = document.querySelector('.hero-collage_logo-wrap');
  if (heroCollageLogo) {
    gsap.from(heroCollageLogo, {
      y: -30,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.out"
    });
  }

  const heroCollageTitle = document.querySelector('.hero-collage_title');
  if (heroCollageTitle) {
    gsap.from(heroCollageTitle, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out"
    });
  }

  // ============================================
  // NAVIGATION
  // ============================================

  const nav = document.querySelector('.nav_wrap');
  if (nav) {
    gsap.from(nav, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      ease: "power2.out"
    });
  }

  // ============================================
  // HEADINGS - Staggered reveals
  // ============================================

  // Large display headings
  const displayHeadings = document.querySelectorAll('.text-display-LG, .text-display-xl');
  displayHeadings.forEach((heading) => {
    if (heading.closest('.fullscreen-menu') || heading.closest('.hero_wrap')) return;

    gsap.from(heading, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%'
      }
    });
  });

  // H1 headings
  const h1Headings = document.querySelectorAll('.text-h1');
  h1Headings.forEach((h1) => {
    if (h1.closest('.teacher_item') || h1.closest('.day_header') ||
        h1.closest('.hero_wrap') || h1.closest('.fullscreen-menu')) return;

    gsap.from(h1, {
      y: 35,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: h1,
        start: 'top 88%'
      }
    });
  });

  // About section title words (stagger effect)
  const titleWords = document.querySelectorAll('.home-about_main-title-word');
  if (titleWords.length > 0) {
    gsap.from(titleWords, {
      y: 80,
      opacity: 0,
      stagger: 0.12,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.home-about_main-title',
        start: 'top 80%'
      }
    });
  }

  // ============================================
  // BODY TEXT - Fade up
  // ============================================

  const bodyText = document.querySelectorAll('.text-body-lg, .text-body-md');
  bodyText.forEach((text) => {
    if (text.closest('.footer_wrap') || text.closest('.fullscreen-menu') ||
        text.closest('.day_row') || text.closest('.teacher_item')) return;

    gsap.from(text, {
      y: 25,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: 'top 90%'
      }
    });
  });

  // ============================================
  // IMAGES - Scale and fade
  // ============================================

  // About hero image
  const aboutHeroImage = document.querySelector('.home-about_hero-image-wrap');
  if (aboutHeroImage) {
    gsap.from(aboutHeroImage, {
      x: -60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutHeroImage,
        start: 'top 85%'
      }
    });
  }

  // Location cards
  const locationCards = document.querySelectorAll('.location_card');
  locationCards.forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      }
    });
  });

  // ============================================
  // SCHEDULE SECTION
  // ============================================

  // Schedule day cards
  const scheduleDays = document.querySelectorAll('.schedule-provisional_day');
  scheduleDays.forEach((day, index) => {
    gsap.from(day, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: day,
        start: 'top 88%'
      }
    });
  });

  // Schedule image
  const scheduleImage = document.querySelector('.schedule-provisional_image-wrap');
  if (scheduleImage) {
    gsap.from(scheduleImage, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: scheduleImage,
        start: 'top 82%'
      }
    });
  }

  // ============================================
  // TEACHERS SECTION
  // ============================================

  const teacherItems = document.querySelectorAll('.teacher_item');
  teacherItems.forEach((item, index) => {
    gsap.from(item, {
      x: -50,
      opacity: 0,
      duration: 0.9,
      delay: index * 0.06,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.teachers_list',
        start: 'top 80%'
      }
    });
  });

  // Teachers hero image
  const teachersImage = document.querySelector('.teachers_image-wrap');
  if (teachersImage) {
    gsap.from(teachersImage, {
      x: 60,
      opacity: 0,
      scale: 0.96,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teachersImage,
        start: 'top 82%'
      }
    });
  }

  // ============================================
  // PRICING CARDS
  // ============================================

  const pricingCards = document.querySelectorAll('.card_primary_wrap');
  pricingCards.forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      }
    });
  });

  // Pricing badges
  const pricingBadges = document.querySelectorAll('.logo-300hr, .logo-75hr');
  pricingBadges.forEach((badge) => {
    gsap.from(badge, {
      scale: 0.8,
      opacity: 0,
      rotation: -15,
      duration: 1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: badge,
        start: 'top 88%'
      }
    });
  });

  // ============================================
  // LOOKBACK / ROME SECTIONS
  // ============================================

  const lookbackTitle = document.querySelector('.home-lookback_title');
  if (lookbackTitle) {
    gsap.from(lookbackTitle, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lookbackTitle,
        start: 'top 82%'
      }
    });
  }

  const lookbackSubtitle = document.querySelector('.home-lookback_subtitle');
  if (lookbackSubtitle) {
    gsap.from(lookbackSubtitle, {
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lookbackSubtitle,
        start: 'top 82%'
      }
    });
  }

  const lookbackImage = document.querySelector('.home-lookback_image-wrap');
  if (lookbackImage) {
    gsap.from(lookbackImage, {
      y: 50,
      opacity: 0,
      scale: 0.97,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lookbackImage,
        start: 'top 82%'
      }
    });
  }

  // Video section
  const videoWrap = document.querySelector('.home-rome_video-wrap');
  if (videoWrap) {
    gsap.from(videoWrap, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoWrap,
        start: 'top 80%'
      }
    });
  }

  // ============================================
  // STICKY SCROLL SECTION
  // ============================================

  const stickyImages = document.querySelectorAll('.sticky-scroll_image');
  stickyImages.forEach((img) => {
    gsap.from(img, {
      scale: 1.1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: 'top 80%'
      }
    });
  });

  const stickyTextBlocks = document.querySelectorAll('.sticky-scroll_text-block');
  stickyTextBlocks.forEach((block) => {
    gsap.from(block, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: block,
        start: 'top 85%'
      }
    });
  });

  // ============================================
  // ARCHIVE PAGE - Video Grid
  // ============================================

  const videoCards = document.querySelectorAll('.video-grid_item');
  videoCards.forEach((card, index) => {
    gsap.from(card, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      delay: index * 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 88%'
      }
    });
  });

  // Filter tabs
  const filterTabs = document.querySelectorAll('.filter_tab');
  filterTabs.forEach((tab, index) => {
    gsap.from(tab, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2 + (index * 0.05),
      ease: "power2.out"
    });
  });

  // ============================================
  // BUTTONS - Subtle entrance
  // ============================================

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((btn) => {
    if (btn.closest('.fullscreen-menu')) return;

    gsap.from(btn, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: btn,
        start: 'top 92%'
      }
    });
  });

  // ============================================
  // FOOTER
  // ============================================

  const footerLogo = document.querySelector('.footer_logo-wrap');
  if (footerLogo) {
    gsap.from(footerLogo, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.footer_wrap',
        start: 'top 85%'
      }
    });
  }

  const footerColumns = document.querySelectorAll('.footer_column');
  footerColumns.forEach((col, index) => {
    gsap.from(col, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: col,
        start: 'top 88%'
      }
    });
  });

  const footerGrid = document.querySelector('.footer_grid');
  if (footerGrid) {
    gsap.from(footerGrid, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerGrid,
        start: 'top 88%'
      }
    });
  }

  const footerSocial = document.querySelectorAll('.footer_social-link');
  footerSocial.forEach((link, index) => {
    gsap.from(link, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.08,
      ease: "back.out(1.3)",
      scrollTrigger: {
        trigger: '.footer_social',
        start: 'top 92%'
      }
    });
  });

  // ============================================
  // PARALLAX EFFECTS (subtle)
  // ============================================

  // Hero floating images parallax
  heroFloatingImages.forEach((img, index) => {
    gsap.to(img, {
      y: index === 0 ? -30 : 30,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero_wrap',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });
  });

  // Teachers image parallax
  if (teachersImage) {
    gsap.to(teachersImage, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: '.teachers_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });
  }

  // About image parallax
  if (aboutHeroImage) {
    gsap.to(aboutHeroImage, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: '.about_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });
  }

  // ============================================
  // HOVER ENHANCEMENTS (desktop only)
  // ============================================

  if (window.matchMedia('(hover: hover)').matches) {
    // Teacher items hover
    teacherItems.forEach((item) => {
      item.addEventListener('mouseenter', function() {
        gsap.to(this, { x: 10, duration: 0.3, ease: "power2.out" });
      });
      item.addEventListener('mouseleave', function() {
        gsap.to(this, { x: 0, duration: 0.25, ease: "power2.inOut" });
      });
    });

    // Pricing cards hover
    pricingCards.forEach((card) => {
      card.addEventListener('mouseenter', function() {
        gsap.to(this, { y: -8, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', function() {
        gsap.to(this, { y: 0, duration: 0.25, ease: "power2.inOut" });
      });
    });

    // Location cards hover
    locationCards.forEach((card) => {
      card.addEventListener('mouseenter', function() {
        gsap.to(this, { y: -5, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', function() {
        gsap.to(this, { y: 0, duration: 0.25, ease: "power2.inOut" });
      });
    });
  }

  // ============================================
  // SCHEDULE PAGE SPECIFIC
  // ============================================

  const dayHeaders = document.querySelectorAll('.day_header');
  dayHeaders.forEach((header) => {
    const titles = header.querySelectorAll('.text-h1');
    titles.forEach((title, index) => {
      gsap.from(title, {
        x: index === 0 ? -60 : 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: 'top 85%'
        }
      });
    });
  });

  const dayRows = document.querySelectorAll('.day_row');
  dayRows.forEach((row, index) => {
    gsap.from(row, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: row,
        start: 'top 90%'
      }
    });
  });

  // ============================================
  // CTA SECTIONS
  // ============================================

  const ctaSections = document.querySelectorAll('.day_cta, .teachers_cta, .cta_wrap');
  ctaSections.forEach((cta) => {
    gsap.from(cta, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cta,
        start: 'top 88%'
      }
    });
  });
});
