// ===== TEACHERS PAGE SPECIFIC ANIMATIONS =====
// Hero collage, teacher list items, bio cards
// Preserve existing pink badge + image switching interactions

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for page animations');
    return;
  }


  // === HERO COLLAGE ===
  // "THE" title from top
  const heroTitleTop = document.querySelector('.hero-collage_title-top');
  if (heroTitleTop) {
    gsap.from(heroTitleTop, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }

  // Hero image scale + fade
  const heroImage = document.querySelector('.hero-collage_image-wrap');
  if (heroImage) {
    gsap.from(heroImage, {
      scale: 0.88,
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // "LINE UP" title from bottom
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

  // === INTRO SECTION ===
  const introTitle = document.querySelector('.plan_wrap .text-h2');
  if (introTitle) {
    gsap.from(introTitle, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: introTitle,
        start: 'top 85%'
      }
    });
  }

  const introDescription = document.querySelector('.plan_wrap .text-body-lg');
  if (introDescription) {
    gsap.from(introDescription, {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: introDescription,
        start: 'top 88%'
      }
    });
  }

  // === TEACHERS LIST ===
  // DO NOT TOUCH: Pink badge + image switching (already working)
  // Only add entrance animations

  const teacherItems = document.querySelectorAll('.teacher_item');
  if (teacherItems.length > 0) {
    teacherItems.forEach((item, index) => {
      gsap.from(item, {
        x: -70,
        opacity: 0,
        duration: 1.1,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.teachers_list',
          start: 'top 80%'
        }
      });
    });
  }

  // Teacher items hover enhancement (subtle)
  teacherItems.forEach((item) => {
    item.addEventListener('mouseenter', function() {
      gsap.to(this, {
        x: 15,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    item.addEventListener('mouseleave', function() {
      gsap.to(this, {
        x: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    });
  });

  // === TEACHERS HERO IMAGE ===
  const teachersImageWrap = document.querySelector('.teachers_image-wrap');
  if (teachersImageWrap) {
    gsap.from(teachersImageWrap, {
      x: 100,
      opacity: 0,
      scale: 0.94,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teachersImageWrap,
        start: 'top 82%'
      }
    });

    // Parallax effect
    gsap.to(teachersImageWrap, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: '.teachers_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.8
      }
    });
  }

  // === TEACHER BIO CARDS ===
  const teacherBioCards = document.querySelectorAll('.teacher-bio_card');
  if (teacherBioCards.length > 0) {
    teacherBioCards.forEach((card, index) => {
      // Card entrance
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      });

      // Card image
      const cardImage = card.querySelector('.teacher-bio_image');
      if (cardImage) {
        gsap.from(cardImage, {
          scale: 0.92,
          opacity: 0,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        });
      }

      // Card content
      const cardContent = card.querySelector('.teacher-bio_content');
      if (cardContent) {
        const contentElements = cardContent.children;
        gsap.from(contentElements, {
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardContent,
            start: 'top 88%'
          }
        });
      }
    });
  }

  // === TEACHERS CTA ===
  const teachersCta = document.querySelector('.teachers_cta');
  if (teachersCta) {
    gsap.from(teachersCta, {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: teachersCta,
        start: 'top 90%'
      }
    });
  }

  // === PARALLAX EFFECTS ===
  // Background parallax
  const teachersBackground = document.querySelector('.teachers_background');
  if (teachersBackground) {
    gsap.to(teachersBackground, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: '.teachers_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3
      }
    });
  }
});
