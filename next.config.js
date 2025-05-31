/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export configuration
  images: { unoptimized: true },
  // Configure app directory and font loading
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'default', options: { timeout: 15000 } }
    ]
  },
  // Optimize chunk loading and disable cache to prevent file system issues
  webpack: (config) => {
    // Disable webpack cache to prevent file system issues
    config.cache = false;
    
    // Optimize chunk splitting
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
        },
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          priority: 40,
          enforce: true,
        },
      },
    };

    return config;
  },
  // Basic configuration
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;