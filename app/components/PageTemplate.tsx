'use client'

import Navigation from './Navigation'
import FullscreenMenu from './FullscreenMenu'
import Footer from './Footer'

interface PageTemplateProps {
  children: React.ReactNode
  logoPath?: string
  additionalScripts?: React.ReactNode
}

export default function PageTemplate({ children, logoPath, additionalScripts }: PageTemplateProps) {
  return (
    <>
      <Navigation logoPath={logoPath} />
      <FullscreenMenu />

      {children}

      <Footer />
      {additionalScripts}
    </>
  )
}
