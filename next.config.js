/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/fecrash/organizers',
  reactStrictMode: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: true,
  },
}

module.exports = nextConfig;
