/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const languages = [
  { label: "English", value: "en" },
  { label: "Nepalese", value: "np" },
] as const;

export const locales = languages.map((language) => language.value);

export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
