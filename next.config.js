/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "image.tmdb.org",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
