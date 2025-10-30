/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Only use basePath in production (GitHub Pages)
  basePath: isProd ? '/Jivamukti-Tribe-Gathering' : '',
  assetPrefix: isProd ? '/Jivamukti-Tribe-Gathering' : '',
}

module.exports = nextConfig
