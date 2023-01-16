/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://karuracomedyclub.hustlesasa.shop/product/22765/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
