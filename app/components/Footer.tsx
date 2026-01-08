// components/FooterWithInsect.tsx
"use client";

import FlyingInsect from "./FlyingBee";

export default function FooterWithInsect() {
  return (
    <footer className="relative h-[20vh] flex flex-col max-w-screen overflow-x-clip ">
      <FlyingInsect />
      <div className="footer-image-container">
        <img src="/flower.png" alt="Flowers" className="w-full" />
      </div>
    </footer>
  );
}
