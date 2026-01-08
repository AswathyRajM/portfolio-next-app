import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl py-0 md:py-10 lg:py-20">
      <div className="grid items-center gap-6 md:gap-12 md:grid-cols-2 pt-12">
        {/* Left Side - Text */}
        <div className="pt-8 md:pt-16">
          <h1 className="text-lg md:text-2xl">Hello, I’m Aswathy,</h1>

          <div className="text-6xl font-extrabold md:text-[100px] mb-1">
            <span className="block">Fullstack</span>
            <span className="block">Developer</span>
          </div>

          <p className="text-md md:text-[28px] mb-5 md:mb-9">Based in India.</p>

          <button className="animated-btn">Download Resume</button>
        </div>

        <div className="relative w-full aspect-square md:aspect-auto md:h-full hover:scale-105">
          <Image
            src="/Image.png"
            alt="Aswathy Raj"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
