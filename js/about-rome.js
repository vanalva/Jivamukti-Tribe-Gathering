/**
 * About Rome page specific JavaScript
 * Handles filter tabs and schedule row interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // MOBILE THUMBNAILS - Inject thumbnails for mobile view
  // ============================================
  const allDayRows = document.querySelectorAll('.day_wrap .day_row');

  allDayRows.forEach(function(row) {
    const imageUrl = row.getAttribute('data-image');
    if (!imageUrl) return;

    // Create thumbnail element
    const thumbnail = document.createElement('div');
    thumbnail.className = 'day_row-thumbnail';
    thumbnail.innerHTML = '<img src="' + imageUrl + '" alt="" loading="lazy">';

    // Wrap existing text content
    const textWrapper = document.createElement('div');
    textWrapper.className = 'day_row-text';

    // Move existing children to wrapper
    while (row.firstChild) {
      textWrapper.appendChild(row.firstChild);
    }

    // Add thumbnail and text wrapper to row
    row.appendChild(thumbnail);
    row.appendChild(textWrapper);
  });

  // Filter tabs functionality
  const categoryTabs = document.querySelectorAll('[data-filter-group="category"] .filter_tab');
  const areaTabs = document.querySelectorAll('[data-filter-group="area"] .filter_tab');
  const categoryWraps = document.querySelectorAll('.day_wrap[data-category]');

  // Track current filters
  let currentCategory = 'all';
  let currentArea = 'all';

  // Function to apply both filters
  function applyFilters() {
    categoryWraps.forEach(function(wrap) {
      const category = wrap.getAttribute('data-category');
      const area = wrap.getAttribute('data-area');

      const categoryMatch = currentCategory === 'all' || category === currentCategory;
      const areaMatch = currentArea === 'all' || area === currentArea;

      if (categoryMatch && areaMatch) {
        wrap.style.display = '';
      } else {
        wrap.style.display = 'none';
      }
    });
  }

  // Category filter click handler
  categoryTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-filter');

      // Update active tab in this group only
      categoryTabs.forEach(function(t) {
        t.classList.remove('filter_tab--active');
      });
      this.classList.add('filter_tab--active');

      applyFilters();
    });
  });

  // Area filter click handler
  areaTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      currentArea = this.getAttribute('data-filter');

      // Update active tab in this group only
      areaTabs.forEach(function(t) {
        t.classList.remove('filter_tab--active');
      });
      this.classList.add('filter_tab--active');

      applyFilters();
    });
  });

  // Schedule row interactions (expand/collapse)
  const scheduleRows = document.querySelectorAll('.day_row');
  const dayImages = document.querySelectorAll('.day_image img');

  scheduleRows.forEach(function(row) {
    row.addEventListener('click', function() {
      const parent = this.closest('.day_row-item');
      if (!parent) return;

      const content = parent.querySelector('.day_row-content');
      if (!content) return;

      // Close all other open rows in the same category
      const categoryWrap = this.closest('.day_wrap');
      if (categoryWrap) {
        const allRowItems = categoryWrap.querySelectorAll('.day_row-item');
        allRowItems.forEach(function(item) {
          if (item !== parent) {
            item.classList.remove('is-expanded');
            const otherContent = item.querySelector('.day_row-content');
            if (otherContent) {
              otherContent.style.display = 'none';
            }
          }
        });
      }

      // Toggle current row
      const isExpanded = parent.classList.contains('is-expanded');
      if (isExpanded) {
        parent.classList.remove('is-expanded');
        content.style.display = 'none';
      } else {
        parent.classList.add('is-expanded');
        content.style.display = 'block';

        // Update the day image if data-image is present
        const imageUrl = this.getAttribute('data-image');
        if (imageUrl && categoryWrap) {
          const dayImage = categoryWrap.querySelector('.day_image img');
          if (dayImage) {
            dayImage.src = imageUrl;
          }
        }
      }
    });
  });

  // Load more button functionality (optional - can be expanded)
  const loadMoreButtons = document.querySelectorAll('.load-more-btn');
  loadMoreButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Placeholder for load more functionality
      console.log('Load more clicked');
    });
  });

  // ============================================
  // HOVER TOOLTIP - Floating preview card
  // ============================================
  const tooltip = document.getElementById('romeHoverTooltip');
  const tooltipImage = document.getElementById('tooltipImage');
  const tooltipTitle = document.getElementById('tooltipTitle');
  const tooltipDescription = document.getElementById('tooltipDescription');

  // Move tooltip to body and force highest z-index via inline style
  if (tooltip) {
    if (tooltip.parentElement !== document.body) {
      document.body.appendChild(tooltip);
    }
    // Force z-index inline to override everything
    tooltip.style.zIndex = '2147483647';
    tooltip.style.position = 'fixed';
  }

  if (tooltip && scheduleRows.length > 0) {
    const tooltipWidth = 280;
    const tooltipHeight = 220; // Approximate height
    const offset = 20;

    function positionTooltip(mouseX, mouseY) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Default: position to the right and below cursor
      let posX = mouseX + offset;
      let posY = mouseY + offset;

      // If tooltip would overflow right edge, position to left of cursor
      if (posX + tooltipWidth > vw) {
        posX = mouseX - tooltipWidth - offset;
      }

      // If tooltip would overflow bottom, position above cursor
      if (posY + tooltipHeight > vh) {
        posY = mouseY - tooltipHeight - offset;
      }

      // Clamp to viewport
      if (posX < 10) posX = 10;
      if (posY < 10) posY = 10;

      tooltip.style.left = posX + 'px';
      tooltip.style.top = posY + 'px';
    }

    scheduleRows.forEach(function(row) {
      row.addEventListener('mouseenter', function(e) {
        // Get data from the row
        const imageUrl = this.getAttribute('data-image');
        const textWrapper = this.querySelector('.day_row-text');
        const titleEl = textWrapper
          ? (textWrapper.querySelector('.venue-name') || textWrapper.querySelector('.text-h4'))
          : (this.querySelector('.venue-name') || this.querySelector('.text-h4'));
        const title = titleEl ? titleEl.textContent : '';

        // Get description from the expanded content
        const parent = this.closest('.day_row-item');
        const descEl = parent ? parent.querySelector('.day_row-content-description p') : null;
        const description = descEl ? descEl.textContent : '';

        // Only show tooltip if we have content
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

  console.log('About Rome page interactions initialized');
});
