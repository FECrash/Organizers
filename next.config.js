/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/qr',
  reactStrictMode: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: true
  }
}

module.exports = nextConfig;
