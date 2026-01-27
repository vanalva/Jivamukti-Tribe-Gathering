// ===== ARCHIVE PAGE SPECIFIC ANIMATIONS =====
// Hero, video grid, filter buttons
// Professional cascade and directional animations

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

  // Hero logo from right
  const heroLogo = document.querySelector('.hero-collage_logo-wrap');
  if (heroLogo) {
    gsap.from(heroLogo, {
      x: 100,
      opacity: 0,
      duration: 1.3,
      delay: 0.1,
      ease: "power3.out"
    });
  }

  // "ARCHIVE" title from bottom
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

  // === VIDEO HERO SECTION ===
  // Title group - stagger from left
  const videoHeroTitles = document.querySelectorAll('.video-hero_text-group .text-h1');
  if (videoHeroTitles.length > 0) {
    gsap.from(videoHeroTitles, {
      x: -80,
      opacity: 0,
      stagger: 0.12,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.video-hero_text-group',
        start: 'top 85%'
      }
    });
  }

  const videoHeroSubtitle = document.querySelector('.video-hero_subtitle');
  if (videoHeroSubtitle) {
    gsap.from(videoHeroSubtitle, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoHeroSubtitle,
        start: 'top 88%'
      }
    });
  }

  // Featured video from right
  const featuredVideo = document.querySelector('.video-hero_video-wrap');
  if (featuredVideo) {
    gsap.from(featuredVideo, {
      x: 100,
      scale: 0.94,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featuredVideo,
        start: 'top 82%'
      }
    });
  }

  // Play button gentle pulse
  const featuredPlayButton = document.querySelector('.video-hero_play-button');
  if (featuredPlayButton) {
    gsap.to(featuredPlayButton, {
      scale: 1.1,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: featuredPlayButton,
        start: 'top 85%'
      }
    });
  }

  // === FILTER BUTTONS ===
  const filterButtons = document.querySelectorAll('.filter_button');
  if (filterButtons.length > 0) {
    gsap.from(filterButtons, {
      y: -30,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.filter_buttons',
        start: 'top 90%'
      }
    });
  }

  // === VIDEO GRID ===
  // Video items cascade
  const videoItems = document.querySelectorAll('.video-item_wrap');
  if (videoItems.length > 0) {
    videoItems.forEach((item, index) => {
      // Alternate direction: even from left, odd from right
      const fromLeft = index % 2 === 0;

      gsap.from(item, {
        x: fromLeft ? -70 : 70,
        y: 50,
        opacity: 0,
        scale: 0.94,
        duration: 1.1,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.video-grid_content',
          start: 'top 80%'
        }
      });

      // Hover effects
      item.addEventListener('mouseenter', function() {
        gsap.to(this, {
          y: -15,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        });

        const playBtn = this.querySelector('.video-item_play-button');
        if (playBtn) {
          gsap.to(playBtn, {
            scale: 1.2,
            rotation: 90,
            duration: 0.4,
            ease: "back.out(1.4)"
          });
        }
      });

      item.addEventListener('mouseleave', function() {
        gsap.to(this, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut"
        });

        const playBtn = this.querySelector('.video-item_play-button');
        if (playBtn) {
          gsap.to(playBtn, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
      });
    });
  }

  // Video thumbnails subtle parallax
  const videoThumbnails = document.querySelectorAll('.video-item_thumbnail img');
  videoThumbnails.forEach((img) => {
    gsap.to(img, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: img.closest('.video-item_wrap'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  });

  // === VIDEO DETAIL VIEW ===
  // Observe when detail view appears (via filter interaction)
  const videoDetailContent = document.getElementById('videoDetailContent');
  if (videoDetailContent) {
    const detailObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          const isVisible = videoDetailContent.style.display !== 'none';

          if (isVisible) {
            // Animate detail view entrance
            const detailVideo = videoDetailContent.querySelector('.video-detail_video');
            const detailInfo = videoDetailContent.querySelector('.video-detail_info');

            if (detailVideo) {
              gsap.from(detailVideo, {
                x: -80,
                opacity: 0,
                scale: 0.94,
                duration: 1.2,
                ease: "power3.out"
              });
            }

            if (detailInfo) {
              const infoElements = detailInfo.children;
              gsap.from(infoElements, {
                x: 80,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out"
              });
            }
          }
        }
      });
    });

    detailObserver.observe(videoDetailContent, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  // === PARALLAX EFFECTS ===
  // Background parallax
  const videoGridBackground = document.querySelector('.video-grid_background');
  if (videoGridBackground) {
    gsap.to(videoGridBackground, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: '.video-grid_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3
      }
    });
  }

  const videoHeroBackground = document.querySelector('.video-hero_background');
  if (videoHeroBackground) {
    gsap.to(videoHeroBackground, {
      y: 40,
      ease: "none",
      scrollTrigger: {
        trigger: '.video-hero_wrap',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2.5
      }
    });
  }
});
