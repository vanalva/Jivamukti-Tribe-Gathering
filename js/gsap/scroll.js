// ===== SCROLL-BASED DIRECTIONAL ANIMATIONS =====
// Elements enter from left/right/bottom based on scroll
// Smooth, professional, directional reveals

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not available for scroll animations');
    return;
  }

  // === HEADINGS - DIRECTIONAL FADE INS ===
  // Large headings slide in from left
  const displayHeadings = document.querySelectorAll('.text-display-xl, .text-display-lg');
  displayHeadings.forEach((heading, index) => {
    // Skip if it's part of menu (already has animations)
    if (heading.closest('.fullscreen-menu')) return;

    // Alternate direction for visual interest
    const fromLeft = index % 2 === 0;

    gsap.from(heading, {
      x: fromLeft ? -80 : 80,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // H1 headings - subtle fade up
  const h1Headings = document.querySelectorAll('.text-h1');
  h1Headings.forEach((h1) => {
    // Skip schedule section headings (already handled)
    if (h1.closest('.day_header')) return;
    // Skip teacher items (special handling below)
    if (h1.closest('.teacher_item')) return;
    // Skip sticky-scroll sections (has its own animations)
    if (h1.closest('.sticky-scroll_wrap')) return;

    gsap.from(h1, {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: h1,
        start: 'top 88%'
      }
    });
  });

  // H4 headings - quick fade
  const h4Headings = document.querySelectorAll('.text-h4, .text-h5');
  h4Headings.forEach((h4) => {
    // Skip schedule rows (already has interactions)
    if (h4.closest('.day_row')) return;

    gsap.from(h4, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: h4,
        start: 'top 90%'
      }
    });
  });

  // === BODY TEXT - FADE UP ===
  const bodyText = document.querySelectorAll('.text-body-lg, .text-body-md');
  bodyText.forEach((text, index) => {
    // Skip schedule rows and footer content
    if (text.closest('.day_row') || text.closest('.footer_wrap')) return;
    // Skip sticky-scroll sections (has its own animations)
    if (text.closest('.sticky-scroll_wrap')) return;

    gsap.from(text, {
      y: 35,
      opacity: 0,
      duration: 1,
      delay: index * 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: 'top 90%'
      }
    });
  });

  // === ABOUT SECTION TITLE WORDS ===
  // Individual word animations for "LET'S EXPLORE ROME"
  const titleWords = document.querySelectorAll('.home-about_main-title-word');
  if (titleWords.length > 0) {
    gsap.from(titleWords, {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.home-about_main-title',
        start: 'top 80%'
      }
    });
  }

  // === DATE TEXT ===
  const dateText = document.querySelector('.home-about_date');
  if (dateText) {
    gsap.from(dateText, {
      x: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dateText,
        start: 'top 85%'
      }
    });
  }

  // === SUBTITLE ===
  const subtitle = document.querySelector('.home-about_subtitle');
  if (subtitle) {
    gsap.from(subtitle, {
      x: -60,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitle,
        start: 'top 85%'
      }
    });
  }

  // === DAY HEADERS - STAGGER FROM SIDES ===
  const dayHeaders = document.querySelectorAll('.day_header');
  dayHeaders.forEach((header) => {
    const h2Elements = header.querySelectorAll('.text-h1');

    gsap.from(h2Elements[0], {
      x: -70,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header,
        start: 'top 85%'
      }
    });

    if (h2Elements[1]) {
      gsap.from(h2Elements[1], {
        x: 70,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: 'top 85%'
        }
      });
    }
  });

  // === SCHEDULE ROWS - STAGGER CASCADE (non-interactive parts) ===
  // Only animate the row items container, not individual rows (to preserve hover effect)
  const dayRowItems = document.querySelectorAll('.day_row-item');
  if (dayRowItems.length > 0) {
    gsap.from(dayRowItems, {
      y: 50,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.day_table',
        start: 'top 85%'
      }
    });
  }

  // === FOOTER COLUMNS - DIRECTIONAL ===
  const footerColumns = document.querySelectorAll('.footer_column');
  footerColumns.forEach((col, index) => {
    gsap.from(col, {
      x: index === 0 ? -50 : 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: col,
        start: 'top 88%'
      }
    });
  });

  // === FOOTER BOTTOM BAR - FADE UP ===
  const footerBottom = document.querySelector('.footer_bottom');
  if (footerBottom) {
    gsap.from(footerBottom, {
      y: 30,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerBottom,
        start: 'top 90%'
      }
    });
  }

  // === SOCIAL LINKS - STAGGER ===
  const socialLinks = document.querySelectorAll('.footer_social-link');
  if (socialLinks.length > 0) {
    gsap.from(socialLinks, {
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: '.footer_social',
        start: 'top 92%'
      }
    });
  }

  // === ROME TITLE - PARALLAX EFFECT ===
  const romeTitle = document.querySelector('.home-rome_title');
  if (romeTitle) {
    gsap.from(romeTitle, {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: romeTitle,
        start: 'top 85%'
      }
    });

    // Parallax on scroll
    gsap.to(romeTitle, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: '.rome_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // === LOOKING BACK TITLES - SPLIT REVEAL ===
  const lookbackTitle = document.querySelector('.home-lookback_title');
  const lookbackSubtitle = document.querySelector('.home-lookback_subtitle');

  if (lookbackTitle) {
    gsap.from(lookbackTitle, {
      x: -100,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lookbackTitle,
        start: 'top 82%'
      }
    });
  }

  if (lookbackSubtitle) {
    gsap.from(lookbackSubtitle, {
      x: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lookbackSubtitle,
        start: 'top 82%'
      }
    });
  }

  // === IMAGE WRAPS - SUBTLE SCALE + FADE ===
  const imageWraps = document.querySelectorAll('.image-wrap:not(.hero_logo_wrap):not(.hero_floating_image)');
  imageWraps.forEach((wrap, index) => {
    // Skip if part of schedule (has hover interactions)
    if (wrap.closest('.day_wrap')) return;
    // Skip if part of teachers section (has hover interactions)
    if (wrap.closest('.teachers_wrap')) return;
    // Skip sticky-scroll sections (has its own animations)
    if (wrap.closest('.sticky-scroll_wrap')) return;

    gsap.from(wrap, {
      scale: 0.94,
      opacity: 0,
      duration: 1.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrap,
        start: 'top 85%'
      }
    });
  });

  // === CTA SECTIONS ===
  const ctaSections = document.querySelectorAll('.day_cta, .teachers_cta');
  ctaSections.forEach((cta) => {
    gsap.from(cta, {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cta,
        start: 'top 90%'
      }
    });
  });
});
