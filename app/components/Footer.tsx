'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer_wrap u-section u-position-relative">
      <div className="footer_background u-cover-absolute u-zindex-negative"></div>
      <div className="footer_content u-position-relative">
        <div className="footer_logo-wrap">
          <img src="/images/da7ac17cfdfdad8ef6b54ab2ee41154de842cf3d.svg" alt="ROME" className="footer_logo-image" />
        </div>

        <div className="footer_columns">
          <div className="footer_column">
            <h3 className="footer_column-title text-h5">Navigate</h3>
            <ul className="footer_links footer_links--two-col">
              <li><Link href="/" className="link link--light footer_link text-body-md">Home</Link></li>
              <li><Link href="/about-tribe" className="link link--light footer_link text-body-md">About Tribe</Link></li>
              <li><Link href="/schedule" className="link link--light footer_link text-body-md">Schedule</Link></li>
              <li><Link href="/teachers" className="link link--light footer_link text-body-md">Teachers</Link></li>
              <li><Link href="/booking" className="link link--light footer_link text-body-md">Register</Link></li>
            </ul>
          </div>

          <div className="footer_column footer_column--right">
            <h3 className="footer_column-title text-h5">Explore</h3>
            <ul className="footer_links">
              <li><Link href="/about-rome" className="link link--light footer_link text-body-md">Useful Info</Link></li>
              <li><Link href="/archive" className="link link--light footer_link text-body-md">Archive</Link></li>
              <li><a href="https://jivamuktiyoga.com" target="_blank" rel="noopener noreferrer" className="link link--light footer_link text-body-md">The Jivamukti Method</a></li>
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <p className="footer_copyright text-legal">© 2024 Jivamukti Yoga. All rights reserved.</p>

          <div className="footer_social">
            <a href="#" className="footer_social-link" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="footer_social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="footer_social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
              </svg>
            </a>
          </div>

          <div className="footer_legal">
            <a href="#" className="link link--light text-legal">Terms</a>
            <a href="#" className="link link--light text-legal">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
