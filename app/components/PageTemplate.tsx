'use client'

import CustomCursor from './CustomCursor'
import Navigation from './Navigation'
import FullscreenMenu from './FullscreenMenu'
import Footer from './Footer'
import ClientScripts from './ClientScripts'

interface PageTemplateProps {
  children: React.ReactNode
  logoPath?: string
  additionalScripts?: React.ReactNode
}

export default function PageTemplate({ children, logoPath, additionalScripts }: PageTemplateProps) {
  return (
    <>
      <CustomCursor />
      <Navigation logoPath={logoPath} />
      <FullscreenMenu />

      {children}

      <Footer />
      <ClientScripts />
      {additionalScripts}
    </>
  )
}
