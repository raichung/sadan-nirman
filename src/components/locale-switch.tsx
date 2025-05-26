"use client";

import { languages, usePathname, useRouter } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-4">
      {languages.map((language) => (
        <Button
          key={language.value}
          size="sm"
          variant="link"
          className="flex flex-row gap-2 text-xl text-white"
          onClick={() => {
            router.push(pathname, {
              locale: language.value,
            });
          }}
        >
          {language.label}
        </Button>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
