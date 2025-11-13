import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Cache Components (includes Partial Pre-Rendering) - Next.js 16 feature
  cacheComponents: true,
  
  // Enable TypeScript strict mode
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors. (Not recommended for production)
    ignoreBuildErrors: false,
  },

  // Image optimization
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
  },

  // Enable compression
  compress: true,

  // Enable powered by header removal for security
  poweredByHeader: false,
};

export default nextConfig;
