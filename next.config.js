
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/skills/redirect',
        destination: 'https://vercel.com',
        permanent: false,
      },
    ]
  },
}