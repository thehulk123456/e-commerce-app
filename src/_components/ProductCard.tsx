"use client";

import { useState } from "react";
import StarRating from "./StarRating";

interface ProductCardProps {
  title: string;
}

export default function ProductCard({ title }: ProductCardProps) {
  const [hover, setHover] = useState(false);

  const navigateToProduct = (id: string) => {
    console.log("navigate to product with id");
  };

  // TODO
  // Add product interface and then navigateToProduct calls real product id and navigates to it
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => navigateToProduct("213213")}>
        <div
          className="flex justify-center items-center w-[270px] h-[250px] bg-second-2 rounded-sm mb-4 relative "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <img
            className="w-full max-w-3/5"
            src="/joystick.png"
            alt="Joystick"
            loading="lazy"
          />

          {hover ? (
            <button className="w-full bg-text-2 text-primary-1 text-center py-2 absolute bottom-0">
              Add to cart
            </button>
          ) : null}
        </div>
        <div className="mb-2 font-medium">{title}</div>
      </div>

      <div className="flex gap-3 items-center mb-2 ">
        <div className="font-medium text-button-2">$120</div>
        <div className="font-medium opacity-50 line-through">$160</div>
      </div>

      <StarRating rating={1} showNumberOfReviews={false} />
    </div>
  );
}
