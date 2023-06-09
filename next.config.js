/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["image.tmdb.org", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
