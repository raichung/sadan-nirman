/* eslint-disable import/prefer-default-export */

import { GiLeak } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";

export const SERVICES = [
  {
    title: { en: "Waterproofing", np: "Waterproofing" },
    description: {
      en: "Professional waterproofing solutions designed to prevent leaks and water damage, ensuring optimal protection and longevity for your property.",
      np: "Professional waterproofing solutions designed to prevent leaks and water damage, ensuring optimal protection and longevity for your property.",
    },
    icon: GiLeak,
  },
  {
    title: { en: "Construction", np: "Construction" },
    description: {
      en: "Specialized construction of lightweight structures that optimize durability and efficiency while reducing material costs and construction time.",
      np: "Specialized construction of lightweight structures that optimize durability and efficiency while reducing material costs and construction time.",
    },
    icon: LuConstruction,
  },
  {
    title: { en: "Interior Designing", np: "Interior Designing" },
    description: {
      en: "Expert interior design services that transform spaces with innovative solutions, combining aesthetics and functionality to create inviting and personalized environments.",
      np: "Expert interior design services that transform spaces with innovative solutions, combining aesthetics and functionality to create inviting and personalized environments.",
    },
    icon: MdDesignServices,
  },
];
