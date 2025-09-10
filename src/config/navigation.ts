/* eslint-disable import/prefer-default-export */

export const LINKS = [
  {
    key: "about-us",
    label: "About Us",
    href: "/about",
    isExternal: false,
  },
  {
    key: "projects",
    label: "Projects",
    href: "/about#projects",
    isExternal: false,
  },
  {
    key: "services",
    label: "Services",
    href: "/#services",
    isExternal: false,
  },
  {
    key: "reviews",
    label: "Reviews",
    href: "/#reviews",
    isExternal: false,
  },
  {
    key: "contact-us",
    label: "Contact Us",
    href: "/#contact",
    isExternal: false,
  },
  {
    key: "faqs",
    label: "FAQs",
    href: "/#faq",
    isExternal: false,
  },
  {
    key: "write-a-review",
    label: "Write a Review",
    href: "https://search.google.com/local/writereview?placeid=ChIJtUt4w9gZ6zkR17BDgaWAIdQ",
    isExternal: true,
  },
] as const;
