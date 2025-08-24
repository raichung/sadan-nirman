import Image from "next/image";

import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex items-center gap-4", className)}>
    <div className="relative size-8 overflow-hidden p-0">
      <Image
        src="/sadan_nirman_logo.png"
        alt="Sadan Nirman Logo"
        width={80}
        height={80}
        className="object-cover"
        priority
      />
    </div>
    <h2 className="h3 mb-0">Sadan Nirman</h2>
  </Link>
);

export default Logo;
