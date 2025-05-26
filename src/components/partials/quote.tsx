import Image from "next/image";
import { getTranslations } from "next-intl/server";

import ContactForm from "@/components/forms/contact";

const Quote = async () => {
  const t = await getTranslations();

  return (
    <section
      id="contact"
      className="bg-accent py-10 text-accent-foreground md:py-16"
    >
      <div className="container">
        <h2 className="uppercase">{t("quote-heading")}</h2>
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
          <picture className="hidden h-[70vh] w-full self-center pr-24 lg:block">
            <Image
              src="/hero4.avif"
              alt="Hero Image"
              className="h-[70vh] w-full object-cover object-center"
              width={580}
              height={520}
            />
          </picture>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Quote;
