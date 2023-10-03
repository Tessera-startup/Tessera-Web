/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
  // env: {
  //   BASE_URL: 'localhost:9000',
  // },
};

module.exports = nextConfig;
