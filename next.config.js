/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**play.google.com',
      },
      {
        protocol: 'https',
        hostname: 'tools.applemediaservices.com',
      },
    ],
  },
}

module.exports = nextConfig
