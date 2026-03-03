/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Elgert',
    description: 'My Kasm supported workspaces.',
    icon: 'https://mdelgert.github.io/kasm-registry/favicon.ico',
    listUrl: 'https://mdelgert.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
