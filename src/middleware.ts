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
    // Match all non-internal paths without injecting a locale prefix
    "/((?!_next|_vercel|api|.*\\..*|500$|404$).*)",
  ],
};
