"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

type CarouselProps = {
  images: string[];
  autoSlideInterval?: number;
};

export default function ImageCarousel({
  images,
  autoSlideInterval = 3500,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlideInterval]);

  return (
    <div className="w-full">
      <div className="relative w-full h-50 overflow-hidden ">
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-full shrink-0">
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Prev */}
        <button onClick={prevSlide} className="prev-next-btn left-3">
          <RiArrowLeftSLine />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="prev-next-btn right-3 rotate-180 "
        >
          <RiArrowLeftSLine />
        </button>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 transition ${
              current === index ? "bg-primary" : "bg-dark-brown/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
