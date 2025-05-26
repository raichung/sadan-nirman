"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LuArrowUpRight, LuMenu } from "react-icons/lu";

import { LINKS } from "@/config/navigation";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/shared/logo";

const HeaderMobile = () => {
  const t = useTranslations("navbar");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} key="mobile-nav">
      <SheetTrigger asChild>
        <Button variant="accent" className="lg:hidden" aria-label="Open Menu">
          <LuMenu className="text-2xl" />
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-6 py-10 [&>a]:text-xl">
          {LINKS.map(({ href, label, isExternal, key }) => (
            <Link
              className={cn(buttonVariants({ variant: "link-hover-end" }))}
              href={href}
              target={isExternal ? "_blank" : undefined}
              aria-label={label}
              key={label}
              onClick={() => setIsSheetOpen(false)}
            >
              {t(key)} {isExternal && <LuArrowUpRight className="ml-2" />}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobile;
