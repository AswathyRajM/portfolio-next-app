import React from "react";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import SectionDetails from "../SectionDetails";
export const experience = [
  {
    company: "Tamcherry Technologies",
    role: "Full Stack Developer",
    duration: "Aug 2024 – Sep 2025",
    location: "Remote",
    tech: "Next.js, React, Node.js, TypeScript, Saleor, Sanity, Graphql",
    description:
      "Delivered SEO-focused, high-performance products and supported scalable production architectures.",
  },
  {
    company: "Pricesenz",
    role: "Full Stack Developer",
    duration: "Dec 2023 – Jul 2024",
    location: "India",
    tech: "React, Next.js, NestJS, Tailwind CSS, MySQL",
    description:
      "Led end-to-end development of core products while mentoring engineers and improving reliability.",
  },
  {
    company: "Tekonika Technologies",
    role: "Full Stack Developer",
    duration: "Feb 2022 – Aug 2023",
    location: "Remote",
    tech: "Next.js, Node.js, Express, MongoDB, Jest",
    description:
      "Developed secure fintech modules with authentication, document workflows, and tested backends.",
  },
  {
    company: "Liquet IT Solutions",
    role: "Freelance Software Engineer",
    duration: "Jun 2022 – Jul 2023",
    location: "Canada (Remote)",
    tech: "React, Redux Toolkit, Express, MongoDB",
    description:
      "Built and deployed ERMS solutions that streamlined workflows and improved maintainability.",
  },
  {
    company: "Right IT Solutions",
    role: "Frontend Developer",
    duration: "May 2021 – Dec 2021",
    location: "Dubai",
    tech: "React, JavaScript, CSS",
    description:
      "Implemented responsive UI components with strong performance and usability focus.",
  },
  {
    company: "Kings Labs",
    role: "Web Developer Intern",
    duration: "Jun 2020 – Aug 2020",
    location: "India",
    tech: "React, Material UI",
    description:
      "Created reusable UI components while gaining practical full-stack experience.",
  },
];

function ExperienceTimeline() {
  return (
    <section id="experience" className="mb-8 md:mb-0">
      <SectionDetails
        title="experience"
        details="I’m Aswathy Raj, a Full Stack Developer with 4+ years of experience in Next.js, React, Node.js, and TypeScript. I build web applications, internal tools, and consumer products, focusing on clean code and practical solutions."
      />
      <div className="relative max-w-6xl mx-auto md:mt-2">
        {/* Center line */}
        <div className="absolute left-1/2  h-full w-0.5 bg-neutral-300 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
            >
              {/* LEFT SIDE — details */}
              <div className="md:pl-10 text-center md:text-right">
                <span className="text-sm text-neutral-500">
                  {item.duration}
                </span>

                <h3 className="text-xl font-medium mt-1">{item.company}</h3>
              </div>

              {/* RIGHT SIDE — company + duration */}
              <div className="md:pr-10 text-center md:text-left">
                <p className="font-medium">{item.role}</p>

                <p className="text-sm text-neutral-500 mt-1">{item.tech}</p>

                <p className="mt-3 text-neutral-600 text-sm">{item.description}</p>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 hidden md:flex">
                <span className="w-4 h-4 rounded-full bg-yellow border-4 border-white shadow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
