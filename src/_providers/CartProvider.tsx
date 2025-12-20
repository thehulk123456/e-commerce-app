"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  productsQuantity: number;
  setProductQuantity: Dispatch<SetStateAction<number>>;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [productsQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    async function getCart() {
      const res = await fetch("/api/cart", {
        credentials: "include",
      });

      if (!res.ok) return;

      const data = await res.json();

      setProductQuantity(data.length);
    }

    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        productsQuantity,
        setProductQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}
