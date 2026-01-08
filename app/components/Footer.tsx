"use client";
import Image from "next/image";
import FlyingInsect from "./FlyingBee";
import { useEffect, useState } from "react";

export default function FooterWithInsect() {
  const [baseY, setBaseY] = useState<number>(9);

  useEffect(() => {
    const updateBaseY = () => {
      setBaseY(window.innerWidth < 768 ? -5 : 9);
    };

    updateBaseY();
    window.addEventListener("resize", updateBaseY);

    return () => window.removeEventListener("resize", updateBaseY);
  }, []);

  return (
    <footer className="relative mt-6 md:mt-20 h-[14vh] md:h-[27vh] flex flex-col max-w-screen overflow-x-clip ">
      <FlyingInsect baseY={baseY} />
      <div className="">
        <Image
          src="/flower.webp"
          alt="Flowers"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </footer>
  );
}
