/**
 * Archive page specific JavaScript
 * Handles filter functionality, video detail view, and embedded video playback
 */

document.addEventListener('DOMContentLoaded', function() {
  // Archive filter functionality
  const filterButtons = document.querySelectorAll('.filter_button[data-filter]');
  const videoGridContent = document.getElementById('videoGridContent');
  const videoDetailContent = document.getElementById('videoDetailContent');
  const videoItems = document.querySelectorAll('.video-item_wrap[data-city]');
  const videoModal = document.getElementById('videoModal');
  const videoModalContainer = document.getElementById('videoModalContainer');
  const detailVideoContainer = document.getElementById('detailVideoContainer');

  // Video data for each city
  const videoData = {
    newyork: {
      videoId: '1SL6dgEvA80',
      videoType: 'youtube',
      title: 'New York Tribe Gathering 2013',
      description: 'The very first Jivamukti Tribe Gathering. In the city that never sleeps, our tribe gathered for an awakening experience that started it all.'
    },
    barcelona: {
      videoId: 'OWj6oZI3-HE',
      videoType: 'youtube',
      title: 'Barcelona Tribe Gathering 2023',
      description: 'Join us in Barcelona where the Mediterranean spirit met the power of yoga. A vibrant celebration of community, practice, and joy along the beautiful Catalan coast.'
    },
    paris: {
      videoId: '1004581479',
      videoType: 'vimeo',
      title: 'Paris Tribe Gathering 2024',
      description: 'Experience the magic of Paris as hundreds of yogis gathered for an unforgettable weekend of practice, connection, and transformation in the heart of the City of Light.'
    },
    stavanger: {
      videoId: '0I6BtYeuJyc',
      videoType: 'youtube',
      title: 'Stavanger Tribe Gathering 2025',
      description: 'Our most recent gathering in the stunning fjords of Norway. Experience the Nordic spirit combined with the transformative power of yoga.'
    }
  };

  // Helper function to create video iframe
  function createVideoIframe(videoId, videoType, autoplay) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

    if (videoType === 'youtube') {
      iframe.src = 'https://www.youtube.com/embed/' + videoId + (autoplay ? '?autoplay=1' : '');
    } else if (videoType === 'vimeo') {
      iframe.src = 'https://player.vimeo.com/embed/' + videoId + (autoplay ? '?autoplay=1' : '');
    }

    return iframe;
  }

  // Open video modal
  function openVideoModal(videoId, videoType) {
    if (!videoModal || !videoModalContainer) return;

    // Clear previous content
    videoModalContainer.innerHTML = '';

    // Create and add iframe
    const iframe = createVideoIframe(videoId, videoType, true);
    videoModalContainer.appendChild(iframe);

    // Show modal
    videoModal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  // Close video modal
  function closeVideoModal() {
    if (!videoModal || !videoModalContainer) return;

    videoModal.classList.remove('is-visible');
    document.body.style.overflow = '';

    // Clear iframe to stop video
    videoModalContainer.innerHTML = '';
  }

  // Modal close handlers
  if (videoModal) {
    const closeBtn = videoModal.querySelector('.video-modal_close');
    const backdrop = videoModal.querySelector('.video-modal_backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', closeVideoModal);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeVideoModal);
    }

    // ESC key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && videoModal.classList.contains('is-visible')) {
        closeVideoModal();
      }
    });
  }

  // Video item click handlers (for grid view)
  videoItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const videoId = item.getAttribute('data-video-id');
      const videoType = item.getAttribute('data-video-type');

      if (videoId && videoType) {
        openVideoModal(videoId, videoType);
      }
    });
  });

  // Filter button handlers
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(function(btn) {
        btn.classList.remove('filter_button--active');
      });
      this.classList.add('filter_button--active');

      // Handle filter logic
      if (filter === 'all') {
        // Show all videos in grid, hide detail
        if (videoGridContent) videoGridContent.style.display = 'grid';
        if (videoDetailContent) videoDetailContent.style.display = 'none';

        // Clear detail video iframe to stop playback
        if (detailVideoContainer) {
          detailVideoContainer.innerHTML = '';
        }

        // Show all video items
        videoItems.forEach(function(item) {
          item.style.display = 'flex';
        });
      } else {
        // Show only the selected video in detail view
        if (videoGridContent) videoGridContent.style.display = 'none';
        if (videoDetailContent) videoDetailContent.style.display = 'block';

        // Update detail view with video data
        const data = filter ? videoData[filter] : null;
        if (data && detailVideoContainer) {
          const titleEl = document.getElementById('detailVideoTitle');
          const descEl = document.getElementById('detailVideoDescription');

          if (titleEl) titleEl.textContent = data.title;
          if (descEl) descEl.textContent = data.description;

          // Clear and add video iframe
          detailVideoContainer.innerHTML = '';
          const iframe = createVideoIframe(data.videoId, data.videoType, false);
          detailVideoContainer.appendChild(iframe);
        }
      }
    });
  });

  console.log('Archive page interactions initialized');
});
