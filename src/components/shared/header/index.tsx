import { getTranslations } from "next-intl/server";
import { LuArrowUpRight } from "react-icons/lu";

import { LINKS } from "@/config/navigation";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import HeaderMobile from "@/components/shared/header/mobile";
import Logo from "@/components/shared/logo";

const Header = async () => {
  const t = await getTranslations("navbar");

  return (
    <header className="bg-accent py-6 text-accent-foreground md:py-10">
      <div className="container flex items-center justify-between border-2 bg-background p-4 text-foreground">
        <Logo />
        <nav className="hidden gap-2 lg:flex [&>a]:text-xl">
          {LINKS.map(({ href, label, isExternal, key }) => (
            <Link
              className={cn(buttonVariants({ variant: "link-hover-end" }))}
              href={href}
              target={isExternal ? "_blank" : undefined}
              aria-label={label}
              key={label}
            >
              {t(key)} {isExternal && <LuArrowUpRight className="ml-2" />}
            </Link>
          ))}
        </nav>
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
