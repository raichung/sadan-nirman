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
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withAxiom(withNextIntl(nextConfig));
