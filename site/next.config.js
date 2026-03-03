/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Elgert 1.1',
    description: 'My Kasm supported workspaces.',
    icon: 'https://raw.githubusercontent.com/homarr-labs/dashboard-icons/60c85d20781a0a22f26496091d1ed8f1c1673e99/svg/kasm.svg',
    listUrl: 'https://registry.kasmweb.com/',
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
