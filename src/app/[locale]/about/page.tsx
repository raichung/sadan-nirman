import { type Metadata } from "next";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { LuBrain, LuCheckCircle2, LuWorkflow } from "react-icons/lu";

import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/breadcrumb";
import ProjectsSection from "@/components/partials/projects-section";

export const metadata: Metadata = {
  title: "About Us - Sadan Nirman Construction Company",
  description:
    "Learn about Sadan Nirman, Nepal's leading construction and waterproofing company. Professional workers, guaranteed quality, and wide experience in residential and commercial projects.",
  keywords: [
    "About Sadan Nirman",
    "Construction company Nepal",
    "Waterproofing company Kathmandu",
    "Building contractors Nepal",
    "Construction team Nepal",
    "Professional construction services",
  ],
  openGraph: {
    title: "About Us - Sadan Nirman Construction Company",
    description:
      "Learn about Sadan Nirman, Nepal's leading construction and waterproofing company with professional workers and guaranteed quality.",
    url: `${siteConfig.url.base}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "About Sadan Nirman Construction Company",
      },
    ],
  },
  twitter: {
    title: "About Us - Sadan Nirman Construction Company",
    description:
      "Learn about Sadan Nirman, Nepal's leading construction and waterproofing company with professional workers and guaranteed quality.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url.base}/about`,
  },
};

const AboutPage = async () => {
  const locale = await getLocale();

  return (
    <>
      <Breadcrumb items={[{ name: "About Us", href: "/about" }]} />
      {/* About Us Section */}
      <section
        id="about-us"
        className="bg-accent py-10 text-accent-foreground md:py-16"
      >
        <div className="container grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="uppercase">
              We&apos;re Nepal&apos;s <br /> Leading Construction <br /> Company
            </h2>
            <p>
              Building Nepal&apos;s future with precision, quality, and
              innovation in every project we undertake.
            </p>
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
                    Our team consists of certified engineers, skilled craftsmen,
                    and experienced project managers who bring years of
                    expertise to every construction project.
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
                  <h3 className="uppercase">Guaranteed Quality</h3>
                  <p>
                    We use only the finest materials and follow strict quality
                    control measures to ensure every project meets the highest
                    standards of construction excellence.
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
                    With over a decade of experience in residential, commercial,
                    and industrial construction, we have successfully completed
                    hundreds of projects across Nepal.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="/pic_03.jpg"
              alt="Hero Image"
              className="h-screen w-full object-cover object-top"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <ProjectsSection locale={locale} />
    </>
  );
};

export default AboutPage;
