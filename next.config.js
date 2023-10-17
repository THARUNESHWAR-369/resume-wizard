/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.latextemplates.com",
      "cdn-images.zety.com",
    ],
  },
};

module.exports = nextConfig
