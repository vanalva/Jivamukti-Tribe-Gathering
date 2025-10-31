'use client'

import Script from 'next/script'
import { getAssetPath } from '../utils/paths'

export default function CustomCursor() {
  return (
    <>
      <div className="custom-cursor">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 54.6387H17V29.0205L41.3809 53.4014L53.4014 41.3809L29.0215 17H54.6387V0H0V54.6387Z"
            fill="#151515"
          />
        </svg>
      </div>
      <Script src={getAssetPath("/js/custom-cursor.js")} strategy="afterInteractive" />
    </>
  )
}
