import { type Metadata } from "next";

import { siteConfig } from "@/config/site";
import FAQ from "@/components/partials/faq";
import HeroSection from "@/components/partials/hero";
import Reviews from "@/components/partials/review";
import Services from "@/components/partials/services";
import Stats from "@/components/partials/stats";

export const metadata: Metadata = {
  title: "Sadan Nirman - Expert Construction & Waterproofing Services in Nepal",
  description:
    "Leading construction and waterproofing company in Nepal. Professional house repairs, building inspections, and renovations. Quality guaranteed with expert team and modern techniques.",
  keywords: [
    "Construction services Nepal",
    "Waterproofing Kathmandu",
    "House repair Nepal",
    "Building inspection services",
    "Home renovation Nepal",
    "Construction company Kathmandu",
    "Waterproofing contractors",
    "Building maintenance Nepal",
    "Residential construction",
    "Commercial construction",
  ],
  openGraph: {
    title:
      "Sadan Nirman - Expert Construction & Waterproofing Services in Nepal",
    description:
      "Leading construction and waterproofing company in Nepal. Professional house repairs, building inspections, and renovations with quality guaranteed.",
    url: siteConfig.url.base,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Sadan Nirman Construction Services",
      },
    ],
  },
  twitter: {
    title:
      "Sadan Nirman - Expert Construction & Waterproofing Services in Nepal",
    description:
      "Leading construction and waterproofing company in Nepal. Professional house repairs, building inspections, and renovations with quality guaranteed.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url.base,
  },
};

const Home = () => (
  <>
    <HeroSection />
    <Stats />
    <Services />
    <Reviews />
    {/* <Quote /> */}
    <FAQ />
  </>
);

export default Home;
