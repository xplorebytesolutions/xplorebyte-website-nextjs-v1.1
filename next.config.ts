import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Prevent ESLint errors from failing production builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
  async redirects() {
    return [
      {
        source: "/whatsapp-crm-for-doctors",
        destination: "/whatsapp-crm-for-clinics-and-doctors",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
