export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  ogImage: string;
  organization: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint: {
      telephone: string;
      contactType: string;
      areaServed: string;
    };
    sameAs: string[];
  };
};

export type SubscriptionPlan = {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
};

export type AddonType = {
  name: string;
  symbol: string;
  price: number | string;
  desc: string;
  tags: string[];
  isOneTimeOnly: boolean;
};
