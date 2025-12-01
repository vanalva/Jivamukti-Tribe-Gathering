/**
 * Main JavaScript for Jivamukti Tribe Gathering HTML Site
 * Vanilla JS implementation of all interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // MENU TOGGLE FUNCTIONALITY
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const fullscreenMenu = document.getElementById('fullscreenMenu');
  const navWrap = document.querySelector('.nav_wrap');

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function openMenu() {
    if (!fullscreenMenu || !menuToggle) return;

    const scrollbarWidth = getScrollbarWidth();
    fullscreenMenu.classList.add('is-open');
    menuToggle.classList.add('is-active');
    if (navWrap) navWrap.classList.add('menu-is-open');

    if (scrollbarWidth > 0) {
      const currentBodyPadding = parseInt(window.getComputedStyle(document.body).paddingRight) || 0;
      const currentNavPadding = navWrap ? parseInt(window.getComputedStyle(navWrap).paddingRight) || 0 : 0;
      document.body.style.paddingRight = (currentBodyPadding + scrollbarWidth) + 'px';
      if (navWrap) navWrap.style.paddingRight = (currentNavPadding + scrollbarWidth) + 'px';
    }
    document.body.classList.add('u-overflow-hidden');
  }

  function closeMenu() {
    if (!fullscreenMenu || !menuToggle) return;

    fullscreenMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
    if (navWrap) navWrap.classList.remove('menu-is-open');
    document.body.classList.remove('u-overflow-hidden');
    document.body.style.paddingRight = '';
    if (navWrap) navWrap.style.paddingRight = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      if (fullscreenMenu && fullscreenMenu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (fullscreenMenu) {
    fullscreenMenu.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('menu-close') || target.closest('.menu-close')) {
        closeMenu();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && fullscreenMenu && fullscreenMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // ============================================
  // HERO PARALLAX EFFECT
  // ============================================
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    const floatingImages = document.querySelectorAll('.hero_floating_image');

    if (floatingImages.length > 0) {
      let animationFrame = null;
      let mouseX = 0;
      let mouseY = 0;

      function handleMouseMove(e) {
        const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
        const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;

        mouseX = normalizedX;
        mouseY = normalizedY;

        if (!animationFrame) {
          animationFrame = requestAnimationFrame(animateParallax);
        }
      }

      function animateParallax() {
        floatingImages.forEach(function(image, index) {
          const intensity = index === 0 ? 20 : 30;
          const direction = index === 0 ? -1 : 1;

          const translateX = mouseX * intensity * direction;
          const translateY = mouseY * intensity * direction;

          image.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
        });

        animationFrame = null;
      }

      document.addEventListener('mousemove', handleMouseMove);
    }
  }

  // ============================================
  // TEACHERS HOVER EFFECT
  // ============================================
  const teachersSections = document.querySelectorAll('.teachers_wrap');

  teachersSections.forEach(function(teachersSection) {
    const teacherItems = teachersSection.querySelectorAll('.teacher_item');
    const teachersList = teachersSection.querySelector('.teachers_list');
    const hoverBadge = teachersSection.querySelector('.teachers_hover-badge');
    const badgeText = teachersSection.querySelector('.teachers_hover-badge-text');
    const heroImage = teachersSection.querySelector('.teachers_hero-image');
    const heroImageWrap = teachersSection.querySelector('.teachers_image-wrap');

    if (hoverBadge && heroImage && badgeText && teachersList) {
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovering = false;
      let animationFrame = null;
      let currentTeacherName = '';

      const defaultBadgeText = 'SCROLL TO<br>SEE MORE';

      function animateBadge() {
        if (!isHovering) return;

        const ease = 0.15;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        hoverBadge.style.left = currentX + 'px';
        hoverBadge.style.top = currentY + 'px';

        animationFrame = requestAnimationFrame(animateBadge);
      }

      // Listen to entire teachers list container
      teachersList.addEventListener('mouseenter', function(e) {
        isHovering = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
        currentX = mouseX;
        currentY = mouseY;

        hoverBadge.classList.add('is-visible');
        badgeText.innerHTML = defaultBadgeText;
        animateBadge();
      });

      teachersList.addEventListener('mouseleave', function() {
        isHovering = false;
        hoverBadge.classList.remove('is-visible');
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      });

      teachersList.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Individual teacher item hover - update image and name
      teacherItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
          const teacherImageUrl = item.getAttribute('data-teacher-image');
          const teacherName = item.getAttribute('data-teacher-name');

          if (teacherImageUrl) {
            heroImage.src = teacherImageUrl;
          }
          if (teacherName) {
            currentTeacherName = teacherName;
          }
        });
      });

      // Hero image hover - show badge with teacher name
      if (heroImageWrap) {
        heroImageWrap.addEventListener('mouseenter', function(e) {
          if (currentTeacherName) {
            isHovering = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
            currentX = mouseX;
            currentY = mouseY;

            hoverBadge.classList.add('is-visible');
            badgeText.innerHTML = currentTeacherName;
            animateBadge();
          }
        });

        heroImageWrap.addEventListener('mouseleave', function() {
          isHovering = false;
          hoverBadge.classList.remove('is-visible');
          badgeText.innerHTML = defaultBadgeText;
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        });

        heroImageWrap.addEventListener('mousemove', function(e) {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });
      }
    }
  });

  // ============================================
  // TEACHER MODAL FUNCTIONALITY
  // ============================================
  const teacherItemsForModal = document.querySelectorAll('.teacher_item');
  const modal = document.getElementById('teacherModal');
  const closeModalBtn = document.querySelector('.teacher-modal_close');

  teacherItemsForModal.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const teacherName = item.getAttribute('data-teacher-name');
      const teacherImage = item.getAttribute('data-teacher-image');
      const teacherRoleEl = item.querySelector('.teacher_eyebrow');
      const teacherRole = teacherRoleEl ? teacherRoleEl.textContent : '';

      // Update modal content
      const modalImage = document.querySelector('.teacher-modal_image');
      const modalName = document.querySelector('.teacher-modal_name');
      const modalRole = document.querySelector('.teacher-modal_role');

      if (modalImage && teacherImage) modalImage.src = teacherImage;
      if (modalName && teacherName) modalName.textContent = teacherName;
      if (modalRole && teacherRole) modalRole.textContent = teacherRole;

      // Show modal
      if (modal) {
        modal.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      if (modal) {
        modal.classList.remove('is-visible');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modal on outside click
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('is-visible');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-visible')) {
      modal.classList.remove('is-visible');
      document.body.style.overflow = '';
    }
  });

  // ============================================
  // SCHEDULE INTERACTIONS (if schedule section exists)
  // ============================================
  const scheduleSections = document.querySelectorAll('.schedule_wrap:not(.u-hidden)');

  scheduleSections.forEach(function(scheduleSection) {
    const dayRows = scheduleSection.querySelectorAll('.day_row');
    const dayImage = scheduleSection.querySelector('.day_image img');
    const scheduleHoverBadge = scheduleSection.querySelector('.schedule_hover-badge');

    if (dayRows.length > 0 && dayImage) {
      let scheduleMouseX = 0;
      let scheduleMouseY = 0;
      let scheduleCurrentX = 0;
      let scheduleCurrentY = 0;
      let scheduleIsHovering = false;
      let scheduleAnimationFrame = null;

      function animateScheduleBadge() {
        if (!scheduleIsHovering) return;

        const ease = 0.15;
        scheduleCurrentX += (scheduleMouseX - scheduleCurrentX) * ease;
        scheduleCurrentY += (scheduleMouseY - scheduleCurrentY) * ease;

        if (scheduleHoverBadge) {
          scheduleHoverBadge.style.left = scheduleCurrentX + 'px';
          scheduleHoverBadge.style.top = scheduleCurrentY + 'px';
        }

        scheduleAnimationFrame = requestAnimationFrame(animateScheduleBadge);
      }

      dayRows.forEach(function(row) {
        row.addEventListener('mouseenter', function(e) {
          const imageUrl = row.getAttribute('data-image');
          if (imageUrl && dayImage) {
            dayImage.src = imageUrl;
          }

          scheduleIsHovering = true;
          scheduleMouseX = e.clientX;
          scheduleMouseY = e.clientY;
          scheduleCurrentX = scheduleMouseX;
          scheduleCurrentY = scheduleMouseY;

          if (scheduleHoverBadge) {
            scheduleHoverBadge.classList.add('is-visible');
          }
          animateScheduleBadge();
        });

        row.addEventListener('mouseleave', function() {
          scheduleIsHovering = false;
          if (scheduleHoverBadge) {
            scheduleHoverBadge.classList.remove('is-visible');
          }
          if (scheduleAnimationFrame) {
            cancelAnimationFrame(scheduleAnimationFrame);
          }
        });

        row.addEventListener('mousemove', function(e) {
          scheduleMouseX = e.clientX;
          scheduleMouseY = e.clientY;
        });

        // Expandable row functionality
        row.addEventListener('click', function() {
          const rowItem = row.closest('.day_row-item');
          if (rowItem) {
            const isExpanded = rowItem.classList.contains('is-expanded');

            // Close all other expanded rows
            scheduleSection.querySelectorAll('.day_row-item.is-expanded').forEach(function(item) {
              if (item !== rowItem) {
                item.classList.remove('is-expanded');
              }
            });

            // Toggle current row
            rowItem.classList.toggle('is-expanded', !isExpanded);
          }
        });
      });
    }
  });

  // ============================================
  // NAVIGATION ACTIVE STATE
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav_link');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('nav_link--active');
      // Update arrow icon to red version
      const arrowIcon = link.querySelector('.nav_arrow-icon');
      if (arrowIcon) {
        arrowIcon.src = 'images/menu/arrow-red.svg';
      }
    }
  });

  // ============================================
  // SCHEDULE PROVISIONAL - Image on Hover
  // ============================================
  const scheduleProvisionalSection = document.querySelector('.schedule-provisional_layout');

  if (scheduleProvisionalSection) {
    const scheduleImage = scheduleProvisionalSection.querySelector('.schedule-provisional_image');
    const dayCards = scheduleProvisionalSection.querySelectorAll('.schedule-provisional_day');
    const defaultImageSrc = scheduleImage ? scheduleImage.src : '';

    dayCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        const newImageSrc = card.getAttribute('data-image');
        if (newImageSrc && scheduleImage) {
          scheduleImage.style.opacity = '0';
          setTimeout(function() {
            scheduleImage.src = newImageSrc;
            scheduleImage.style.opacity = '1';
          }, 200);
        }
      });

      card.addEventListener('mouseleave', function() {
        if (scheduleImage && defaultImageSrc) {
          scheduleImage.style.opacity = '0';
          setTimeout(function() {
            scheduleImage.src = defaultImageSrc;
            scheduleImage.style.opacity = '1';
          }, 200);
        }
      });
    });
  }

  // ============================================
  // HERO TITLE AUTO-FIT
  // Dynamically sizes hero titles to fill available space
  // ============================================
  function fitHeroTitles() {
    const titles = document.querySelectorAll('.hero-collage_title-bottom');

    titles.forEach(function(title) {
      const parent = title.closest('.hero-collage_content');
      if (!parent) return;

      const logo = parent.querySelector('.hero-collage_logo-wrap');
      if (!logo) return;

      // Get available width (half of parent for desktop layout)
      const parentRect = parent.getBoundingClientRect();
      const availableWidth = window.innerWidth >= 992 ? parentRect.width / 2 - 40 : parentRect.width - 40;

      // Get logo height to calculate available vertical space
      const logoRect = logo.getBoundingClientRect();
      const availableHeight = window.innerWidth >= 992 ? parentRect.height - logoRect.height - 60 : parentRect.height * 0.3;

      // Count words to determine optimal sizing
      const text = title.textContent.trim();
      const words = text.split(/\s+/).length;

      // Calculate optimal font size based on text length and available space
      let fontSize;
      const charCount = text.length;

      if (window.innerWidth >= 992) {
        // Desktop: prioritize filling horizontal space
        // Shorter titles = larger font
        if (words <= 1) {
          fontSize = Math.min(availableWidth / (charCount * 0.55), availableHeight / 1.2);
        } else if (words <= 2) {
          fontSize = Math.min(availableWidth / (charCount * 0.5), availableHeight / 2.2);
        } else {
          fontSize = Math.min(availableWidth / (Math.max(...text.split(/\s+/).map(w => w.length)) * 0.6), availableHeight / (words * 1.1));
        }
        // Clamp between reasonable bounds
        fontSize = Math.max(48, Math.min(fontSize, 180));
      } else {
        // Mobile/tablet: center aligned, use viewport width
        fontSize = Math.min(availableWidth / (Math.max(...text.split(/\s+/).map(w => w.length)) * 0.65), 80);
        fontSize = Math.max(32, Math.min(fontSize, 80));
      }

      title.style.fontSize = fontSize + 'px';
    });
  }

  // Run on load and resize
  fitHeroTitles();
  window.addEventListener('resize', fitHeroTitles);

  console.log('Jivamukti Tribe Gathering - All interactions initialized');
});
