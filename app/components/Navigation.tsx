'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getAssetPath } from '../utils/paths'

interface NavigationProps {
  logoPath?: string
}

export default function Navigation({ logoPath = '/images/tribe-isotype.svg' }: NavigationProps) {
  // Apply asset path to logoPath if it's provided
  const logoPathWithBase = logoPath ? getAssetPath(logoPath) : getAssetPath('/images/tribe-isotype.svg')
  const pathname = usePathname()

  const isActive = (path: string) => {
    // Remove trailing slashes for comparison
    const cleanPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
    return cleanPathname === cleanPath ? 'nav_link--active' : ''
  }

  return (
    <nav className="nav_wrap u-section u-position-absolute">
      <div className="nav_background u-cover-absolute u-zindex-negative"></div>
      <div className="nav_content u-position-relative u-zindex-high">
        <div className="nav_menu">
          <Link href="/about-tribe" className={`nav_link link text-nav u-text-uppercase ${isActive('/about-tribe')}`}>
            About
            <img src={getAssetPath("/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg")} alt="" className="nav_arrow-icon" />
          </Link>
          <Link href="/schedule" className={`nav_link link text-nav u-text-uppercase ${isActive('/schedule')}`}>
            Schedule
            <img src={getAssetPath("/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg")} alt="" className="nav_arrow-icon" />
          </Link>
          <Link href="/booking" className={`nav_link link text-nav u-text-uppercase ${isActive('/booking')}`}>
            Register
            <img src={getAssetPath("/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg")} alt="" className="nav_arrow-icon" />
          </Link>
        </div>

        <div className="nav_logo">
          <Link href="/">
            <img
              src={logoPathWithBase}
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
          <Link href="/archive" className={`nav_link link text-nav u-text-uppercase ${isActive('/archive')}`}>
            Archive
            <img src={getAssetPath("/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg")} alt="" className="nav_arrow-icon" />
          </Link>
          <Link href="/about-rome" className={`nav_link link text-nav u-text-uppercase ${isActive('/about-rome')}`}>
            Useful Info
            <img src={getAssetPath("/images/menu/0ef211aaf5f712ed36dc01291b78d03c02f69d81.svg")} alt="" className="nav_arrow-icon" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
