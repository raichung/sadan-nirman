import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  LuArrowRight,
  LuBrain,
  LuCheckCircle2,
  LuWorkflow,
} from "react-icons/lu";

import { PROJECTS } from "@/config/projects";
import { Link } from "@/lib/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <>
      {/* About Us Section */}
      <section
        id="about-us"
        className="bg-accent py-10 text-accent-foreground md:py-16"
      >
        <div className="container grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="uppercase">
              We&apos;re Nepal&apos;s <br /> Leading Industry <br /> Corporation
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="my-12 flex flex-col gap-4">
              <div className="flex gap-6">
                <div>
                  <div className="rounded-full border p-4">
                    <LuWorkflow className="mx-auto size-6" />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="uppercase">Professional Workers</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque autem delectus illum commodi? Libero, illum
                    consequatur.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="rounded-full border p-4">
                    <LuCheckCircle2 className="mx-auto size-6" />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="uppercase">Gauranteed Quality</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque autem delectus illum commodi? Libero, illum
                    consequatur.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="rounded-full border p-4">
                    <LuBrain className="mx-auto size-6" />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="uppercase">Wide Experience</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque autem delectus illum commodi? Libero, illum
                    consequatur.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <picture className="h-screen w-full self-center">
            <Image
              src="/hero4.avif"
              alt="Hero Image"
              className="h-screen w-full object-cover object-top"
              width={1200}
              height={1200}
            />
          </picture>
        </div>
      </section>

      {/* Our Projects */}
      <section id="projects" className="py-10">
        <div className="container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <h2 className="uppercase">
                {t("project-heading.part-1")}
                <br />
                {t("project-heading.part-2")}
              </h2>
            </div>
            <Button size="xl" variant="accent">
              {t("all-projects")} <LuArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-3">
            {PROJECTS.map(({ date, description, href, image, name }) => (
              <Card key={name.en}>
                <picture className="h-[40vh] w-full">
                  <Image
                    src={image}
                    alt="Hero Image"
                    className="h-[40vh] w-full object-cover grayscale"
                    width={1200}
                    height={1200}
                  />
                </picture>
                <CardHeader>
                  <CardTitle className="uppercase">{name[locale]}</CardTitle>
                  <CardDescription>{date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{description[locale]}</p>
                  <Separator />
                  <Link
                    href={href}
                    className={buttonVariants({ variant: "link-hover-end" })}
                  >
                    {t("read-more")} <LuArrowRight className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
