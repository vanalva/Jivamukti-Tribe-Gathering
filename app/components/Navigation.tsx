'use client'

import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  logoPath?: string
}

export default function Navigation({ logoPath = '/images/home/b8ea7887be24e71c0719f0d0ca144381006d6ee5.png' }: NavigationProps) {
  return (
    <nav className="nav_wrap u-section u-position-absolute">
      <div className="nav_background u-cover-absolute u-zindex-negative"></div>
      <div className="nav_content u-position-relative u-zindex-high">
        <div className="nav_menu">
          <Link href="/about-tribe" className="link text-nav u-text-uppercase">About</Link>
          <Link href="/schedule" className="link text-nav u-text-uppercase">Schedule</Link>
          <Link href="/booking" className="link text-nav u-text-uppercase">Register</Link>
        </div>

        <div className="nav_logo">
          <Link href="/">
            <img
              src={logoPath}
              alt="Jivamukti Tribe Gathering"
              className="image image-contain"
            />
          </Link>
        </div>

        <div className="nav_menu">
          <button className="nav_hamburger" id="menuToggle" aria-label="Toggle menu">
            <svg className="hamburger-icon" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="2" x2="24" y2="2" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
              <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
            </svg>
            <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
              <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
            </svg>
          </button>
          <Link href="/archive" className="link text-nav u-text-uppercase">Archive</Link>
          <Link href="/about-rome" className="link text-nav u-text-uppercase">Useful Info</Link>
        </div>
      </div>
    </nav>
  )
}
