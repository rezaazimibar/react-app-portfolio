import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
} from "react-icons/bi";

export const devSkills = {
  htmlSkill: {
    id: 0,
    name: "HTML",
    icon: <AiFillHtml5 />,
    color: "primary",
  },
  cssSkill: {
    id: 1,
    name: "CSS",
    icon: <BiLogoCss3 />,
    color: "info",
  },
  jsSkill: {
    id: 2,
    name: "JS",
    icon: <BiLogoJavascript />,
    color: "warning",
  },
  reactSkill: {
    id: 3,
    name: "REACT",
    icon: <BiLogoReact />,
    color: "primary",
  },
  nodeSkill: {
    id: 4,
    name: "NODEJS",
    icon: <BiLogoNodejs />,
    color: "success",
  },
};
