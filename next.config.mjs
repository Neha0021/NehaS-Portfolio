/** @type {import('next').NextConfig} */
const nextConfig = {
  // turbopack.root ensures the correct workspace root is used when
  // Next.js detects multiple lockfiles (e.g. a package-lock.json
  // higher in the filesystem). Setting it to './' points to this
  // project's directory and suppresses the warning.
  turbopack: {
    root: './',
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
