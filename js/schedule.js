/**
 * Schedule page - Multi-facilitator image cycling
 * Fades between facilitator images every 3 seconds
 */

document.addEventListener('DOMContentLoaded', function() {
  const CYCLE_INTERVAL = 3000; // 3 seconds
  const FADE_DURATION = 600; // 600ms fade

  // Find all schedule items with multiple images
  const multiImageItems = document.querySelectorAll('.day_row[data-images]');

  multiImageItems.forEach(function(row) {
    const imagesStr = row.getAttribute('data-images');
    if (!imagesStr) return;

    const images = imagesStr.split(',').map(function(img) {
      return img.trim();
    });
    if (images.length < 2) return;

    let currentIndex = 0;
    const parent = row.closest('.day_row-item');
    const contentImg = parent ? parent.querySelector('.day_row-content-image img') : null;

    // Add transition class to the content image
    if (contentImg) {
      contentImg.style.transition = 'opacity ' + FADE_DURATION + 'ms ease-in-out';
    }

    // Cycle through images
    setInterval(function() {
      currentIndex = (currentIndex + 1) % images.length;
      const newSrc = images[currentIndex];

      // Update data-image for tooltip
      row.setAttribute('data-image', newSrc);

      // Fade out and change content image
      if (contentImg) {
        contentImg.style.opacity = '0';

        setTimeout(function() {
          contentImg.src = newSrc;
          contentImg.style.opacity = '1';
        }, FADE_DURATION);
      }
    }, CYCLE_INTERVAL);
  });

  console.log('Schedule image cycling initialized');
});
