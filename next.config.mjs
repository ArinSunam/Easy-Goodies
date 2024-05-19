/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themewagon.github.io'
      }
    ]
  }
};

export default nextConfig;
