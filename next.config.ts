import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['@prisma/client'],
  },
};

export default nextConfig;