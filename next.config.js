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
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
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
