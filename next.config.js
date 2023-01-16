/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://karuracomedyclub.hustlesasa.shop/product/22765',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
