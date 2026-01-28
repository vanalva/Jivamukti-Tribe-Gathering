/**
 * About Rome page specific JavaScript
 * Handles filter tabs and hover tooltip only
 * Expand/collapse is handled by main.js using is-active class
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // FILTER TABS FUNCTIONALITY
  // ============================================
  const filterTabs = document.querySelectorAll('.filter_tab');
  const allDayWraps = document.querySelectorAll('.day_wrap[data-category]');

  // Filter click handler
  filterTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active tab
      filterTabs.forEach(function(t) {
        t.classList.remove('filter_tab--active');
      });
      this.classList.add('filter_tab--active');

      // Apply filter
      allDayWraps.forEach(function(wrap) {
        const category = wrap.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          // Show
          wrap.classList.remove('u-hidden');
          // Force visible - override GSAP animation states
          wrap.style.opacity = '1';
          wrap.style.transform = 'none';
          // Clear inline styles from children
          wrap.querySelectorAll('*').forEach(function(el) {
            el.style.opacity = '';
            el.style.transform = '';
          });
          // Use GSAP to set final state if available
          if (typeof gsap !== 'undefined') {
            gsap.set(wrap, { opacity: 1, y: 0, x: 0, clearProps: 'transform' });
            gsap.set(wrap.querySelectorAll('.day_header, .day_row-item, .text-h1'), {
              opacity: 1, y: 0, x: 0, clearProps: 'transform'
            });
          }
        } else {
          // Hide
          wrap.classList.add('u-hidden');
        }
      });
    });
  });

  // ============================================
  // HOVER TOOLTIP - Floating preview card
  // ============================================
  const tooltip = document.getElementById('romeHoverTooltip');
  const tooltipImage = document.getElementById('tooltipImage');
  const tooltipTitle = document.getElementById('tooltipTitle');
  const tooltipDescription = document.getElementById('tooltipDescription');
  const scheduleRows = document.querySelectorAll('.day_row');

  // Move tooltip to body and force highest z-index
  if (tooltip) {
    if (tooltip.parentElement !== document.body) {
      document.body.appendChild(tooltip);
    }
    tooltip.style.zIndex = '2147483647';
    tooltip.style.position = 'fixed';
  }

  if (tooltip && tooltipImage && tooltipTitle && scheduleRows.length > 0) {
    const tooltipWidth = 280;
    const tooltipHeight = 220;
    const offset = 20;

    function positionTooltip(mouseX, mouseY) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let posX = mouseX + offset;
      let posY = mouseY + offset;

      if (posX + tooltipWidth > vw) {
        posX = mouseX - tooltipWidth - offset;
      }
      if (posY + tooltipHeight > vh) {
        posY = mouseY - tooltipHeight - offset;
      }
      if (posX < 10) posX = 10;
      if (posY < 10) posY = 10;

      tooltip.style.left = posX + 'px';
      tooltip.style.top = posY + 'px';
    }

    scheduleRows.forEach(function(row) {
      row.addEventListener('mouseenter', function(e) {
        const imageUrl = this.getAttribute('data-image');
        const venueNameEl = this.querySelector('.venue-name') || this.querySelector('.text-h4');
        const title = venueNameEl ? venueNameEl.textContent : '';

        const parent = this.closest('.day_row-item');
        const descEl = parent ? parent.querySelector('.day_row-content-description p') : null;
        const description = descEl ? descEl.textContent : '';

        if (imageUrl && title) {
          tooltipImage.src = imageUrl;
          tooltipImage.alt = title;
          tooltipTitle.textContent = title;
          tooltipDescription.textContent = description || 'Click to view details';

          positionTooltip(e.clientX, e.clientY);
          tooltip.classList.add('is-visible');
        }
      });

      row.addEventListener('mouseleave', function() {
        tooltip.classList.remove('is-visible');
      });

      row.addEventListener('mousemove', function(e) {
        if (tooltip.classList.contains('is-visible')) {
          positionTooltip(e.clientX, e.clientY);
        }
      });
    });
  }

  console.log('About Rome page initialized');
});
