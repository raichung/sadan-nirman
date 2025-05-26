import { LuCommand, LuMoon, LuSunMedium } from "react-icons/lu";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  logo: LuCommand,
  sun: LuSunMedium,
  moon: LuMoon,
};

export const Icons: IconsType = icons;
