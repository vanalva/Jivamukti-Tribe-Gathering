// ===== ABOUT ROME PAGE SPECIFIC ANIMATIONS =====
// Hero collage, filter tabs, listing cards
// Professional directional animations

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for page animations');
    return;
  }


  // === HERO COLLAGE ===
  // "ABOUT" title from top
  const heroTitleTop = document.querySelector('.hero-collage_title-top');
  if (heroTitleTop) {
    gsap.from(heroTitleTop, {
      y: -60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }

  // Hero image from right with scale
  const heroImage = document.querySelector('.hero-collage_image-wrap');
  if (heroImage) {
    gsap.from(heroImage, {
      x: 100,
      scale: 0.92,
      opacity: 0,
      duration: 1.4,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // "ROME" title from bottom
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

  // === PLAN EXPERIENCE SECTION ===
  const planTitle = document.querySelector('.plan_wrap .text-h2');
  if (planTitle) {
    gsap.from(planTitle, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: planTitle,
        start: 'top 85%'
      }
    });
  }

  const planSubtitle = document.querySelector('.plan_subtitle');
  if (planSubtitle) {
    gsap.from(planSubtitle, {
      x: -40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: planSubtitle,
        start: 'top 88%'
      }
    });
  }

  const planDescription = document.querySelector('.plan_description');
  if (planDescription) {
    gsap.from(planDescription, {
      y: 30,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: planDescription,
        start: 'top 88%'
      }
    });
  }

  // CTA buttons stagger
  const planButtons = document.querySelectorAll('.plan_cta-group .button');
  if (planButtons.length > 0) {
    gsap.from(planButtons, {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.plan_cta-group',
        start: 'top 90%'
      }
    });
  }

  const planVenues = document.querySelector('.plan_venues');
  if (planVenues) {
    gsap.from(planVenues, {
      x: 60,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: planVenues,
        start: 'top 88%'
      }
    });
  }

  // === FILTER TABS ===
  const filterTabs = document.querySelectorAll('.filter_tab');
  if (filterTabs.length > 0) {
    gsap.from(filterTabs, {
      y: -30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.filter_tabs',
        start: 'top 90%'
      }
    });
  }

  // === LISTINGS SECTIONS ===
  // Day headers (category headers) - stagger from sides
  const categoryHeaders = document.querySelectorAll('.day_header');
  categoryHeaders.forEach((header) => {
    const h2Elements = header.querySelectorAll('.text-h1');

    if (h2Elements[0]) {
      gsap.from(h2Elements[0], {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: 'top 85%'
        }
      });
    }

    if (h2Elements[1]) {
      gsap.from(h2Elements[1], {
        x: 80,
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

  // Listing rows - cascade entrance
  const listingRows = document.querySelectorAll('.day_row');
  if (listingRows.length > 0) {
    // Group by parent day_wrap for staggered animation per section
    const dayWraps = document.querySelectorAll('.day_wrap');

    dayWraps.forEach((dayWrap) => {
      const rows = dayWrap.querySelectorAll('.day_row');

      gsap.from(rows, {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: dayWrap.querySelector('.day_table'),
          start: 'top 85%'
        }
      });
    });
  }

  // === LISTING ROW HOVER EFFECTS ===
  // Subtle scale on hover
  listingRows.forEach((row) => {
    row.addEventListener('mouseenter', function() {
      gsap.to(this, {
        x: 10,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    row.addEventListener('mouseleave', function() {
      gsap.to(this, {
        x: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    });
  });

  // === CTA SECTIONS ===
  const ctaSections = document.querySelectorAll('.day_cta');
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

  // === PARALLAX EFFECTS ===
  // Subtle parallax on section backgrounds
  const sectionBackgrounds = document.querySelectorAll('.plan_background, .schedule_background');
  sectionBackgrounds.forEach((bg) => {
    gsap.to(bg, {
      y: 50,
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
