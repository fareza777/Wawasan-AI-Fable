import type { NextConfig } from "next";

// Static export (out/) served by Cloudflare Workers Static Assets.
// Redirects live in public/_redirects, API routes in worker/index.ts.
// See MIGRATION-CLOUDFLARE.md.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  // CI builders are slower than local machines; allow more time per page.
  staticPageGenerationTimeout: 180,
};

export default nextConfig;
