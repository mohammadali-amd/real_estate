/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images:{
    domains:['bayut-production.s3.eu-central-1.amazonaws.com']
},
}

module.exports = nextConfig
