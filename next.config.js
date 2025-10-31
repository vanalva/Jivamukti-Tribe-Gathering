/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  // Only use static export for production builds, not in dev mode
  ...(isProd && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Only use basePath in production (GitHub Pages)
  basePath: isProd ? '/Jivamukti-Tribe-Gathering' : '',
  assetPrefix: isProd ? '/Jivamukti-Tribe-Gathering' : '',
}

module.exports = nextConfig
