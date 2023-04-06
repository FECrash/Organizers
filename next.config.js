/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/organizers',
  assetPrefix: "/organizers",
  reactStrictMode: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: true
  }
}

module.exports = nextConfig;
