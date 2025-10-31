/**
 * Utility function to get asset paths that work in both dev and production
 * In production (GitHub Pages), automatically adds the basePath prefix
 * In development, returns the path as-is
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present (we'll add it back)
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Check if we're in production build
  const isProduction = process.env.NODE_ENV === 'production'
  const basePath = isProduction ? '/Jivamukti-Tribe-Gathering' : ''
  
  // Return path with basePath prefix
  return `${basePath}/${cleanPath}`
}
