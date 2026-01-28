/**
 * Schedule page - Multi-facilitator image cycling
 * Crossfades between facilitator images
 */

document.addEventListener('DOMContentLoaded', function() {
  const CYCLE_INTERVAL = 5000; // 5 seconds between changes
  const FADE_DURATION = 800; // 800ms crossfade

  // Find all schedule items with multiple images
  const multiImageItems = document.querySelectorAll('.day_row[data-images]');

  // Track active hover row for tooltip updates
  let activeHoverRow = null;
  let activeHoverImages = null;
  let activeHoverIndex = 0;

  // Get tooltip elements
  const tooltip = document.getElementById('romeHoverTooltip');
  const tooltipImage = document.getElementById('tooltipImage');

  // Setup crossfade for tooltip image
  if (tooltipImage && tooltip) {
    // Create second image for crossfade
    const tooltipImageBack = document.createElement('img');
    tooltipImageBack.id = 'tooltipImageBack';
    tooltipImageBack.className = tooltipImage.className;
    tooltipImageBack.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity ' + FADE_DURATION + 'ms ease-in-out;';
    tooltipImage.style.cssText = tooltipImage.style.cssText + 'position: relative; transition: opacity ' + FADE_DURATION + 'ms ease-in-out;';
    tooltipImage.parentElement.style.position = 'relative';
    tooltipImage.parentElement.insertBefore(tooltipImageBack, tooltipImage);
  }

  multiImageItems.forEach(function(row) {
    const imagesStr = row.getAttribute('data-images');
    if (!imagesStr) return;

    const images = imagesStr.split(',').map(function(img) {
      return img.trim();
    });
    if (images.length < 2) return;

    let currentIndex = 0;
    const parent = row.closest('.day_row-item');
    const imageWrap = parent ? parent.querySelector('.day_row-content-image') : null;
    const contentImg = imageWrap ? imageWrap.querySelector('img') : null;

    // Create second image for crossfade effect
    if (contentImg && imageWrap) {
      const backImg = document.createElement('img');
      backImg.className = contentImg.className + ' crossfade-back';
      backImg.src = images[1]; // Preload next image
      backImg.alt = contentImg.alt;
      backImg.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity ' + FADE_DURATION + 'ms ease-in-out;';
      contentImg.style.transition = 'opacity ' + FADE_DURATION + 'ms ease-in-out';
      imageWrap.style.position = 'relative';
      imageWrap.appendChild(backImg);

      // Store reference
      row._images = images;
      row._currentIndex = 0;
      row._frontImg = contentImg;
      row._backImg = backImg;
      row._isFront = true;
    }

    // Track hover state for tooltip
    row.addEventListener('mouseenter', function() {
      activeHoverRow = row;
      activeHoverImages = images;
      activeHoverIndex = row._currentIndex || 0;
    });

    row.addEventListener('mouseleave', function() {
      activeHoverRow = null;
      activeHoverImages = null;
    });

    // Cycle through images with crossfade
    setInterval(function() {
      currentIndex = (currentIndex + 1) % images.length;
      const newSrc = images[currentIndex];

      // Update data-image for tooltip
      row.setAttribute('data-image', newSrc);
      row._currentIndex = currentIndex;

      // Crossfade content images
      if (row._frontImg && row._backImg) {
        if (row._isFront) {
          row._backImg.src = newSrc;
          row._backImg.style.opacity = '1';
          row._frontImg.style.opacity = '0';
        } else {
          row._frontImg.src = newSrc;
          row._frontImg.style.opacity = '1';
          row._backImg.style.opacity = '0';
        }
        row._isFront = !row._isFront;
      }

      // Crossfade tooltip if this row is being hovered
      if (activeHoverRow === row && tooltipImage && tooltip.classList.contains('is-visible')) {
        const tooltipImageBack = document.getElementById('tooltipImageBack');
        if (tooltipImageBack) {
          if (tooltipImage.style.opacity !== '0') {
            tooltipImageBack.src = newSrc;
            tooltipImageBack.style.opacity = '1';
            tooltipImage.style.opacity = '0';
          } else {
            tooltipImage.src = newSrc;
            tooltipImage.style.opacity = '1';
            tooltipImageBack.style.opacity = '0';
          }
        }
      }
    }, CYCLE_INTERVAL);
  });

  console.log('Schedule image cycling initialized');
});
