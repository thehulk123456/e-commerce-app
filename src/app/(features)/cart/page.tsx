"use client";

import { addProductToCart } from "@/_actions/cart";
import Button from "@/_components/Button";
import HorizontalRule from "@/_components/HorizontalRule";
import { MAX_PRODUCT_QUANTITY } from "@/_const/constants";
import { useCart } from "@/_hooks/useCart";
import { CartItem } from "@/_types/cart";
import { getFormattedPrice } from "@/_utils/currency";
import { useEffect, useState } from "react";

const cartRowClasses =
  "bg-primary-1 rounded-sm shadow-sm px-10 py-6 w-full flex justify-between mb-10 items-center";

const cartItemClasses = "flex-1";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { setProductQuantity } = useCart();

  useEffect(() => {
    async function getCart() {
      const res = await fetch("/api/cart", {
        credentials: "include",
      });

      if (!res.ok) return;

      const data = await res.json();

      setCartItems(data);
    }

    getCart();
  }, []);

  const increaseQuantity = async (productId: number) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.productId !== productId) return cartItem;

      return {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    });

    await addProductToCart(productId, 1);

    setCartItems(newCartItems);

    setProductQuantity(newCartItems.filter((item) => item.quantity > 0).length);
  };

  const decreaseQuantity = async (productId: number) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.productId !== productId) return cartItem;

      return {
        ...cartItem,
        quantity: Math.max(cartItem.quantity - 1, 0),
      };
    });

    await addProductToCart(productId, -1);

    setCartItems(newCartItems);

    setProductQuantity(newCartItems.filter((item) => item.quantity > 0).length);
  };

  const calculateTotal = () => {
    let totalPrice = 0;

    cartItems.forEach((cartItem) => {
      if (cartItem.quantity > 0) {
        const price =
          cartItem.onSale && cartItem.priceSale
            ? cartItem.priceSale
            : cartItem.priceRegular;

        totalPrice += price * cartItem.quantity;
      }
    });

    return getFormattedPrice(totalPrice);
  };

  return (
    <div className="w-full py-10">
      <div className={cartRowClasses}>
        <div className={`${cartItemClasses}`}>Product</div>
        <div className={`${cartItemClasses} text-center`}>Price</div>
        <div className={`${cartItemClasses} text-right`}>Quantity</div>
      </div>

      {cartItems.map((cartItem) => (
        <div key={cartItem.cartItemId} className={cartRowClasses}>
          <div className={`${cartItemClasses}`}>{cartItem.name} </div>
          <div className={`${cartItemClasses} text-center`}>
            {cartItem.onSale && cartItem.priceSale
              ? getFormattedPrice(cartItem.priceSale)
              : getFormattedPrice(cartItem.priceRegular)}
          </div>

          <div className="border border-border flex font-medium w-40 rounded-sm">
            <div
              className="px-3 py-1 border-r border-r-border hover:bg-button-2 hover:text-primary-1 cursor-pointer"
              onClick={() => {
                if (cartItem.quantity === 0) return;
                decreaseQuantity(cartItem.productId);
              }}>
              -
            </div>
            <div className="px-2 py-1 grow text-center">
              {cartItem.quantity}
            </div>
            <div
              className="px-3 py-1 border-l border-l-border hover:bg-button-2 hover:text-primary-1 cursor-pointer"
              onClick={() => {
                if (cartItem.quantity + 1 >= MAX_PRODUCT_QUANTITY) return;
                increaseQuantity(cartItem.productId);
              }}>
              +
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-end">
        <div className="rounded-sm border-[1.5px] px-6 py-8 w-[470px]">
          <div className="text-xl font-medium mb-6">Cart Total</div>

          <div className="flex justify-between mb-4">
            <div>Total:</div>
            <div>{calculateTotal()}</div>
          </div>
          <HorizontalRule className="mb-4" />

          <div className="flex justify-between mb-4">
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <HorizontalRule className="mb-6" />

          <Button
            text="Proceed to checkout"
            type="button"
            variant="primary"
            className="block justify-self-center"
          />
        </div>
      </div>
    </div>
  );
}
