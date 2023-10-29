/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
