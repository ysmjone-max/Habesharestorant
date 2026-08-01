/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Habesharestorant',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
