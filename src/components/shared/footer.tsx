import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { getTranslations } from "next-intl/server";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { LINKS } from "@/config/navigation";
import { SOCIALS } from "@/config/social";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TriggerModalButton } from "@/components/shared/contact-modal";
import Logo from "@/components/shared/logo";

const Footer = async () => {
  const t = await getTranslations();
  return (
    <footer className="py-10 md:pt-16">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-8">
          <Logo />
          <p>{t("description")}</p>
          <TriggerModalButton variant="accent" size="xl">
            {t("contact-us")} <LuArrowRight className="ml-2" />
          </TriggerModalButton>
          <div className="flex flex-row gap-2">
            {SOCIALS.map(({ href, icon: Icon, tooltip, label }) => (
              <TooltipProvider delayDuration={100} key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={cn(
                        buttonVariants({ variant: "reverse" }),
                        "rounded-full border p-3 py-6",
                      )}
                    >
                      <Icon className="text-2xl" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="mb-0">{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div>
            <h3 className="h5 mb-6 whitespace-nowrap">
              {t("footer.quick-links")}
            </h3>
            <nav className="flex flex-col items-start [&>a]:text-lg">
              {LINKS.map(({ href, label, isExternal, key }) => (
                <Link
                  className={cn(buttonVariants({ variant: "link-hover-end" }))}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  key={label}
                  aria-label={label}
                >
                  {t(`navbar.${key}`)}{" "}
                  {isExternal && <LuArrowUpRight className="ml-2" />}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <div>
              <p>{t("footer.phone-label")}</p>
              <p className="h5 mb-6">
                {SOCIALS.find(({ label }) => label === "Phone")?.tooltip}
              </p>
            </div>
            <div>
              <p>{t("footer.address-label")}</p>
              <p className="h5 mb-6">{t("footer.address")}</p>
            </div>
          </div>
        </div>
        <div>
          {/* <h3 className="h5 mb-6">{t("footer.get-a-quote")}</h3>

          <p>{t("footer.cta-description")}</p>

          <Button size="xl" variant="accent">
            {t("contact-us")} <LuArrowRight className="ml-2" />
          </Button> */}

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.431566575466!2d85.34879417533395!3d27.67305337620226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d8c3784bb5%3A0xd42180a58143b0d7!2sSadan%20nirman%20pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1720271868542!5m2!1sen!2snp"
            className=" size-full min-h-[40vh] max-w-3xl border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="container mt-10 flex flex-col items-center justify-between gap-4 border-2 bg-accent p-4 md:flex-row [&>p]:mb-0">
        <p>
          {new Date().getFullYear()} {t("footer.copyright")}
        </p>

        <p className="text-center">
          {t("footer.developed-and-maintained-by")}{" "}
          <Link
            className={cn(
              buttonVariants({ variant: "link-hover-end" }),
              "text-xl",
            )}
            href="https://kafalbytes.netlify.app"
          >
            KafalBytes <LuArrowUpRight className="ml-2" />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
