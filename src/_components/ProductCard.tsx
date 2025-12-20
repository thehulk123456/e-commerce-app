"use client";

import { addProductToCart } from "@/_actions/cart";
import { useCart } from "@/_hooks/useCart";
import { Product } from "@/_types/products";
import { getFormattedPrice } from "@/_utils/currency";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hover, setHover] = useState(false);

  const [addToCartDisabled, setAddToCartDisabled] = useState(false);

  const { setProductQuantity } = useCart();

  const router = useRouter();

  const navigateToProduct = () => {
    router.push(`/products/${product.productId}`);
  };

  const addToCart = async () => {
    if (addToCartDisabled) return;

    setAddToCartDisabled(true);

    try {
      await addProductToCart(product.productId, 1);
      setProductQuantity((quantity: number) => quantity + 1);
    } finally {
      setAddToCartDisabled(false);
    }
  };

  return (
    <div>
      <div className="cursor-pointer">
        <div
          onClick={() => navigateToProduct()}
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
            <button
              disabled={addToCartDisabled}
              className="w-full bg-text-2 text-primary-1 text-center py-2 absolute bottom-0 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                addToCart();
              }}>
              Add to cart
            </button>
          ) : null}
        </div>
        <div className="mb-2 font-medium">{product.name}</div>
      </div>

      <div className="flex gap-3 items-center mb-2 ">
        {product.onSale && product.priceSale ? (
          <div className="font-medium text-button-2">
            {getFormattedPrice(product.priceSale)}
          </div>
        ) : null}

        <div className="font-medium opacity-50 line-through">
          {getFormattedPrice(product.priceRegular)}
        </div>
      </div>

      <StarRating rating={1} showNumberOfReviews={false} />
    </div>
  );
}
