"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSlider() {
  const dots = Array(5).fill(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const onDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-[892px] h-[344px] pt-10 relative">
      <Image
        src="/iphone-featured.png"
        width={892}
        height={344}
        alt="Iphone featured"
      />

      <div className="flex gap-3 absolute -bottom-8 left-1/2 -translate-x-1/2">
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`rounded-full  w-3 h-3 cursor-pointer ${
              activeIndex === index
                ? "bg-button-2 border-2 border-primary-1"
                : "bg-[#7F7F7F]"
            } `}
            onClick={() => {
              onDotClick(index);
            }}></div>
        ))}
      </div>
    </div>
  );
}
