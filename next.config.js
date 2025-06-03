/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization
  images: { unoptimized: true },
  
  // Basic configuration
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;