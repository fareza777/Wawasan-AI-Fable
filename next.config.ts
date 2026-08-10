import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/feed", destination: "/feed.xml", permanent: true },
      { source: "/rss", destination: "/feed.xml", permanent: true },
      // Googlebot & browsers still request these paths by convention.
      { source: "/favicon.ico", destination: "/icon", permanent: false },
      { source: "/apple-touch-icon.png", destination: "/apple-icon", permanent: false },
      { source: "/apple-touch-icon", destination: "/apple-icon", permanent: false },
    ];
  },
};

export default nextConfig;
