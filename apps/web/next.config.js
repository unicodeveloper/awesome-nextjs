/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sharesteak/ui', '@sharesteak/api-client', '@sharesteak/types'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@sharesteak/ui'],
  },
}

module.exports = nextConfig
