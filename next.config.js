/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**play.google.com",
      },
      {
        protocol: "https",
        hostname: "tools.applemediaservices.com",
      },
    ],
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
