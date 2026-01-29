import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ExperienceTimeline from "./components/sections/Experience";
import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aswathyraj.vercel.app"),

  title: {
    default: "Aswathy Raj | Full Stack Developer",
    template: "%s | Aswathy Raj",
  },

  description:
    "Full Stack Developer with 4+ years of experience building scalable web applications using Next.js, React, Node.js, and TypeScript.",

  keywords: [
    "Aswathy Raj",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Full Stack Developer Portfolio",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Aswathy Raj" }],
  creator: "Aswathy Raj",

  openGraph: {
    title: "Aswathy Raj | Full Stack Developer",
    description:
      "Portfolio of Aswathy Raj, a Full Stack Developer specializing in Next.js, React, Node.js, and TypeScript.",
    url: "https://aswathyraj.vercel.app",
    siteName: "Aswathy Raj Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aswathy Raj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswathy Raj | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and Node.js.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="w-full max-w-7xl mx-auto relative px-4 md:px-0 flex flex-col gap-10 md:gap-20">
        <section className="lg:h-screen xl:h-full">
          <Hero />
        </section>
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}
