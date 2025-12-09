"use client";

import ArrowLeftIcon from "@/_icons/ArrowLeftIcon";
import ArrowRightIcon from "@/_icons/ArrowRightIcon";
import { useRef } from "react";
import ProductCard from "./ProductCard";

interface ProductSliderProps {
  className?: string;
}

const slideBy = 400;

const arrowContainerClasses =
  "flex items-center bg-second-2 w-11 h-11 rounded-full justify-center cursor-pointer";

export default function ProductSlider({ className }: ProductSliderProps) {
  const slider = useRef<HTMLDivElement>(null);

  const goLeft = () => {
    if (!slider.current) return;

    const { scrollLeft } = slider.current;

    slider.current.scrollTo({
      left: scrollLeft - slideBy,
      behavior: "smooth",
    });
  };

  const goRight = () => {
    if (!slider.current) return;

    const { scrollLeft } = slider.current;

    console.log("SCROLL LEFT", scrollLeft);

    slider.current.scrollTo({
      left: scrollLeft + slideBy,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className ?? ""}`}>
      <div ref={slider} className="flex gap-10 w-full overflow-hidden mb-1">
        <ProductCard title="Aurora Lamp" />
        <ProductCard title="Nova Headphones" />
        <ProductCard title="Pulse Smartwatch" />
        <ProductCard title="Zen Desk Chair" />
        <ProductCard title="Orbit Blender" />
        <ProductCard title="Echo Wireless Speaker" />
        <ProductCard title="Luna Coffee Maker" />
        <ProductCard title="Vertex Backpack" />
        <ProductCard title="Aether Laptop Stand" />
        <ProductCard title="Comet Gaming Mouse" />
        <ProductCard title="Nimbus Air Purifier" />
        <ProductCard title="Halo LED Strip" />
        <ProductCard title="Drift Travel Mug" />
        <ProductCard title="Solace Weighted Blanket" />
      </div>

      <div className={`${arrowContainerClasses} absolute -left-14 top-26`}>
        <ArrowLeftIcon onClick={goLeft} />
      </div>

      <div className={`${arrowContainerClasses} absolute -right-14 top-26`}>
        <ArrowRightIcon onClick={goRight} />
      </div>
    </div>
  );
}
