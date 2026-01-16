import Link from "next/link";
import SectionDetails from "../SectionDetails";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string;
  image: string;
  github?: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Bridor – Premium French Bakery Supplier",
    description:
      "A responsive website for a premium French bakery supplier, presenting product ranges, catalogs, and bakery solutions with clear, structured navigation.",
    tech: "Next.js, TypeScript, Tailwind CSS, Saleor CMS, Graphql",
    image: "/projects/bridor.webp",
    live: "https://www.bridor.sa/en-SA",
  },
  {
    title: "Movie Browser – Infinite Scroll & Search",
    description:
      "React-based movie browser with infinite scrolling and live search functionality. Built with efficient state management and API integration for smooth, responsive user experience.",
    tech: "React, Material UI, Redux Toolkit, Axios, Infinite Scroll",
    image: "/projects/movie.webp",
    github: "https://github.com/username/fintech-app",
    live: "https://movie-browser-ashy.vercel.app/",
  },
  {
    title: "Pizzateria – Online Pizza Ordering App",
    description:
      "A full-stack pizza ordering application with cart, a dynamic menu, designed to deliver a smooth and responsive ordering experience.",
    tech: "Next.js, React, Supabase, Zustand, Framer Motion, Lodash Throttle, React Icons",
    image: "/projects/pizzateria.webp",
    github: "https://github.com/AswathyRajM/pizzateria-nextjs",
    live: "https://pizzateria-app.vercel.app/",
  },
  // {
  //   title: "Media Player – Audio & Video Controls",
  //   description:
  //     "React-based media player with full audio and video control. Includes play, pause, stop, and restart functionality, built with clean, modular state management for reliable performance.",
  //   tech: "React.Js, CSS3",
  //   image: "/projects/bridor.webp",
  //   live: "https://audio-player-iota.vercel.app",
  //   github: "https://github.com/AswathyRajM/audio-player",
  // },
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionDetails
        title="Projects"
        details="Most of my professional work was built for internal systems or client-owned platforms and isn’t publicly accessible."
      />

      {/* <div className="ml-auto w-fit p-1 link-btn mb-5">
        <Link href="/projects" target="_blank" className="font-xl">
          See All
        </Link>
        <WiDirectionRight size={24} />
      </div> */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden h-fit bg-[#F5F1E8] transition flex flex-col border"
          >
            <div className="relative w-full h-[30vh] shrink-0">
              <Image
                src={project.image}
                alt={`Project image ${project.title}`}
                fill
                className="object-cover"
              />
            </div>

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
