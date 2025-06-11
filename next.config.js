/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization
  images: { unoptimized: true },
  
  // Disable CSS optimization to prevent font fetching issues during build
  optimizeCss: false,
  
  // Basic configuration
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;