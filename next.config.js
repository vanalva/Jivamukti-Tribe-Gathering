/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Base path for GitHub Pages deployment (update if needed)
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
