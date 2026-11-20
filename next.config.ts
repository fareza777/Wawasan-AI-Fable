import type { NextConfig } from "next";

// Static export (out/) served by Cloudflare Workers Static Assets.
// Redirects live in public/_redirects, API routes in worker/index.ts.
// See MIGRATION-CLOUDFLARE.md.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
