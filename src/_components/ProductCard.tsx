"use client";

import { useState } from "react";

export default function ProductCard() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="flex justify-center items-center w-[270px] h-[250px] bg-second-2 rounded-sm mb-4 relative">
        <img
          className="w-full max-w-3/5"
          src="/joystick.png"
          alt="Joystick"
          loading="lazy"
        />

        {hover ? (
          <button className="w-full bg-text-2 text-primary-1 text-center py-2 absolute bottom-0 cursor-pointer">
            Add to cart
          </button>
        ) : null}
      </div>

      <div className="mb-2 font-medium">HAVIT HV-G92 Gamepad</div>
      <div className="flex gap-3 items-center mb-2 ">
        <div className="font-medium text-button-2">$120</div>
        <div className="font-medium opacity-50 line-through">$160</div>
      </div>
    </div>
  );
}
