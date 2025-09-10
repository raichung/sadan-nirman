"use client";

import Image from "next/image";
import { LuX } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    image: string;
    name: { en: string; np: string };
    date: string;
    description: { en: string; np: string };
    detailedDescription: { en: string; np: string };
  };
  locale: string;
}

const ProjectDialog = ({
  isOpen,
  onClose,
  project,
  locale,
}: ProjectDialogProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-2xl font-bold uppercase">
            {project.name[locale as keyof typeof project.name]}
          </DialogTitle>
          <Button
            variant="default"
            size="icon"
            onClick={onClose}
            className="size-8"
          >
            <LuX className="size-4" />
          </Button>
        </div>
        <p className="text-muted-foreground">{project.date}</p>
      </DialogHeader>

      <div className="space-y-6">
        <div className="relative h-[300px] w-full">
          <Image
            src={project.image}
            alt={project.name[locale as keyof typeof project.name]}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Project Overview</h3>
            <p className="text-muted-foreground">
              {project.description[locale as keyof typeof project.description]}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Detailed Description</h3>
            <p className="leading-relaxed text-muted-foreground">
              {
                project.detailedDescription[
                  locale as keyof typeof project.detailedDescription
                ]
              }
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default ProjectDialog;
