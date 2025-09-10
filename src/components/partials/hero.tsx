import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LuArrowRight } from "react-icons/lu";

import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

import ContactForm from "../forms/contact";
import { TriggerModalButton } from "../shared/contact-modal";
import HeroSlideshow from "./hero-slideshow";

const HeroSection = async () => {
  const t = await getTranslations();

  return (
    <>
      <section className="bg-accent py-4">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative z-[2] flex flex-col justify-between gap-4 p-8 before:absolute before:inset-0 before:z-[-1] before:bg-black/60">
            <HeroSlideshow />
            <h1 className="z-10 font-extrabold uppercase leading-snug tracking-wide text-white">
              {t("hero-heading.part-1")} <br />{" "}
              <span className="text-accent"> {t("hero-heading.part-2")}</span>
              <br /> {t("hero-heading.part-3")}
              <br /> {t("hero-heading.part-4")}
            </h1>
            <Link href="/about#projects">
              <Button size="xl" variant="accent" className="self-start">
                {t("all-projects")} <LuArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <ContactForm />
        </div>
        <div className="container -mb-48 py-10 md:py-16">
          <picture className="h-[50vh] w-full">
            <Image
              fetchPriority="high"
              src="/hero2.avif"
              alt="Hero Image"
              className="h-[60vh] w-full object-cover"
              width={1368}
              height={446}
              sizes="100vw"
            />
          </picture>
        </div>
      </section>

      <section className="mt-48 py-10">
        <div className="container grid grid-cols-1 gap-4 md:grid-cols-2">
          <h2 className="font-extrabold uppercase leading-snug tracking-wide">
            {t("hero-heading-2.part-1")} <br />
            {t("hero-heading-2.part-2")} <br />
            {t("hero-heading-2.part-3")} <br />
            {t("hero-heading-2.part-4")}
          </h2>
          <div className="lg:ml-32">
            <p>{t("hero-heading-2.description")}</p>
            <TriggerModalButton variant="accent" size="xl">
              {t("contact-us")} <LuArrowRight className="ml-2" />
            </TriggerModalButton>
          </div>
        </div>

        <div className="container py-10">
          <picture className="h-[50vh] max-h-[500px] w-full">
            <Image
              src="/hero3.avif"
              alt="Hero Image"
              className="h-[60vh] max-h-[500px] w-full object-cover"
              width={1368}
              height={446}
              sizes="100vw"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
