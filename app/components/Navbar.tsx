import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full fixed left-0 right-0 opacity-100 pt-4 pb-4 md:pt-7 md:pb-7 backdrop-blur-lg z-50">
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

        {/* Right - Social Icons */}
        <div className="flex items-center gap-7">
          <a
            href="https://github.com/aswathyrajm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aswathyrajm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:aswathyraj767@gmail.com"
            className="hover:text-gray-600 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
