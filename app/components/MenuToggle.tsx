'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function MenuToggle() {
  const pathname = usePathname()

  useEffect(() => {
    const menuToggle = document.getElementById('menuToggle')
    const fullscreenMenu = document.getElementById('fullscreenMenu')
    const navWrap = document.querySelector('.nav_wrap')

    if (!menuToggle || !fullscreenMenu) return

    function getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth
    }

    function openMenu() {
      const scrollbarWidth = getScrollbarWidth()
      fullscreenMenu.classList.add('is-open')
      menuToggle.classList.add('is-active')
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
      fullscreenMenu.classList.remove('is-open')
      menuToggle.classList.remove('is-active')
      navWrap?.classList.remove('menu-is-open')
      document.body.classList.remove('u-overflow-hidden')
      document.body.style.paddingRight = ''
      if (navWrap) (navWrap as HTMLElement).style.paddingRight = ''
    }

    const clickHandler = function() {
      if (fullscreenMenu.classList.contains('is-open')) {
        closeMenu()
      } else {
        openMenu()
      }
    }

    const menuClickHandler = function(e: Event) {
      const target = e.target as Element
      if (target.classList.contains('menu-close') || target.closest('.menu-close')) {
        closeMenu()
      }
    }

    const keydownHandler = function(e: KeyboardEvent) {
      if (e.key === 'Escape' && fullscreenMenu.classList.contains('is-open')) {
        closeMenu()
      }
    }

    // Remove any existing listeners first (in case of duplicates)
    menuToggle.removeEventListener('click', clickHandler)
    fullscreenMenu.removeEventListener('click', menuClickHandler)
    document.removeEventListener('keydown', keydownHandler)

    // Add listeners
    menuToggle.addEventListener('click', clickHandler)
    fullscreenMenu.addEventListener('click', menuClickHandler)
    document.addEventListener('keydown', keydownHandler)

    return () => {
      // Remove event listeners
      menuToggle.removeEventListener('click', clickHandler)
      fullscreenMenu.removeEventListener('click', menuClickHandler)
      document.removeEventListener('keydown', keydownHandler)

      // Clean up body state when navigating away
      closeMenu()
    }
  }, [pathname]) // Re-run when pathname changes

  return null
}
