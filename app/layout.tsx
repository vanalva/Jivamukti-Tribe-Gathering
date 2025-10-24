import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jivamukti Tribe Gathering Rome 2026',
  description: 'Four-day yoga festival celebrating life and expressing our love and devotion through collective yoga practice, chanting, meditation and satsang.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Inter:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
