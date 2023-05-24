const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.mikenikles.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)
