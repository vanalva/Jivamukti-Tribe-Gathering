'use client';

import { useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import FullscreenMenu from '@/app/components/FullscreenMenu';
import Footer from '@/app/components/Footer';
import { getAssetPath } from '@/app/utils/paths';

export default function ArchivePage() {
  useEffect(() => {
    // Archive filter functionality
    const filterButtons = document.querySelectorAll('.filter_button[data-filter]');
    const videoGridContent = document.getElementById('videoGridContent');
    const videoDetailContent = document.getElementById('videoDetailContent');

    // Video data for each city
    const videoData: { [key: string]: { image: string; title: string; description: string } } = {
      paris: {
        image: '/images/archive/634c75fd78b3aa6acf4aee9ff3e8bede6f224649.png',
        title: 'Paris Tribe Gathering 2024',
        description: 'Experience the magic of Paris as hundreds of yogis gathered for an unforgettable weekend of practice, connection, and transformation in the heart of the City of Light.'
      },
      barcelona: {
        image: '/images/archive/db9dbf040566f8cba1a77b8f33835e4b411baaa1.png',
        title: 'Barcelona Tribe Gathering 2024',
        description: 'Join us in Barcelona where the Mediterranean spirit met the power of yoga. A vibrant celebration of community, practice, and joy along the beautiful Catalan coast.'
      },
      berlin: {
        image: '/images/archive/7daed26c9efac9c483a5692dcacb5545bffe955f.png',
        title: 'Berlin Tribe Gathering 2024',
        description: 'Berlin\'s creative energy combined with the transformative power of yoga created an extraordinary experience. Discover the highlights of this powerful gathering in Germany\'s capital.'
      },
      munich: {
        image: '/images/archive/96713e170504cc80e94ca625c77c15f088c6303a.png',
        title: 'Munich Tribe Gathering 2023',
        description: 'The traditional Bavarian charm of Munich provided the perfect backdrop for our tribe to gather, practice, and grow together in this memorable weekend celebration.'
      },
      newyork: {
        image: '/images/archive/514f1859f38c01030ff1fc01dca113c16df7f313.png',
        title: 'New York Tribe Gathering 2023',
        description: 'In the city that never sleeps, our tribe gathered for an awakening experience. Relive the energy, practice, and connection of our New York gathering.'
      },
      london: {
        image: '/images/archive/c234703ee3bfb11a60390c0d6794ddcdabdae215.png',
        title: 'London Tribe Gathering 2023',
        description: 'London\'s rich cultural heritage met the ancient practice of yoga in this extraordinary gathering. Experience the highlights of our UK tribe celebration.'
      }
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = (this as HTMLElement).getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('filter_button--active'));
        this.classList.add('filter_button--active');

        // Handle filter logic
        if (filter === 'all') {
          // Show grid, hide detail
          if (videoGridContent) videoGridContent.style.display = 'grid';
          if (videoDetailContent) videoDetailContent.style.display = 'none';
        } else {
          // Hide grid, show detail with specific video
          if (videoGridContent) videoGridContent.style.display = 'none';
          if (videoDetailContent) videoDetailContent.style.display = 'block';

          // Update detail view with video data
          const data = filter ? videoData[filter] : null;
          if (data) {
            const imageEl = document.getElementById('detailVideoImage') as HTMLImageElement;
            const titleEl = document.getElementById('detailVideoTitle');
            const descEl = document.getElementById('detailVideoDescription');

            if (imageEl) imageEl.src = data.image;
            if (titleEl) titleEl.textContent = data.title;
            if (descEl) descEl.textContent = data.description;
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section with Collage (Two-Slot) */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content u-navbar-offset">
          {/* Top Title */}
          <h1 className="hero-collage_title-top">THE</h1>

          {/* Center Image */}
          <div className="hero-collage_image-wrap">
            <img src={getAssetPath("/images/archive/eebc30323727acbd7be2d70049cc308de22de498.png")} alt="Archive Collage" className="hero-collage_image" />
          </div>

          {/* Logo Branding */}
          <div className="hero-collage_logo-wrap">
            <img src={getAssetPath("/images/archive/1dbfeee3dc2337b68e1b97cfac47ef244e8bf49d.svg")} alt="Jivamukti Yoga The Tribe Gathering" className="hero-collage_logo" />
          </div>

          {/* Bottom Title */}
          <h2 className="hero-collage_title-bottom">ARCHIVE</h2>
        </div>
      </section>

      {/* Video Hero Section (Two-Slot) */}
      <section className="video-hero_wrap u-section u-position-relative">
        <div className="video-hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="video-hero_content u-position-relative u-navbar-offset">
          {/* Left: Title Group */}
          <div className="video-hero_text-group">
            <h2 className="text-h1 u-text-uppercase">STAVANGER 2025</h2>
            <h2 className="text-h1 u-text-uppercase">TRIBE GATHERING</h2>
            <h2 className="text-h1 u-text-uppercase">VIDEO HIGHLIGHTS</h2>
            <p className="text-body-lg video-hero_subtitle">
              to book your ticket and reserve your spot for classes and sessions
            </p>
          </div>

          {/* Right Bottom: Featured Video */}
          <div className="video-hero_video-wrap">
            <img src={getAssetPath("/images/archive/7b358b7b8f1b535e9d59e771d082b75ed3e8ecf0.png")} alt="Featured Video" className="image" />
            <div className="video-hero_play-button">
              <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '64px', height: '64px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section (Two-Slot) */}
      <section className="filter_wrap u-section u-position-relative">
        <div className="filter_background u-cover-absolute u-zindex-negative"></div>
        <div className="filter_content u-position-relative">
          <div className="filter_buttons">
            <button className="filter_button filter_button--active" data-filter="all">ALL</button>
            <button className="filter_button" data-filter="paris">PARIS</button>
            <button className="filter_button" data-filter="barcelona">BARCELONA</button>
            <button className="filter_button" data-filter="berlin">BERLIN</button>
            <button className="filter_button" data-filter="munich">MUNICH</button>
            <button className="filter_button" data-filter="newyork">NEW YORK</button>
            <button className="filter_button" data-filter="london">LONDON</button>
          </div>
        </div>
      </section>

      {/* Video Grid Section (Two-Slot) */}
      <section className="video-grid_wrap u-section u-position-relative">
        <div className="video-grid_background u-cover-absolute u-zindex-negative"></div>
        <div className="video-grid_content u-position-relative" id="videoGridContent">

          {/* Video Item 1 - Paris */}
          <div className="video-item_wrap" data-city="paris">
            <div className="video-item_thumbnail">
              <img src={getAssetPath("/images/archive/634c75fd78b3aa6acf4aee9ff3e8bede6f224649.png")} alt="Paris Tribe Gathering" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>

          {/* Video Item 2 - Barcelona */}
          <div className="video-item_wrap" data-city="barcelona">
            <div className="video-item_thumbnail">
              <img src={getAssetPath("/images/archive/db9dbf040566f8cba1a77b8f33835e4b411baaa1.png")} alt="Barcelona Tribe Gathering" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>

          {/* Video Item 3 - Berlin */}
          <div className="video-item_wrap" data-city="berlin">
            <div className="video-item_thumbnail">
              <img src={getAssetPath("/images/archive/7daed26c9efac9c483a5692dcacb5545bffe955f.png")} alt="Berlin Tribe Gathering" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>

          {/* Video Item 4 - Munich */}
          <div className="video-item_wrap" data-city="munich">
            <div className="video-item_thumbnail">
              <img src={getAssetPath("/images/archive/96713e170504cc80e94ca625c77c15f088c6303a.png")} alt="Munich Tribe Gathering" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>

          {/* Video Item 5 - New York */}
          <div className="video-item_wrap" data-city="newyork">
            <div className="video-item_thumbnail">
              <img src={getAssetPath("/images/archive/514f1859f38c01030ff1fc01dca113c16df7f313.png")} alt="New York Tribe Gathering" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>

          {/* Video Item 6 - London */}
          <div className="video-item_wrap" data-city="london">
            <div className="video-item_thumbnail">
              <img src={getAssetPath("/images/archive/c234703ee3bfb11a60390c0d6794ddcdabdae215.png")} alt="London Tribe Gathering" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>

        </div>

        {/* Single Video Detail View (Hidden by default) */}
        <div className="video-detail_content u-position-relative" id="videoDetailContent" style={{ display: 'none' }}>
          <div className="video-detail_layout">
            <div className="video-detail_video">
              <img id="detailVideoImage" src="")} alt="Video" className="image" />
              <div className="video-item_play-button">
                <img src={getAssetPath("/images/archive/9ba6c4be229aa0df664a9d5ea7e2c590a0a6db3e.svg")} alt="Play" style={{ width: '64px', height: '64px' }} />
              </div>
            </div>
            <div className="video-detail_info">
              <h2 id="detailVideoTitle" className="text-h1 u-text-uppercase"></h2>
              <p id="detailVideoDescription" className="text-body-lg"></p>
              <a href="/booking" className="button button--primary">BOOK NOW</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
