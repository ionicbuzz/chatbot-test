/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: 'http://localhost:5000/api/chat', // Adjust port to match your Express server
      },
    ];
  },
};

module.exports = nextConfig;