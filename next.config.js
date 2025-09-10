/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    optimizePackageImports: ['@prisma/client', 'next-auth', 'stripe']
  },
  turbopack: {
    rules: {
      "*.test.*": ["ignore"],
      "**/__tests__/**/*": ["ignore"],
      "**/*.test.*": ["ignore"],
      "**/*.spec.*": ["ignore"]
    }
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ]
  }
};

export default nextConfig;