"use client";

import Button from "@/_components/Button";
import HorizontalRule from "@/_components/HorizontalRule";
import { MAX_PRODUCT_QUANTITY } from "@/_const/constants";
import DeliveryIconBlack from "@/_icons/DeliveryIconBlack";
import HeartIcon from "@/_icons/HeartIcon";
import ReturnIcon from "@/_icons/ReturnIcon";
import { Product } from "@/_types/products";
import { getFormattedPrice } from "@/_utils/currency";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col items-center lg:flex-row gap-[70px]">
      <div className="w-full max-w-[500px] h-[600px] bg-second-2 rounded-sm flex items-center justify-center">
        <img
          className="w-full max-w-4/5"
          src="/gamepad-large.png"
          alt="Joystick"
          loading="lazy"
        />
      </div>
      <div>
        <div className="text-text-2 font-semibold text-2xl mb-4">
          {product.name}
        </div>

        <div className="flex gap-3 items-center mb-6">
          {product.onSale && product.priceSale ? (
            <div className="font-medium text-button-2">
              {getFormattedPrice(product.priceSale)}
            </div>
          ) : null}

          <div className="font-medium opacity-50 line-through">
            {getFormattedPrice(product.priceRegular)}
          </div>
        </div>

        <div className="text-sm font-normal mb-6">{product.description}</div>

        <HorizontalRule className="mb-6" />

        <div className="flex items-center gap-4 mb-10">
          <div className="border border-border flex text-xl font-medium w-40 rounded-sm">
            <div
              className="px-3 py-3 border-r border-r-border hover:bg-button-2 hover:text-primary-1 cursor-pointer"
              onClick={() => {
                setQuantity((prev) => (prev - 1 > 0 ? prev - 1 : 1));
              }}>
              -
            </div>
            <div className="px-2 py-3 grow text-center">{quantity}</div>
            <div
              className="px-3 py-3 border-l border-l-border hover:bg-button-2 hover:text-primary-1 cursor-pointer"
              onClick={() => {
                setQuantity((prev) =>
                  prev + 1 <= MAX_PRODUCT_QUANTITY ? prev + 1 : prev
                );
              }}>
              +
            </div>
          </div>
          <Button
            type="button"
            text="Buy now"
            variant="primary"
            className="py-2.5"
          />

          <div className="border border-border rounded-sm h-14 w-14 flex items-center justify-center cursor-pointer">
            <HeartIcon />
          </div>
        </div>

        <div className="rounded-sm border border-border max-w-[400px]">
          <div className="flex items-center gap-4 p-4 border-b border-b-border">
            <DeliveryIconBlack />
            <div className="font-medium">
              <div className="mb-2">Free delivery</div>
              <div className="underline text-xs ">
                Enter your postal code for Delivery Availability
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4">
            <ReturnIcon />
            <div className="font-medium">
              <div className="mb-2">Return delivery</div>
              <div className="underline text-xs ">
                Free 30 Days Delivery Returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
