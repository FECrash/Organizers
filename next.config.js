/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/Organizers',
  assetPrefix: '/Organizers',
  reactStrictMode: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: true
  }
}

module.exports = nextConfig;
