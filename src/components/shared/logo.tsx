import { LuBuilding } from "react-icons/lu";

import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex items-center gap-4", className)}>
    <div className="grid size-8 place-items-center rounded-full bg-primary">
      <LuBuilding className="text-primary-foreground" />
    </div>
    <h2 className="h3 mb-0">Sadan Nirman</h2>
  </Link>
);

export default Logo;
