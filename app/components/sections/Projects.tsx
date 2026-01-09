import Link from "next/link";
import SectionDetails from "../SectionDetails";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCarousel from "../ImageCarousel";

type Project = {
  title: string;
  description: string;
  tech: string;
  image: string[];
  github?: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Bridor – Premium French Bakery Supplier",
    description:
      "A responsive website for a premium French bakery supplier, presenting product ranges, catalogs, and bakery solutions with clear, structured navigation.",
    tech: "Next.js, TypeScript, Tailwind CSS, Saleor CMS, Graphql",
    image: [
      "/projects/bridor1.webp",
      "/projects/bridor2.webp",
      "/projects/bridor3.webp",
    ],
    live: "https://www.bridor.sa/en-SA",
  },
  {
    title: "Fintech Web Platform",
    description:
      "Secure fintech platform with authentication, document uploads, and APIs.",
    tech: "React, Node.js, Express, MongoDB",
    image: [
      "/projects/bridor1.webp",
      "/projects/bridor2.webp",
      "/projects/bridor3.webp",
    ],
    github: "https://github.com/username/fintech-app",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, experience, and animations.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    image: [
      "/projects/bridor1.webp",
      "/projects/bridor2.webp",
      "/projects/bridor3.webp",
    ],
    live: "https://yourname.dev",
  },
];

export default function Projects() {
  return (
    <section>
      <SectionDetails
        title="Projects"
        details="A selection of projects I’ve built and shipped."
      />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <ProjectCarousel images={project.image} />

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm opacity-80">{project.description}</p>
              <p className="text-sm font-medium">{project.tech}</p>

              <div className="flex gap-4 pt-2 items-center justify-end">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="link-btn"
                  >
                    <FaGithub /> GitHub
                  </Link>
                )}

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="link-btn"
                  >
                    <FaExternalLinkAlt /> Live
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
