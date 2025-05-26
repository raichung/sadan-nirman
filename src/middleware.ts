import createMiddleware from "next-intl/middleware";

import { locales } from "@/lib/navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",

    `/(en|np)/:path*`,

    // Enable redirects that add missing locales
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
