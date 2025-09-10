"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LuArrowRight } from "react-icons/lu";

import { PROJECTS } from "@/config/projects";
import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProjectDialog from "@/components/shared/project-dialog";

interface ProjectsSectionProps {
  locale: string;
}

const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleReadMore = (project: (typeof PROJECTS)[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
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
            <Link href="/about#projects">
              <Button size="xl" variant="accent">
                {t("all-projects")} <LuArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <Card key={project.name.en}>
                <picture className="h-[40vh] w-full">
                  <Image
                    src={project.image}
                    alt="Project Image"
                    className="h-[40vh] w-full object-cover grayscale"
                    width={1200}
                    height={1200}
                  />
                </picture>
                <CardHeader>
                  <CardTitle className="uppercase">
                    {project.name[locale as keyof typeof project.name]}
                  </CardTitle>
                  <CardDescription>{project.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {
                      project.description[
                        locale as keyof typeof project.description
                      ]
                    }
                  </p>
                  <Separator />
                  <Button
                    variant="link-hover-end"
                    className="h-auto p-0"
                    onClick={() => handleReadMore(project)}
                  >
                    {t("read-more")} <LuArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          project={selectedProject}
          locale={locale}
        />
      )}
    </>
  );
};

export default ProjectsSection;
