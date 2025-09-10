/* eslint-disable import/prefer-default-export */

import { type SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Sadan Nirman | Waterproofing & Construction Services in Nepal",
  author: "raichung",
  description:
    "Expert waterproofing, construction, and home repair services in Nepal. Professional house inspections and renovations by Sadan Nirman. Quality guaranteed.",
  keywords: [
    "Waterproofing services Nepal",
    "House repair company Kathmandu",
    "Construction firms Nepal",
    "Building inspection Nepal",
    "Sadan nirman construction",
    "Nepali home repair experts",
    "Waterproofing contractors Kathmandu",
    "Nepal house renovation services",
    "Building maintenance companies Nepal",
    "Sadan construction and repair",
    "Residential waterproofing Nepal",
    "Home inspection services Kathmandu",
    "Nepal building restoration",
    "Construction and repair Nepal",
    "Waterproofing solutions Kathmandu",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    author: "https://sahrohit.com.np",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/opengraph-image.jpg`,
  organization: {
    name: "Sadan Nirman Construction Company",
    url: env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    logo: `${env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/sadan_nirman_logo.png`,
    description: "Leading construction and waterproofing company in Nepal",
    address: {
      streetAddress: "Anamnagar",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    contactPoint: {
      telephone: "+977-1-XXXXXXXX",
      contactType: "customer service",
      areaServed: "NP",
    },
    sameAs: [
      "https://www.facebook.com/sadannirman",
      "https://www.linkedin.com/company/sadan-nirman",
    ],
  },
};
