import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full fixed left-0 right-0 opacity-100 pt-4 pb-4 md:pt-7 md:pb-7 z-50 bg-bg ">
      <div className="mx-auto px-4 md:px-0 flex max-w-7xl items-center justify-between">
        {/* Left - Logo / Name */}
        <div className="text-2xl font-semibold tracking-tight">
          <Link href="/">Aswathy Raj</Link>
        </div>

        {/* Middle - Nav Links */}
        <div className="hidden md:flex items-center gap-x-7 text-[18px] ">
          <Link href="#about" className="link-hover">
            about
          </Link>
          <Link href="#experience" className="link-hover">
            experience
          </Link>
          <Link href="#skills" className="link-hover">
            skills
          </Link>
          <Link href="#projects" className="link-hover">
            projects
          </Link>
          <Link href="#contact" className="link-hover">
            contact
          </Link>
        </div>
        <div className="flex items-center gap-7">
          {/* GitHub */}
          <div className="relative group">
            <Link
              href="https://github.com/aswathyrajm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub size={20} />
            </Link>

            <span className="border pointer-events-none absolute left-1/2 -translate-x-1/2 top-9.5 whitespace-nowrap px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <Link
              href="https://linkedin.com/in/aswathyrajm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin size={20} />
            </Link>

            <span className="border pointer-events-none absolute left-1/2 -translate-x-1/2 top-9.5 whitespace-nowrap px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
              LinkedIn
            </span>
          </div>

          {/* Medium */}
          <div className="relative group">
            <Link
              href="https://medium.com/@aswathyraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaMedium size={20} />
            </Link>

            <span className="border pointer-events-none absolute left-1/2 -translate-x-1/2 top-9.5 whitespace-nowrap px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
              Medium
            </span>
          </div>

          {/* Email */}
          <div className="relative group">
            <Link
              href="mailto:aswathyraj767@gmail.com"
              className="hover:text-primary transition"
            >
              <FaEnvelope size={20} />
            </Link>

            <span className="border pointer-events-none absolute left-1/2 -translate-x-1/2 top-9.5 whitespace-nowrap px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
              Email
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
