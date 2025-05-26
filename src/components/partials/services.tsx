import { getLocale, getTranslations } from "next-intl/server";

import { SERVICES } from "@/config/services";

const Services = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <section id="services" className="bg-accent py-16">
      <div className="container">
        <h2 className="uppercase">{t("services-heading")}</h2>
        <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title.en}
              className="flex flex-col items-center gap-8 border px-12 py-6"
            >
              <h3 className="uppercase">{title[locale]}</h3>
              <div className="rounded-full border bg-background p-8 text-foreground">
                <Icon className="mx-auto size-12" />
              </div>
              <p className="line-clamp-5 text-center">{description[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
