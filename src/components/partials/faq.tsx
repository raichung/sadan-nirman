import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { QUESTIONS } from "@/config/question";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <section
      id="faq"
      className="bg-accent py-10 text-accent-foreground md:py-16"
    >
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h2 className="uppercase">
            {t("faq-heading.part-1")} <br /> {t("faq-heading.part-2")}
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-xl space-y-8 py-10"
          >
            {QUESTIONS.map(({ question, answer }) => (
              <AccordionItem
                value={question[locale] as string}
                key={question[locale] as string}
                className="border bg-background px-4 pb-2 pt-4 text-foreground"
              >
                <AccordionTrigger className="h5 m-0 p-0 text-left font-semibold uppercase">
                  {question[locale]}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {answer[locale]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <picture className="h-screen w-full">
          <Image
            src="/hero4.avif"
            alt="Hero Image"
            className="h-screen w-full object-cover object-top"
            width={676}
            height={744}
          />
        </picture>
      </div>
    </section>
  );
};

export default FAQ;
