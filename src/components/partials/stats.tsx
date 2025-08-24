import { getLocale } from "next-intl/server";

import { STATS } from "@/config/stats";

const Stats = async () => {
  const locale = await getLocale();

  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
        {STATS.map(({ title, number, description }) => (
          <div className="flex flex-col gap-4" key={title.en}>
            <h3 className="h4 font-extrabold uppercase leading-snug tracking-wide">
              {title[locale]}
            </h3>
            <blockquote className="text-8xl font-extrabold">
              {number}
              <sup>+</sup>
            </blockquote>
            <p>{description[locale]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
