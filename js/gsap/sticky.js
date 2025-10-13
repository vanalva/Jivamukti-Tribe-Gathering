// ===== STICKY SCROLL & PARALLAX EFFECTS =====
// Subtle parallax and ramp effects
// Smooth scroll-based animations

document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not available for sticky/parallax animations');
    return;
  }

  // === PARALLAX RAMP - HERO FLOATING IMAGES ===
  // Floating images move at different speeds for depth
  const heroFloatingTopLeft = document.querySelector('.hero_floating_image-topleft');
  const heroFloatingBottomRight = document.querySelector('.hero_floating_image-bottomright');

  if (heroFloatingTopLeft) {
    gsap.to(heroFloatingTopLeft, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero_wrap',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.8
      }
    });
  }

  if (heroFloatingBottomRight) {
    gsap.to(heroFloatingBottomRight, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero_wrap',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.2
      }
    });
  }

  // === PARALLAX RAMP - HERO MAIN LOGO ===
  const heroMainLogo = document.querySelector('.hero_logo_wrap');
  if (heroMainLogo) {
    gsap.to(heroMainLogo, {
      y: -80,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero_wrap',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // === ABOUT SECTION PARALLAX ===
  // Hero image parallax
  const aboutHeroImage = document.querySelector('.home-about_hero-image');
  if (aboutHeroImage) {
    gsap.to(aboutHeroImage, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: '.home-about_hero-image-wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // === STICKY SCROLL SECTIONS ===
  // Detect and enhance existing sticky-scroll sections
  const stickyScrollWraps = document.querySelectorAll('.sticky-scroll_wrap');

  stickyScrollWraps.forEach((wrap) => {
    const imageBlock = wrap.querySelector('.sticky-scroll_image-block, .sticky-scroll_images-container');
    const textBlocks = wrap.querySelectorAll('.sticky-scroll_text-block');

    // Pin the image while content scrolls
    if (imageBlock) {
      ScrollTrigger.create({
        trigger: wrap,
        start: 'top top',
        end: 'bottom bottom',
        pin: imageBlock,
        pinSpacing: false,
        anticipatePin: 1
      });

      // Subtle parallax within pinned image
      const image = imageBlock.querySelector('img');
      if (image) {
        gsap.to(image, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2
          }
        });
      }
    }

    // Text blocks fade in progressively
    textBlocks.forEach((block, index) => {
      gsap.from(block, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: block,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });

  // === VIDEO SECTION PARALLAX ===
  const romeVideo = document.querySelector('.home-rome_video-image');
  if (romeVideo) {
    gsap.to(romeVideo, {
      y: -50,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: '.rome_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.8
      }
    });
  }

  // === LOOKING BACK IMAGE PARALLAX ===
  const lookbackImage = document.querySelector('.home-lookback_image-wrap img');
  if (lookbackImage) {
    gsap.to(lookbackImage, {
      y: -70,
      ease: "none",
      scrollTrigger: {
        trigger: '.lookback_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });
  }

  // === BACKGROUND PARALLAX - SECTIONS ===
  // Subtle background movement for depth
  const sectionBackgrounds = document.querySelectorAll('.about_background, .schedule_background, .teachers_background');

  sectionBackgrounds.forEach((bg) => {
    gsap.to(bg, {
      y: 40,
      ease: "none",
      scrollTrigger: {
        trigger: bg.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3
      }
    });
  });

  // === RAMPING EFFECT - SCHEDULE DAY IMAGE ===
  // Day image scales and moves on scroll
  const dayImages = document.querySelectorAll('.day_image');
  dayImages.forEach((dayImg) => {
    const img = dayImg.querySelector('img');

    if (img) {
      // Ramp in with scale
      gsap.fromTo(img,
        {
          scale: 0.9,
          opacity: 0.8
        },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: dayImg,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1.5
          }
        }
      );

      // Continue parallax
      gsap.to(img, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: dayImg,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    }
  });

  // === SMOOTH REVEAL - FOOTER LOGO ===
  // Additional smooth ramping for footer logo
  const footerLogoImage = document.querySelector('.footer_logo-image');
  if (footerLogoImage) {
    // Subtle rotation + scale on scroll
    gsap.to(footerLogoImage, {
      rotation: 3,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: '.footer_wrap',
        start: 'top 90%',
        end: 'top 40%',
        scrub: 2
      }
    });
  }

  // === PLAY BUTTON FLOAT ===
  const playButton = document.querySelector('.home-rome_play-button');
  if (playButton) {
    // Gentle floating animation
    gsap.to(playButton, {
      y: 15,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Scale on hover handled by CSS, but add smooth transition
    playButton.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.15,
        duration: 0.4,
        ease: "back.out(1.4)"
      });
    });

    playButton.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }

  // === TEACHER ITEMS RAMPING ===
  // Progressive reveal with slight delay
  const teacherItems = document.querySelectorAll('.teacher_item');
  if (teacherItems.length > 0) {
    gsap.from(teacherItems, {
      x: -60,
      opacity: 0,
      stagger: 0.12,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.teachers_list',
        start: 'top 80%'
      }
    });
  }

  // === TEACHERS HERO IMAGE PARALLAX ===
  const teachersHeroWrap = document.querySelector('.teachers_image-wrap');
  if (teachersHeroWrap) {
    gsap.to(teachersHeroWrap, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: '.teachers_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.8
      }
    });
  }
});
