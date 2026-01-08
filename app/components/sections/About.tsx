import React from "react";
import SectionTitle from "../SectionTitle";
import SectionDetails from "../SectionDetails";
import { LuGraduationCap } from "react-icons/lu";
import Experience from "./skills/Experience";

function About() {
  return (
    <div>
      <SectionTitle title="About me" align="center"/>
      <SectionDetails noMargin align="center" details="I’m Aswathy Raj, a Full Stack Developer with 4+ years of experience in Next.js, React, Node.js, and TypeScript. I build web applications, internal tools, and consumer products, focusing on clean code and practical solutions." />
      {/* <div className="space-y-10">
        <ul className=" flex flex-col items-center justify-center text-center ">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <LuGraduationCap size={24} /> My Education
          </h3>
          <li className="p-4 pl-0 ml-6 text-base">
            <h4 className="font-medium text-lg ">
              Master of Computer Applications with Specilization in AI & ML
              (MCA){" "}
            </h4>
            <p className="text-neutral-500">TKM College of Engineering</p>
            <p className="text-neutral-500">
              APJ Abdul Kalam Kerala Technological University, Kerala
            </p>
            <p className="text-neutral-500">2017 - 2019</p>
          </li>
          <li className="p-4 pt-2 pl-0 ml-6">
            <h4 className="font-medium text-lg">
              Bachelor of Computer Applications (BCA)
            </h4>
            <p className="text-neutral-500">Kerala University</p>
            <p className="text-neutral-500">2013 - 2016</p>
          </li>
        <Experience />
        </ul>
      </div> */}
    </div>
  );
}

export default About;
