import { LuStar } from "react-icons/lu";

import { cn } from "@/lib/utils";

type RatingProps = {
  filled?: boolean;
  color?: "amber" | "slate" | "red" | "green";
  size?: "sm" | "md" | "lg";
};

const Rating = ({
  filled = false,
  color = "amber",
  size = "md",
}: RatingProps) => {
  const starColor = {
    amber: "text-amber-500",
    slate: "text-slate-600",
    red: "text-red-500",
    green: "text-emerald-500",
  };

  const starSize = {
    sm: "size-3",
    md: "size-5",
    lg: "size-8",
  };

  const StarSVG = () => {
    return (
      <LuStar
        className={cn(
          "shrink-0",
          filled ? starColor[color] : "text-slate-200",
          starSize[size],
        )}
        fill="currentColor"
      />
    );
  };

  return <StarSVG />;
};

export default Rating;
