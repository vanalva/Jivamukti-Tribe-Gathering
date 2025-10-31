'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { getAssetPath } from '../utils/paths'

export default function ClientScripts() {
  useEffect(() => {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle')
    const fullscreenMenu = document.getElementById('fullscreenMenu')
    const navWrap = document.querySelector('.nav_wrap')

    function getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth
    }

    function openMenu() {
      const scrollbarWidth = getScrollbarWidth()
      fullscreenMenu?.classList.add('is-open')
      menuToggle?.classList.add('is-active')
      navWrap?.classList.add('menu-is-open')
      if (scrollbarWidth > 0) {
        const currentBodyPadding = parseInt(window.getComputedStyle(document.body).paddingRight) || 0
        const currentNavPadding = navWrap ? parseInt(window.getComputedStyle(navWrap as Element).paddingRight) || 0 : 0
        document.body.style.paddingRight = (currentBodyPadding + scrollbarWidth) + 'px'
        if (navWrap) (navWrap as HTMLElement).style.paddingRight = (currentNavPadding + scrollbarWidth) + 'px'
      }
      document.body.classList.add('u-overflow-hidden')
    }

    function closeMenu() {
      fullscreenMenu?.classList.remove('is-open')
      menuToggle?.classList.remove('is-active')
      navWrap?.classList.remove('menu-is-open')
      document.body.classList.remove('u-overflow-hidden')
      document.body.style.paddingRight = ''
      if (navWrap) (navWrap as HTMLElement).style.paddingRight = ''
    }

    menuToggle?.addEventListener('click', function() {
      if (fullscreenMenu?.classList.contains('is-open')) {
        closeMenu()
      } else {
        openMenu()
      }
    })

    fullscreenMenu?.addEventListener('click', function(e) {
      const target = e.target as Element
      if (target.classList.contains('menu-close') || target.closest('.menu-close')) {
        closeMenu()
      }
    })

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && fullscreenMenu?.classList.contains('is-open')) {
        closeMenu()
      }
    })

    // Cleanup
    return () => {
      menuToggle?.removeEventListener('click', () => {})
      fullscreenMenu?.removeEventListener('click', () => {})
      document.removeEventListener('keydown', () => {})
    }
  }, [])

  return (
    <>
      <Script src={getAssetPath("/js/custom-cursor.js")} strategy="lazyOnload" />
    </>
  )
}
