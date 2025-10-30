'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Custom hook for schedule day interactions
 * Handles:
 * - Floating image that follows cursor
 * - Row hover image switching
 * - Row expansion/accordion behavior
 * - Image visibility based on expansion state
 */
export function useScheduleInteractions() {
  const pathname = usePathname()

  useEffect(() => {
    const dayWraps = document.querySelectorAll('.day_wrap')
    const cleanupFunctions: (() => void)[] = []

    dayWraps.forEach(day => {
      const table = day.querySelector('.day_table')
      const rowItems = day.querySelectorAll('.day_row-item')
      const rows = day.querySelectorAll('.day_row[data-image]')
      const image = day.querySelector('.day_image')
      const imageElement = image ? image.querySelector('img') : null

      if (!table || !image || !imageElement) return

      let mouseX = 0
      let mouseY = 0
      let currentX = 0
      let currentY = 0
      let isHovering = false
      let animationFrame: number | null = null
      let isAnyRowExpanded = false

      function animate() {
        if (!isHovering) return

        const ease = 0.15
        currentX += (mouseX - currentX) * ease
        currentY += (mouseY - currentY) * ease

        ;(image as HTMLElement).style.left = currentX + 'px'
        ;(image as HTMLElement).style.top = currentY + 'px'

        animationFrame = requestAnimationFrame(animate)
      }

      // Table hover handlers
      const handleTableMouseEnter = (e: MouseEvent) => {
        // Only show image if no row is expanded
        if (!isAnyRowExpanded) {
          isHovering = true
          mouseX = e.clientX
          mouseY = e.clientY
          currentX = mouseX
          currentY = mouseY

          image?.classList.add('is-visible')
          animate()
        }
      }

      const handleTableMouseLeave = () => {
        isHovering = false
        image?.classList.remove('is-visible')
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }

      const handleTableMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX
        mouseY = e.clientY
      }

      table.addEventListener('mouseenter', handleTableMouseEnter)
      table.addEventListener('mouseleave', handleTableMouseLeave)
      table.addEventListener('mousemove', handleTableMouseMove)

      cleanupFunctions.push(() => {
        table.removeEventListener('mouseenter', handleTableMouseEnter)
        table.removeEventListener('mouseleave', handleTableMouseLeave)
        table.removeEventListener('mousemove', handleTableMouseMove)
      })

      // Row hover and click handlers
      rows.forEach(row => {
        const handleRowMouseEnter = function() {
          const parentItem = (row as HTMLElement).parentElement
          const isThisRowExpanded = parentItem?.classList.contains('is-active')

          // Only show image if this specific row is NOT the expanded one
          if (isAnyRowExpanded && !isHovering && !isThisRowExpanded) {
            isHovering = true
            image?.classList.add('is-visible')
            animate()
          }

          const newImageSrc = (row as HTMLElement).getAttribute('data-image')
          if (newImageSrc && (imageElement as HTMLImageElement).src !== newImageSrc) {
            // Instant image change on hover
            ;(imageElement as HTMLImageElement).src = newImageSrc
          }
        }

        const handleRowMouseLeave = () => {
          // Hide image when leaving a row if a row is expanded
          if (isAnyRowExpanded) {
            isHovering = false
            image?.classList.remove('is-visible')
            if (animationFrame) {
              cancelAnimationFrame(animationFrame)
            }
          }
        }

        const handleRowClick = function() {
          const parentItem = (row as HTMLElement).parentElement
          const isActive = parentItem?.classList.contains('is-active')

          // Close all other rows in this day
          rowItems.forEach(item => {
            if (item !== parentItem) {
              item.classList.remove('is-active')
            }
          })

          // Toggle current row
          if (isActive) {
            parentItem?.classList.remove('is-active')
            isAnyRowExpanded = false
          } else {
            parentItem?.classList.add('is-active')
            isAnyRowExpanded = true
            // Hide image when expanding
            isHovering = false
            image?.classList.remove('is-visible')
            if (animationFrame) {
              cancelAnimationFrame(animationFrame)
            }
          }
        }

        row.addEventListener('mouseenter', handleRowMouseEnter)
        row.addEventListener('mouseleave', handleRowMouseLeave)
        row.addEventListener('click', handleRowClick)

        cleanupFunctions.push(() => {
          row.removeEventListener('mouseenter', handleRowMouseEnter)
          row.removeEventListener('mouseleave', handleRowMouseLeave)
          row.removeEventListener('click', handleRowClick)
        })
      })
    })

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [pathname])
}
