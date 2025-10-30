'use client'

import Link from 'next/link'

export default function FullscreenMenu() {
  return (
    <div className="fullscreen-menu" id="fullscreenMenu">
      <div className="menu-fullscreen_background u-cover-absolute"></div>
      <div className="menu-fullscreen_content u-position-relative">
        <div className="menu-fullscreen_grid">
          <nav className="menu-fullscreen_nav">
            <Link href="/" className="menu-fullscreen_link text-display-xl u-text-uppercase">
              HOME
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
            <Link href="/about-tribe" className="menu-fullscreen_link text-display-xl u-text-uppercase">
              ABOUT
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
            <Link href="/schedule" className="menu-fullscreen_link text-display-xl u-text-uppercase">
              SCHEDULE
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
            <Link href="/teachers" className="menu-fullscreen_link text-display-xl u-text-uppercase">
              TEACHERS
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
            <Link href="/booking" className="menu-fullscreen_link menu-fullscreen_link--primary text-display-xl u-text-uppercase">
              REGISTER
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
            <Link href="/about-rome" className="menu-fullscreen_link text-display-xl u-text-uppercase">
              USEFUL INFO
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
            <Link href="/archive" className="menu-fullscreen_link text-display-xl u-text-uppercase">
              ARCHIVE
              <img src="/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg" alt="" className="menu-fullscreen_arrow-icon" />
            </Link>
          </nav>
          <div className="menu-fullscreen_image-wrap">
            <div className="menu-fullscreen_image-container">
              <img src="/images/menu/6892fb9a88690f30225eb6d19e7d30458d5c3662.png" alt="Rome Tribe Gathering" className="menu-fullscreen_hero-image" />
              <div className="menu-fullscreen_badge">
                <img src="/images/tribe-circular-stamp.svg" alt="Rome Tribe Gathering 25" className="menu-fullscreen_badge-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="menu-fullscreen_footer">
          <div className="menu-fullscreen_footer-left">
            <img src="/images/menu/0020438c96462729a00595340c6a4efd7b8f7a52.svg" alt="Jivamukti Yoga" className="menu-fullscreen_footer-logo" />
            <p className="text-legal menu-fullscreen_copyright">© 2024 Jivamukti Yoga. All rights reserved.</p>
          </div>
          <div className="menu-fullscreen_footer-right">
            <a href="#" className="menu-fullscreen_social-link" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="menu-fullscreen_social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="#" className="menu-fullscreen_social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="link text-legal menu-fullscreen_footer-link">Terms</a>
            <a href="#" className="link text-legal menu-fullscreen_footer-link">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
