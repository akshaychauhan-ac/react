/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/abc",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
