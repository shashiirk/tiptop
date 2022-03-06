/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.hollisterindiaonline.com', 'firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
