/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  basePath: '/Organizers',
  assetPrefix: '/Organizers',
  reactStrictMode: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: true
  },
  images: {
     unoptimized: true,
    loader: 'akamai',
    path: '/',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig;
