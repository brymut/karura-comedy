/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://chpter.co/Karura-ComedyClub/Valentines%20Day%20Comedy%20Jam/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
