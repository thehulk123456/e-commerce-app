"use client";

import ArrowLeftIcon from "@/_icons/ArrowLeftIcon";
import ArrowRightIcon from "@/_icons/ArrowRightIcon";
import { Product } from "@/_types/products";
import { useRef } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";

interface ProductSliderProps {
  products: Product[];
  className?: string;
}

const slideBy = 400;

const arrowContainerClasses =
  "flex items-center bg-second-2 w-11 h-11 rounded-full justify-center cursor-pointer";

export default function ProductSlider({
  className,
  products,
}: ProductSliderProps) {
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

    slider.current.scrollTo({
      left: scrollLeft + slideBy,
      behavior: "smooth",
    });
  };

  return (
    <div className={className ?? ""}>
      <div className="relative">
        <div ref={slider} className="flex gap-10 w-full overflow-hidden mb-12">
          {products.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
        </div>

        <div className={`${arrowContainerClasses} absolute -left-14 top-26`}>
          <ArrowLeftIcon onClick={goLeft} />
        </div>

        <div className={`${arrowContainerClasses} absolute -right-14 top-26`}>
          <ArrowRightIcon onClick={goRight} />
        </div>
      </div>
      <Button
        text="View All Products"
        type="button"
        variant="primary"
        className="mx-auto"
      />
    </div>
  );
}
