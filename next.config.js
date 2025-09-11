import { withAxiom } from "next-axiom";
import createNextIntlPlugin from "next-intl/plugin";

import("./src/env.mjs");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/review",
        destination:
          "https://search.google.com/local/writereview?placeid=ChIJtUt4w9gZ6zkR17BDgaWAIdQ/",
      },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    // optimizeCss requires the 'critters' package which is not installed; disable to prevent build failures
    optimizeCss: false,
    optimizePackageImports: ["react-icons"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withAxiom(withNextIntl(nextConfig));
