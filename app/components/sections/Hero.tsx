import Link from "next/link";
import { RiDownloadLine } from "react-icons/ri";
import Marquee from "../Marquee";

export default function Hero() {
  return (
    <section className="mx-auto h-[70vh] overflow-hidden md:h-[95vh] max-w-7xl flex items-center flex-col justify-evenly relative">
      <div className="flex items-center justify-center text-center">
        <div className="pt-8 md:pt-16 space-y-4">
          <div className="text-5xl font-extrabold md:text-7xl mb-1">
            Fullstack Developer
          </div>
          <h1 className="text-md md:text-[28px] mb-5 md:mb-9">
            <span className="block">Hi, I’m Aswathy</span>
            <span className="block">
              4+ years experience in building production-ready web applications.
            </span>
          </h1>
          <Link
            href="/Aswathy_Raj_4Senior_Fullstack_Developer.pdf"
            download
            target="_blank"
            className="hero-btn group relative flex items-center justify-center w-fit
             px-6 py-3 overflow-hidden
             transition-all duration-300 ease-out
             hover:-translate-y-0.5 mx-auto"
          >
            <span
              className="transition-transform duration-300
               group-hover:-translate-x-3"
            >
              Download Resume
            </span>

            <RiDownloadLine
              className="absolute right-3 opacity-0 translate-x-4
               transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
