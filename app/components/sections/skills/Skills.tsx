import SectionTitle from "../../SectionTitle";
import SectionDetails from "../../SectionDetails";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
};

const FRONTEND_SKILLS: Skill[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: GrMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: DiRedis },
  { name: "GraphQL", icon: SiGraphql },
];

const MISC_SKILLS: Skill[] = [{ name: "Git", icon: SiGit }];

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="mb-8 w-full md:w-[50%]">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-3 md:gap-6">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 border rounded-sm px-2 py-1 transition-transform hover:scale-105"
          >
            <skill.icon size={24} />
            <p className="text-base">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className=" h-full xl:min-h-full">
      <SectionTitle title="Skills" />
      <SectionDetails details="Technologies used to build and ship production systems." />

      <div className="mt-10 flex flex-wrap">
        <SkillGroup title="Front End" skills={FRONTEND_SKILLS} />
        <SkillGroup title="Back End" skills={BACKEND_SKILLS} />
        <SkillGroup title="Miscellaneous" skills={MISC_SKILLS} />
      </div>
    </section>
  );
}
