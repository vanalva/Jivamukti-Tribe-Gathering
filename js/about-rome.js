/**
 * About Rome page specific JavaScript
 * Handles filter tabs and schedule row interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Filter tabs functionality
  const filterTabs = document.querySelectorAll('.filter_tab');
  const categoryWraps = document.querySelectorAll('.day_wrap[data-category]');

  filterTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active tab
      filterTabs.forEach(function(t) {
        t.classList.remove('filter_tab--active');
      });
      this.classList.add('filter_tab--active');

      // Filter categories
      if (filter === 'all') {
        categoryWraps.forEach(function(wrap) {
          wrap.style.display = '';
        });
      } else {
        categoryWraps.forEach(function(wrap) {
          const category = wrap.getAttribute('data-category');
          if (category === filter) {
            wrap.style.display = '';
          } else {
            wrap.style.display = 'none';
          }
        });
      }
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

  console.log('About Rome page interactions initialized');
});
