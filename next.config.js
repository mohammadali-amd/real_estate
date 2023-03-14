/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // reactStrictMode: true,
  images:{
    domains:['bayut-production.s3.eu-central-1.amazonaws.com']
},
}

module.exports = nextConfig
