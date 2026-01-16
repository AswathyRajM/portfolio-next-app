import SectionDetails from "../SectionDetails";
import { LuGraduationCap } from "react-icons/lu";

function About() {
  return (
    <section id="about">
      <SectionDetails
        noMargin
        title="About me"
        details="I’m Aswathy Raj, a Full Stack Developer with 4+ years of experience in Next.js, React, Node.js, and TypeScript. I build web applications, internal tools, and consumer products, focusing on clean code and practical solutions."
      />
      <div className="space-y-10 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center text-center bg-[#EBE8DF] w-fit box-border">
          <h3 className="text-lg font-semibold flex items-center gap-2 p-2">
            <LuGraduationCap size={24} /> My Education
          </h3>
          <div className="text-base border-t p-4">
            <h4 className="font-medium text-lg  ">
              Master of Computer Applications with Specilization in AI & ML
              (MCA){" "}
            </h4>
            <p className="text-neutral-500">TKM College of Engineering</p>
            <p className="text-neutral-500">
              APJ Abdul Kalam Kerala Technological University, Kerala
            </p>
            <p className="text-neutral-500">2017 - 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
