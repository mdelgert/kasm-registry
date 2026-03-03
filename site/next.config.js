/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Elgert 1.0',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://raw.githubusercontent.com/homarr-labs/dashboard-icons/60c85d20781a0a22f26496091d1ed8f1c1673e99/svg/kasm.svg',
    listUrl: 'https://mdelgert.github.io/kasm-registry/',
    contactUrl: 'https://github.com/mdelgert/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
