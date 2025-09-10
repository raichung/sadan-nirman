import { withAxiom } from "next-axiom";
import createNextIntlPlugin from "next-intl/plugin";

import("./src/env.mjs");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withAxiom(withNextIntl(nextConfig));
