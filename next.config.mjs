/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Allow Squarespace iframe embed; later we can tighten to your exact domain
          { key: 'X-Frame-Options', value: 'ALLOWALL' }
        ]
      }
    ]
  }
};

export default nextConfig;

