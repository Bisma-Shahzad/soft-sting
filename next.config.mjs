/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/', // change to 'https://softstings.com/profile/' if you want to send users to the live profile
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
