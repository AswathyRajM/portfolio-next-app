import SectionDetails from "../SectionDetails";
import { LuGraduationCap } from "react-icons/lu";
import { BsVectorPen } from "react-icons/bs";
import Link from "next/link";
import { WiDirectionRight } from "react-icons/wi";
function About() {
  return (
    <section
      id="about"
      className="md:mt-10 bg-[#F1EDE4] grid grid-cols-1 md:grid-cols-2 md:gap-6"
    >
      <div className=" h-full xl:min-h-full flex">
        <SectionDetails
          align="left"
          title="About me"
          details="I’m Aswathy Raj, a Full Stack Developer based in Ernakulam, Kerala, India, with 4+ years of experience in Next.js, React, Node.js, and TypeScript. I build web applications, internal tools, and consumer products, focusing on clean code and practical solutions."
        />
      </div>
      <div className="md:space-y-10">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex w-fit flex-col box-border">
            <h3 className="flex items-center gap-2 p-2 text-lg font-semibold">
              <LuGraduationCap size={24} />
              My Education
            </h3>

            <div className="border-t p-4 text-base">
              <h4 className="text-lg font-medium">
                Master of Computer Applications with Specilization in AI & ML
                (MCA)
              </h4>

              <p className="text-neutral-500">TKM College of Engineering</p>
              <p className="text-neutral-500">
                APJ Abdul Kalam Kerala Technological University, Kerala
              </p>
              <p className="text-neutral-500">2017 - 2019</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-10">
          <div className="flex w-fit flex-col box-border">
            <h3 className="flex items-center gap-2 p-2 text-lg font-semibold">
              <BsVectorPen size={24} />
              Writing
            </h3>

            <div className="border-t p-4 text-base">
              <p>
                I occasionally write about web development, system design, and
                lessons from production.
              </p>
              <div className="flex items-center justify-center w-fit">
                <Link
                  href="https://medium.com/@aswathyraj"
                  target="_blank"
                  className="font-xl font-semibold underline hover:text-primary"
                >
                  Read my articles
                </Link>
                <WiDirectionRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
