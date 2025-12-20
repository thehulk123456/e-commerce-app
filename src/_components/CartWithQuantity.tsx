"use client";

import { useCart } from "@/_hooks/useCart";
import CartIcon from "@/_icons/CartIcon";

export default function CartWithQuantity() {
  const { productsQuantity } = useCart();

  return (
    <div className="relative">
      {productsQuantity ? (
        <div className="absolute top-0 right-0 text-primary-1 font-bold w-4 h-4 rounded-full bg-button-2 flex justify-center items-center  text-xs">
          {productsQuantity}
        </div>
      ) : null}

      <CartIcon className="cursor-pointer" />
    </div>
  );
}
