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
    domains: [
      'png.pngtree.com',
      'img.championat.com',
      'cs11.livemaster.ru',
      'i.pinimg.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      's3-alpha-sig.figma.com',
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
