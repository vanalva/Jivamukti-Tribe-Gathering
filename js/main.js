/**
 * Main JavaScript for Jivamukti Tribe Gathering HTML Site
 * Vanilla JS implementation of all interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
  // ---- Page wrapper hooks (template layer) ----
  // Touch devices: Rome used @media (hover: none) and (pointer: coarse) in CSS; the same
  // query now sets .is-touch on the wrapper and project.css keys off it.
  // Menu photo: the fullscreen menu is a shared component, each page names its own
  // photo on the wrapper (data-menu-image).
  var siteWrap = document.querySelector('[data-flwr]');
  // Line-up hover badge: Rome only hid it on mouseleave of the list, so it could linger over
  // other sections after a scroll. Hide it whenever the pointer is outside the line-up block.
  document.addEventListener('pointermove', function (e) {
    var badge = document.querySelector('.teachers_hover-badge');
    if (!badge || !badge.classList.contains('is-visible')) return;
    var inside = e.target && e.target.closest && e.target.closest('.teachers_content');
    if (!inside) badge.classList.remove('is-visible');
  }, { passive: true });
  if (siteWrap) {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) siteWrap.classList.add('is-touch');
    var menuImage = siteWrap.getAttribute('data-menu-image');
    var menuHero = document.querySelector('.menu-fullscreen_hero-image');
    if (menuImage && menuHero) menuHero.setAttribute('src', menuImage);
  }
  // Inner-page heroes (hero-collage): the lockup is centred in the band above the page title.
  // The title's height depends on its line count, so it is measured here and handed to the
  // CSS as --hero-title-h (project.css: .hero-collage_logo-wrap padding-bottom).
  // Desktop, text column on the right: project.css reserves the fixed stamp's corner with the
  // title's padding-right. The title keeps the line breaks it has in the full column and is
  // scaled down until its widest line fits what is left (.is-stamp-fit + --hero-title-fit), so
  // "REGISTER" stays one line and "ABOUT THE / TRIBE" stays two instead of wrapping to three.
  var collage = document.querySelector('.hero-collage_content--with-navbar');
  if (collage) {
    var stacked = window.matchMedia('(max-width: 991px)');
    var setTitleH = function () {
      var title = collage.querySelector('.hero-collage_title-bottom');
      if (!title) return;
      var range = document.createRange(); range.selectNodeContents(title);
      title.classList.remove('is-stamp-fit'); title.style.removeProperty('--hero-title-fit');
      if (!stacked.matches && !collage.classList.contains('hero-collage_content--inverted')) {
        var cs = getComputedStyle(title);
        var room = title.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        title.style.setProperty('padding-right', '0px');
        var widest = 0;
        Array.prototype.forEach.call(range.getClientRects(), function (r) { widest = Math.max(widest, r.width); });
        title.style.removeProperty('padding-right');
        if (room > 0 && widest > room) {
          title.style.setProperty('--hero-title-fit', Math.floor(parseFloat(cs.fontSize) * room / widest) + 'px');
          title.classList.add('is-stamp-fit');
        }
      }
      collage.style.setProperty('--hero-title-h', Math.round(range.getBoundingClientRect().height) + 'px');
    };
    setTitleH(); window.addEventListener('resize', setTitleH);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTitleH);
  }

  // ============================================
  // MENU TOGGLE FUNCTIONALITY
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const menuToggleFixedRef = document.getElementById('menuToggleFixed');
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
    if (menuToggleFixedRef) menuToggleFixedRef.classList.add('is-active');
    if (navWrap) navWrap.classList.add('menu-is-open');

    // Hide navbar hamburger if fixed hamburger is visible (scrolled state)
    if (menuToggleFixedRef && menuToggleFixedRef.classList.contains('is-visible')) {
      menuToggle.style.visibility = 'hidden';
    }

    if (scrollbarWidth > 0) {
      const currentBodyPadding = parseInt(window.getComputedStyle(document.body).paddingRight) || 0;
      const currentNavPadding = navWrap ? parseInt(window.getComputedStyle(navWrap).paddingRight) || 0 : 0;
      document.body.style.paddingRight = (currentBodyPadding + scrollbarWidth) + 'px';
      if (navWrap) navWrap.style.paddingRight = (currentNavPadding + scrollbarWidth) + 'px';
    }
    document.body.classList.add('is-scroll-locked');
    document.documentElement.classList.add('is-scroll-locked');
  }

  function closeMenu() {
    if (!fullscreenMenu || !menuToggle) return;

    fullscreenMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
    if (menuToggleFixedRef) menuToggleFixedRef.classList.remove('is-active');
    if (navWrap) navWrap.classList.remove('menu-is-open');
    document.body.classList.remove('is-scroll-locked');
    document.documentElement.classList.remove('is-scroll-locked');
    document.body.style.paddingRight = '';
    if (navWrap) navWrap.style.paddingRight = '';
    // Restore navbar hamburger visibility
    menuToggle.style.visibility = '';
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
  // FIXED HAMBURGER ON HOMEPAGE (appears on scroll)
  // ============================================
  const heroHomeWrap = document.querySelector('.hero-home_wrap');
  const menuToggleFixed = document.getElementById('menuToggleFixed');

  if (heroHomeWrap && menuToggleFixed) {
    function handleFixedHamburger() {
      // Show fixed hamburger after scrolling past navbar
      if (window.scrollY > 100) {
        menuToggleFixed.classList.add('is-visible');
        // Hide navbar hamburger when fixed one is visible
        if (menuToggle) menuToggle.style.opacity = '0';
        if (menuToggle) menuToggle.style.pointerEvents = 'none';
      } else {
        menuToggleFixed.classList.remove('is-visible');
        // Show navbar hamburger when fixed one is hidden
        if (menuToggle) menuToggle.style.opacity = '';
        if (menuToggle) menuToggle.style.pointerEvents = '';
      }
    }

    // Fixed hamburger also opens/closes the menu
    menuToggleFixed.addEventListener('click', function() {
      if (fullscreenMenu && fullscreenMenu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    window.addEventListener('scroll', handleFixedHamburger, { passive: true });
    handleFixedHamburger();
  } else if (menuToggleFixed) {
    // Hide fixed hamburger on non-homepage pages
    menuToggleFixed.style.display = 'none';
  }

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
      const badgeOffset = 100; // Half of 12.5rem (200px) to center on cursor

      const defaultBadgeText = 'SCROLL TO<br>SEE MORE';

      function animateBadge() {
        if (!isHovering) return;

        const ease = 0.15;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        // Center badge on cursor by offsetting by half badge size
        hoverBadge.style.left = (currentX - badgeOffset) + 'px';
        hoverBadge.style.top = (currentY - badgeOffset) + 'px';

        animationFrame = requestAnimationFrame(animateBadge);
      }

      // Listen to entire teachers list container
      teachersList.addEventListener('mouseenter', function(e) {
        // Cancel any existing animation FIRST
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }

        // Get fresh mouse position
        mouseX = e.clientX;
        mouseY = e.clientY;
        currentX = mouseX;
        currentY = mouseY;

        // FORCE position reset - set directly on style
        hoverBadge.style.left = (currentX - badgeOffset) + 'px';
        hoverBadge.style.top = (currentY - badgeOffset) + 'px';

        // Show badge AFTER position is set
        hoverBadge.classList.add('is-visible');
        badgeText.innerHTML = defaultBadgeText;

        // NOW start hovering and animation
        isHovering = true;
        animateBadge();
      });

      teachersList.addEventListener('mouseleave', function() {
        isHovering = false;
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }
        hoverBadge.classList.remove('is-visible');
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
            // Cancel any existing animation FIRST
            if (animationFrame) {
              cancelAnimationFrame(animationFrame);
              animationFrame = null;
            }

            // Get fresh mouse position
            mouseX = e.clientX;
            mouseY = e.clientY;
            currentX = mouseX;
            currentY = mouseY;

            // FORCE position reset - set directly on style
            hoverBadge.style.left = (currentX - badgeOffset) + 'px';
            hoverBadge.style.top = (currentY - badgeOffset) + 'px';

            // Show badge AFTER position is set
            hoverBadge.classList.add('is-visible');
            badgeText.innerHTML = currentTeacherName;

            // NOW start hovering and animation
            isHovering = true;
            animateBadge();
          }
        });

        heroImageWrap.addEventListener('mouseleave', function() {
          isHovering = false;
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
          }
          hoverBadge.classList.remove('is-visible');
          badgeText.innerHTML = defaultBadgeText;
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
  const teacherItemsForModal = document.querySelectorAll('.teacher_item, .teacher-card');
  const modal = document.getElementById('teacherModal');
  const closeModalBtn = document.querySelector('.teacher-modal_close');

  teacherItemsForModal.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const teacherName = item.getAttribute('data-teacher-name');
      const teacherImage = item.getAttribute('data-teacher-image');
      const teacherBio = item.getAttribute('data-teacher-bio');
      const teacherRoleEl = item.querySelector('.teacher_eyebrow') || item.querySelector('.teacher-card_location');
      const teacherRole = teacherRoleEl ? teacherRoleEl.textContent : '';

      // Update modal content
      const modalImage = document.querySelector('.teacher-modal_image');
      const modalName = document.querySelector('.teacher-modal_name');
      const modalRole = document.querySelector('.teacher-modal_role');
      const modalBio = document.querySelector('.teacher-modal_bio');

      if (modalImage && teacherImage) modalImage.src = teacherImage;
      if (modalName && teacherName) modalName.textContent = teacherName;
      if (modalRole && teacherRole) modalRole.textContent = teacherRole;
      if (modalBio && teacherBio) modalBio.textContent = teacherBio;

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
  const scheduleSections = document.querySelectorAll('.schedule_wrap:not(.is-hidden)');

  scheduleSections.forEach(function(scheduleSection) {
    const dayRows = scheduleSection.querySelectorAll('.day_row');
    const scheduleHoverBadge = scheduleSection.querySelector('.schedule_hover-badge');

    if (dayRows.length > 0 && scheduleHoverBadge) {
      // Move badge to body to escape stacking contexts
      if (scheduleHoverBadge.parentElement !== document.body) {
        document.body.appendChild(scheduleHoverBadge);
      }
      // Force highest z-index
      scheduleHoverBadge.style.zIndex = '2147483647';
      scheduleHoverBadge.style.position = 'fixed';

      const badgeSize = 200; // 12.5rem = 200px
      const offset = 20; // Gap from cursor
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovering = false;
      let animationFrame = null;

      // Get clamped position with offset from cursor
      function getBadgePosition(x, y) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Default: bottom-right of cursor
        let posX = x + offset;
        let posY = y + offset;

        // Clamp to right edge
        if (posX + badgeSize > vw) {
          posX = x - badgeSize - offset;
        }

        // Clamp to bottom edge
        if (posY + badgeSize > vh) {
          posY = y - badgeSize - offset;
        }

        // Clamp to left edge (in case badge is too big)
        if (posX < 0) posX = 0;

        // Clamp to top edge
        if (posY < 0) posY = 0;

        return { x: posX, y: posY };
      }

      // Smooth animation loop
      function animateBadge() {
        if (!isHovering) return;

        const ease = 0.15;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        const pos = getBadgePosition(currentX, currentY);
        scheduleHoverBadge.style.left = pos.x + 'px';
        scheduleHoverBadge.style.top = pos.y + 'px';

        animationFrame = requestAnimationFrame(animateBadge);
      }

      dayRows.forEach(function(row) {
        row.addEventListener('mouseenter', function(e) {
          // Find the day_image within the same day_wrap as this row
          const dayWrap = row.closest('.day_wrap');
          const dayImage = dayWrap ? dayWrap.querySelector('.day_image img') : null;

          const imageUrl = row.getAttribute('data-image');
          if (imageUrl && dayImage) {
            dayImage.src = imageUrl;
          }

          // Cancel any existing animation
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
          }

          // Get fresh mouse position
          mouseX = e.clientX;
          mouseY = e.clientY;
          currentX = mouseX;
          currentY = mouseY;

          // Position badge immediately
          const pos = getBadgePosition(currentX, currentY);
          scheduleHoverBadge.style.left = pos.x + 'px';
          scheduleHoverBadge.style.top = pos.y + 'px';

          // Update badge image
          const badgeImg = scheduleHoverBadge.querySelector('img');
          if (badgeImg && imageUrl) {
            badgeImg.src = imageUrl;
            // Check for custom image position (e.g., top alignment for portraits)
            const imagePosition = row.getAttribute('data-image-position');
            if (imagePosition === 'top') {
              badgeImg.style.objectPosition = 'center top';
            } else {
              badgeImg.style.objectPosition = 'center';
            }
          }

          // Show badge and start animation
          scheduleHoverBadge.classList.add('is-visible');
          isHovering = true;
          animateBadge();
        });

        row.addEventListener('mouseleave', function() {
          isHovering = false;
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
          }
          scheduleHoverBadge.classList.remove('is-visible');
        });

        row.addEventListener('mousemove', function(e) {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        // Expandable row functionality
        row.addEventListener('click', function() {
          const rowItem = row.closest('.day_row-item');
          if (rowItem) {
            const isActive = rowItem.classList.contains('is-active');

            // Close all other expanded rows
            scheduleSection.querySelectorAll('.day_row-item.is-active').forEach(function(item) {
              if (item !== rowItem) {
                item.classList.remove('is-active');
              }
            });

            // Toggle current row
            rowItem.classList.toggle('is-active', !isActive);
          }
        });
      });
    } else if (dayRows.length > 0) {
      // No hover badge, just handle expandable rows
      dayRows.forEach(function(row) {
        row.addEventListener('click', function() {
          const rowItem = row.closest('.day_row-item');
          if (rowItem) {
            const isActive = rowItem.classList.contains('is-active');

            scheduleSection.querySelectorAll('.day_row-item.is-active').forEach(function(item) {
              if (item !== rowItem) {
                item.classList.remove('is-active');
              }
            });

            rowItem.classList.toggle('is-active', !isActive);
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
        /* arrow colour: .nav_link--active .nav_arrow-icon in project.css */
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
  // TEACHER CARD NAME - Dynamic Text Fitting
  // ============================================
  function fitTeacherNames() {
    const teacherNames = document.querySelectorAll('.teacher-card_name');

    teacherNames.forEach(function(nameEl) {
      const container = nameEl.parentElement;
      if (!container) return;

      // Get available width (container width minus padding)
      const containerStyle = window.getComputedStyle(container);
      const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(containerStyle.paddingRight) || 0;
      const availableWidth = container.clientWidth - paddingLeft - paddingRight;

      if (availableWidth <= 0) return;

      // Reset styles to measure
      nameEl.style.fontSize = '';

      const text = nameEl.textContent.trim();
      const words = text.split(' ');

      // Determine min/max font sizes based on screen width
      const minFontSize = window.innerWidth <= 480 ? 10 : 12;
      const maxFontSize = window.innerWidth <= 480 ? 18 : (window.innerWidth <= 768 ? 22 : 28);

      // Create a temporary element to measure text
      const tempEl = document.createElement('span');
      tempEl.style.cssText = 'position:absolute;visibility:hidden;font-weight:bold;text-transform:uppercase;text-align:center;';
      document.body.appendChild(tempEl);

      // Try single line first
      tempEl.style.whiteSpace = 'nowrap';
      let fontSize = maxFontSize;

      // Binary search for single line
      let low = minFontSize;
      let high = maxFontSize;

      while (low <= high) {
        fontSize = Math.floor((low + high) / 2);
        tempEl.style.fontSize = fontSize + 'px';
        tempEl.textContent = text;

        if (tempEl.offsetWidth <= availableWidth) {
          low = fontSize + 1;
        } else {
          high = fontSize - 1;
        }
      }

      let singleLineFontSize = Math.max(minFontSize, high);

      // If single line font is too small and we have multiple words, try 2 lines
      if (singleLineFontSize < maxFontSize * 0.6 && words.length >= 2) {
        // Find the best split point for 2 lines
        let bestFontSize = singleLineFontSize;

        for (let splitAt = 1; splitAt < words.length; splitAt++) {
          const line1 = words.slice(0, splitAt).join(' ');
          const line2 = words.slice(splitAt).join(' ');

          // Find font size that fits both lines
          low = minFontSize;
          high = maxFontSize;

          while (low <= high) {
            fontSize = Math.floor((low + high) / 2);
            tempEl.style.fontSize = fontSize + 'px';

            // Measure each line
            tempEl.textContent = line1;
            const width1 = tempEl.offsetWidth;
            tempEl.textContent = line2;
            const width2 = tempEl.offsetWidth;

            const maxLineWidth = Math.max(width1, width2);

            if (maxLineWidth <= availableWidth) {
              low = fontSize + 1;
            } else {
              high = fontSize - 1;
            }
          }

          const twoLineFontSize = Math.max(minFontSize, high);
          if (twoLineFontSize > bestFontSize) {
            bestFontSize = twoLineFontSize;
            // Update the element with line break
            nameEl.innerHTML = line1 + ' <br>' + line2;
          }
        }

        fontSize = bestFontSize;
      } else {
        fontSize = singleLineFontSize;
        nameEl.textContent = text;
      }

      document.body.removeChild(tempEl);
      nameEl.style.fontSize = fontSize + 'px';
    });
  }

  // Run on load and resize
  if (document.querySelectorAll('.teacher-card_name').length > 0) {
    // Initial fit after a short delay to ensure layout is ready
    setTimeout(fitTeacherNames, 100);

    // Refit on window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(fitTeacherNames, 150);
    });
  }

  // ============================================
  // BOOKING PAGE - SINGLE CLASS ROW HOVER IMAGE
  // ============================================
  const bookingHoverBadge = document.getElementById('bookingHoverBadge');
  const bookingHoverBadgeImg = document.getElementById('bookingHoverBadgeImg');
  const singleClassRows = document.querySelectorAll('.single-class-row[data-image]');

  if (bookingHoverBadge && singleClassRows.length > 0 && !isTouchDevice) {
    document.body.appendChild(bookingHoverBadge);
    bookingHoverBadge.style.position = 'fixed';
    bookingHoverBadge.style.zIndex = '2147483647';

    const badgeSize = 200;
    const offset = 20;
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    let isHovering = false, animFrame = null;

    function getBadgePos(x, y) {
      const vw = window.innerWidth, vh = window.innerHeight;
      let px = x + offset, py = y + offset;
      if (px + badgeSize > vw) px = x - badgeSize - offset;
      if (py + badgeSize > vh) py = y - badgeSize - offset;
      if (px < 0) px = 0;
      if (py < 0) py = 0;
      return { x: px, y: py };
    }

    function animateBadge() {
      if (!isHovering) return;
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      const pos = getBadgePos(currentX, currentY);
      bookingHoverBadge.style.left = pos.x + 'px';
      bookingHoverBadge.style.top = pos.y + 'px';
      animFrame = requestAnimationFrame(animateBadge);
    }

    singleClassRows.forEach(function(row) {
      row.addEventListener('mouseenter', function(e) {
        const img = row.getAttribute('data-image');
        if (!img) return;
        if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
        bookingHoverBadgeImg.src = img;
        // Portraits can ask for a top crop so faces are not cut off by the square badge.
        // Mirrors the schedule page hover behaviour.
        bookingHoverBadgeImg.style.objectPosition =
          row.getAttribute('data-image-position') === 'top' ? 'center top' : 'center';
        mouseX = e.clientX; mouseY = e.clientY;
        currentX = mouseX; currentY = mouseY;
        const pos = getBadgePos(currentX, currentY);
        bookingHoverBadge.style.left = pos.x + 'px';
        bookingHoverBadge.style.top = pos.y + 'px';
        bookingHoverBadge.classList.add('is-visible');
        isHovering = true;
        animateBadge();
      });

      row.addEventListener('mousemove', function(e) {
        mouseX = e.clientX; mouseY = e.clientY;
      });

      row.addEventListener('mouseleave', function() {
        isHovering = false;
        if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
        bookingHoverBadge.classList.remove('is-visible');
      });

      const btn = row.querySelector('.button');
      if (btn) {
        btn.addEventListener('mouseenter', function() {
          bookingHoverBadge.classList.remove('is-visible');
        });
        btn.addEventListener('mouseleave', function() {
          bookingHoverBadge.classList.add('is-visible');
        });
      }
    });
  }

  console.log('Jivamukti Tribe Gathering - All interactions initialized');
});

// ============================================
// REVIEW FIXES 30 SEP 2026 (template layer; source: notes/tools/transform-pages.py MAIN_REVIEW_FIXES)
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  var siteWrap = document.querySelector('[data-flwr]');

  // ---- Fullscreen-menu photo alt: pages that swap the photo (data-menu-image) get a matching alt.
  //      data-menu-image-alt on the wrapper wins; otherwise the file name picks a known alt; any
  //      other photo keeps the shared alt from the menu component.
  var MENU_ALTS = {
    '_MG_5821.JPG_1024w.webp': 'A crowd practising standing yoga with arms raised in a tall brick hall',
    'DSCF7795_1024w.webp': 'Practitioners in a warmly lit room, arms folded overhead, looking up'
  };
  var menuPhoto = document.querySelector('.menu-fullscreen_hero-image');
  if (siteWrap && menuPhoto) {
    var menuAlt = siteWrap.getAttribute('data-menu-image-alt') ||
      MENU_ALTS[(menuPhoto.getAttribute('src') || '').split('/').pop()];
    if (menuAlt) menuPhoto.setAttribute('alt', menuAlt);
  }

  // ---- Surface awareness: the corner stamp and the custom cursor flip colours over dark, blue
  //      and photo surfaces (client, 30 Sep 2026). No attributes needed on sections: the surface is
  //      read from what is painted under the point (elementsFromPoint): [data-cursor] wins when
  //      present, then the first photo (img / video / background-image) or opaque background colour.
  //      Stamp: navy-lettering ring on light surfaces, the on-dark ring (yellow lettering) elsewhere;
  //      the centre layer never changes. Cursor: .is-on-dark / .is-on-blue / .is-on-photo.
  var stamp = document.querySelector('.site-stamp');
  var ring = stamp && stamp.querySelector('.site-stamp_ring');
  var cursor = document.querySelector('.custom-cursor');
  var SKIP = '.site-stamp, .custom-cursor, .teachers_hover-badge, .schedule_hover-badge, #bookingHoverBadge';
  var colourCache = {};
  var probe = document.createElement('canvas'); probe.width = probe.height = 1;
  var probeCtx = probe.getContext && probe.getContext('2d', { willReadFrequently: true });
  function rgba(css) {
    if (css in colourCache) return colourCache[css];
    var out = null;
    var m = /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,\/]\s*([\d.]+%?))?\s*\)$/.exec(css);
    if (m) {
      var a = m[4] === undefined ? 1 : (m[4].slice(-1) === '%' ? parseFloat(m[4]) / 100 : parseFloat(m[4]));
      out = [+m[1], +m[2], +m[3], a];
    } else if (probeCtx) {
      // oklch() / oklab() / color() computed values: let the canvas convert them to sRGB
      probeCtx.clearRect(0, 0, 1, 1);
      probeCtx.fillStyle = 'rgba(0,0,0,0)'; probeCtx.fillStyle = css;
      probeCtx.fillRect(0, 0, 1, 1);
      var d = probeCtx.getImageData(0, 0, 1, 1).data;
      out = [d[0], d[1], d[2], d[3] / 255];
    }
    colourCache[css] = out;
    return out;
  }
  function classify(c) {
    var lum = (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
    if (lum < 0.3) return 'dark';
    if (lum < 0.62 && c[2] > c[0] + 40) return 'blue';
    return 'light';
  }
  function shown(el) {
    var o = 1;
    for (var n = el; n && n.nodeType === 1; n = n.parentElement) {
      var cs = getComputedStyle(n);
      if (cs.visibility === 'hidden' || cs.display === 'none') return false;
      o *= parseFloat(cs.opacity);
      if (o < 0.15) return false;
    }
    return true;
  }
  function surfaceAt(x, y) {
    if (x < 0 || y < 0 || x >= window.innerWidth || y >= window.innerHeight) return 'light';
    var els = document.elementsFromPoint(x, y);
    var first = true;
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.closest(SKIP)) continue;
      if (first) {
        first = false;
        var host = el.closest('[data-cursor]');
        if (host) return host.getAttribute('data-cursor') || 'light';
      }
      if (el === document.documentElement || el === document.body) break;
      var tag = el.tagName;
      if (tag === 'IMG') {
        var src = el.currentSrc || el.getAttribute('src') || '';
        if (!/\.svg(\?|#|$)/i.test(src) && el.complete && shown(el)) return 'photo';
        continue;
      }
      if (tag === 'VIDEO' || tag === 'IFRAME' || tag === 'CANVAS') { if (shown(el)) return 'photo'; continue; }
      var cs = getComputedStyle(el);
      if (/url\(/.test(cs.backgroundImage) && !/\.svg/i.test(cs.backgroundImage) && shown(el)) return 'photo';
      var c = rgba(cs.backgroundColor);
      if (c && c[3] >= 0.5 && shown(el)) return classify(c);
    }
    var bc = rgba(getComputedStyle(document.body).backgroundColor);
    return bc && bc[3] >= 0.5 ? classify(bc) : 'light';
  }

  var ringLight = stamp && (stamp.getAttribute('data-ring-light') || (ring && ring.getAttribute('src')));
  var ringDark = stamp && (stamp.getAttribute('data-ring-dark') ||
    (ringLight && ringLight.indexOf('yellow-navy-ring') !== -1 ? ringLight.replace('yellow-navy-ring', 'navy-yellow-ring') : ''));
  if (ringDark) { var pre = new Image(); pre.src = ringDark; }
  var pointerX = -1, pointerY = -1, surfaceQueued = false;
  function updateSurfaces() {
    surfaceQueued = false;
    if (stamp && ring && ringLight) {
      var r = stamp.getBoundingClientRect();
      if (r.width) {
        var s = surfaceAt(r.left + r.width / 2, r.top + r.height / 2);
        var want = (s !== 'light' && ringDark) ? ringDark : ringLight;
        if (ring.getAttribute('src') !== want) ring.setAttribute('src', want);
        stamp.setAttribute('data-surface', s);
      }
    }
    if (cursor && pointerX >= 0) {
      var p = surfaceAt(pointerX, pointerY);
      cursor.classList.toggle('is-on-dark', p === 'dark');
      cursor.classList.toggle('is-on-blue', p === 'blue');
      cursor.classList.toggle('is-on-photo', p === 'photo');
    }
  }
  function queueSurfaces() { if (!surfaceQueued) { surfaceQueued = true; requestAnimationFrame(updateSurfaces); } }
  if (stamp || cursor) {
    window.addEventListener('scroll', queueSurfaces, { passive: true });
    window.addEventListener('resize', queueSurfaces);
    window.addEventListener('load', queueSurfaces);
    document.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      pointerX = e.clientX; pointerY = e.clientY; queueSurfaces();
    }, { passive: true });
    // Reveals and overlays change what sits under the stamp without a scroll: re-check shortly
    // after load, and whenever the menu or the teacher pop-up opens or closes (below).
    setTimeout(queueSurfaces, 400); setTimeout(queueSurfaces, 1600);
    queueSurfaces();
  }

  function watchClass(el, cls, cb) {
    if (!el || !window.MutationObserver) return;
    var was = el.classList.contains(cls);
    new MutationObserver(function () {
      var now = el.classList.contains(cls);
      if (now !== was) { was = now; cb(now); }
    }).observe(el, { attributes: true, attributeFilter: ['class'] });
  }
  function focusables(root) {
    return Array.prototype.filter.call(
      root.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      function (el) { return el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden'; });
  }
  function trapTab(e, list) {
    if (e.key !== 'Tab' || !list.length) return;
    // Tab order is taken over completely: the list is not in DOM order (the toggle sits outside
    // the menu), so native tabbing would escape to the page behind.
    e.preventDefault();
    var i = list.indexOf(document.activeElement);
    var next = e.shiftKey ? (i <= 0 ? list.length - 1 : i - 1) : (i === -1 || i === list.length - 1 ? 0 : i + 1);
    list[next].focus();
  }

  // ---- Fullscreen menu: focus moves into it on open and back to the toggle on close.
  var menu = document.getElementById('fullscreenMenu');
  var toggles = [document.getElementById('menuToggle'), document.getElementById('menuToggleFixed')].filter(Boolean);
  var menuReturn = null;
  function visibleToggle() {
    for (var i = toggles.length - 1; i >= 0; i--) {
      var t = toggles[i], cs = getComputedStyle(t);
      if (t.getClientRects().length && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.pointerEvents !== 'none') return t;
    }
    return toggles[0] || null;
  }
  if (menu) {
    toggles.forEach(function (t) { t.setAttribute('aria-controls', 'fullscreenMenu'); t.setAttribute('aria-expanded', 'false'); });
    watchClass(menu, 'is-open', function (open) {
      toggles.forEach(function (t) { t.setAttribute('aria-expanded', open ? 'true' : 'false'); });
      queueSurfaces();
      if (open) {
        menuReturn = toggles.indexOf(document.activeElement) !== -1 ? document.activeElement : visibleToggle();
        var tries = 0;
        (function focusFirst() {
          var link = menu.querySelector('.menu-fullscreen_link');
          if (!link) return;
          link.focus();
          if (document.activeElement !== link && ++tries < 10) setTimeout(focusFirst, 40);
        })();
      } else {
        var back = menuReturn && menuReturn.getClientRects().length ? menuReturn : visibleToggle();
        if (back) back.focus();
        menuReturn = null;
      }
    });
    document.addEventListener('keydown', function (e) {
      if (!menu.classList.contains('is-open')) return;
      var t = visibleToggle();
      trapTab(e, focusables(menu).concat(t ? [t] : []));
    });
  }

  // ---- Teacher pop-up: dialog semantics, focus in and back, portrait alt, keyboard cards,
  //      and teachers.html#<slug> opens that teacher (slug = name, lower case, hyphens).
  var modal = document.getElementById('teacherModal');
  if (modal) {
    var modalBox = modal.querySelector('.teacher-modal_content') || modal;
    var modalName = modal.querySelector('.teacher-modal_name');
    var modalImg = modal.querySelector('.teacher-modal_image');
    var modalClose = modal.querySelector('.teacher-modal_close');
    if (modalName && !modalName.id) modalName.id = 'teacherModalName';
    modalBox.setAttribute('role', 'dialog');
    modalBox.setAttribute('aria-modal', 'true');
    if (modalName) modalBox.setAttribute('aria-labelledby', modalName.id);
    if (modalClose) modalClose.setAttribute('aria-label', 'Close profile');
    var trigger = null, modalReturn = null;
    var properName = function (card) {
      if (!card) return '';
      var img = card.querySelector('.teacher-card_image, .teacher_item-thumbnail');
      return (img && img.getAttribute('alt')) || card.getAttribute('data-teacher-name') || '';
    };
    document.addEventListener('click', function (e) {
      var c = e.target && e.target.closest && e.target.closest('.teacher-card, .teacher_item');
      if (c) trigger = c;
    }, true);
    watchClass(modal, 'is-visible', function (open) {
      queueSurfaces();
      if (open) {
        modalReturn = trigger || (document.activeElement !== document.body ? document.activeElement : null);
        var name = properName(trigger) || (modalName ? modalName.textContent.trim() : '');
        if (modalImg && name) modalImg.setAttribute('alt', name);
        if (modalClose) modalClose.focus();
      } else {
        if (modalReturn && document.contains(modalReturn)) modalReturn.focus();
        modalReturn = null; trigger = null;
      }
    });
    document.addEventListener('keydown', function (e) {
      if (modal.classList.contains('is-visible')) trapTab(e, focusables(modal));
    });

    var slugOf = function (s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); };
    var cards = Array.prototype.slice.call(document.querySelectorAll('.teacher-card'));
    cards.forEach(function (card) {
      var name = properName(card);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      if (name) card.setAttribute('aria-label', 'Open ' + name + ' profile');
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); trigger = card; card.click(); }
      });
    });
    var openFromHash = function () {
      var want = decodeURIComponent((location.hash || '').slice(1)).toLowerCase();
      if (!want) return;
      for (var i = 0; i < cards.length; i++) {
        if (slugOf(cards[i].getAttribute('data-teacher-name')) === want || slugOf(properName(cards[i])) === want) {
          trigger = cards[i];
          cards[i].scrollIntoView({ block: 'center' });
          cards[i].click();
          return;
        }
      }
    };
    if (cards.length) {
      window.addEventListener('hashchange', openFromHash);
      setTimeout(openFromHash, 150);
    }
  }
});
