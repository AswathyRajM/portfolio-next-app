import React from "react";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
export const experience = [
  {
    company: "Tamcherry Technologies",
    role: "Full Stack Developer",
    duration: "Aug 2024 – Sep 2025",
    location: "Remote",
    tech: "Next.js, React, Node.js, TypeScript, Saleor, Sanity, Graphql",
    description:
      "Led delivery of high-performance, SEO-optimized products and contributed to scalable architectures across multiple production launches.",
  },
  {
    company: "Pricesenz",
    role: "Full Stack Developer",
    duration: "Dec 2023 – Jul 2024",
    location: "India",
    tech: "React, Next.js, NestJS, Tailwind CSS, MySQL",
    description:
      "Owned end-to-end development of the flagship product and internal OKR platform while mentoring engineers and improving system reliability.",
  },
  {
    company: "Tekonika Technologies",
    role: "Full Stack Developer",
    duration: "Feb 2022 – Aug 2023",
    location: "Remote",
    tech: "Next.js, Node.js, Express, MongoDB, Jest",
    description:
      "Built secure, scalable fintech modules with robust authentication, document handling, and test-driven backend systems.",
  },
  {
    company: "Liquet IT Solutions",
    role: "Freelance Software Engineer",
    duration: "Jun 2022 – Jul 2023",
    location: "Canada (Remote)",
    tech: "React, Redux Toolkit, Express, MongoDB",
    description:
      "Developed and deployed enterprise-grade ERMS solutions, improving operational workflows and long-term maintainability.",
  },
  {
    company: "Right IT Solutions",
    role: "Frontend Developer",
    duration: "May 2021 – Dec 2021",
    location: "Dubai",
    tech: "React, JavaScript, CSS",
    description:
      "Delivered optimized, responsive UI components with a strong focus on performance and user experience.",
  },
  {
    company: "Kings Labs",
    role: "Web Developer Intern",
    duration: "Jun 2020 – Aug 2020",
    location: "India",
    tech: "React, Material UI",
    description:
      "Built reusable UI components and gained hands-on experience in full-stack web development.",
  },
];

function ExperienceTimeline() {
  return (
    <section className="relative max-w-6xl mx-auto mt-5">
      <h3 className="text-lg font-semibold flex items-center justify-center gap-2 mb-20">
        <PiSuitcaseSimpleBold size={24} />
        My Experience
      </h3>

      {/* Center line */}
      <div className="absolute left-1/2 top-20 h-full w-0.5 bg-neutral-300 -translate-x-1/2 hidden md:block" />

      <div className="space-y-12">
        {experience.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* LEFT SIDE — details */}
            <div className="md:pl-10 text-left md:text-right">
              <span className="text-sm text-neutral-500">{item.duration}</span>

              <h3 className="text-xl font-medium mt-1">{item.company}</h3>
            </div>

            {/* RIGHT SIDE — company + duration */}
            <div className="md:pr-10 text-left">
              <p className="font-medium">{item.role}</p>

              <p className="text-sm text-neutral-500 mt-1">{item.tech}</p>

              <p className="mt-3 text-neutral-600">{item.description}</p>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 top-4 -translate-x-1/2 hidden md:flex">
              <span className="w-4 h-4 rounded-full bg-yellow border-4 border-white shadow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
