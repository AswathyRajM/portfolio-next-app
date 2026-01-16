"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Marquee = () => {
  const [duration, setDuration] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth < 768) {
        setDuration(12);
      } else {
        setDuration(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="absolute bottom-0 md:-bottom-9">
      <div className="relative w-screen max-w-full overflow-x-hidden h-20 md:h-[25vh] pt-1">
        <motion.div
          className="track"
          variants={{
            animate: {
              x: [0, -1035],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              },
            },
          }}
          animate="animate"
        >
          <h1 className="text-[clamp(3rem,8vw,6rem)] opacity-5 font-extrabold uppercase tracking-wide whitespace-nowrap">
            <span>Let's Work Together. </span>
            <span aria-hidden="true">Let's Work Together. </span>
            <span aria-hidden="true">Let's Work Together. </span>
            <span aria-hidden="true">Let's Work Together. </span>
            <span aria-hidden="true">Let's Work Together. </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
