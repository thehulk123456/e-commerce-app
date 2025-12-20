"use client";

import {
  addProductToFavorites,
  removeProductFromFavorites,
} from "@/_actions/favoriteProducts";
import { Product } from "@/_types/products";
import { createContext, useEffect, useState } from "react";

type FavoriteProductsContextType = {
  favoriteProducts: Product[];
  toggleFavoriteProduct: (toggleProduct: Product) => void;
};

export const FavoriteProductsContext =
  createContext<FavoriteProductsContextType | null>(null);

export function FavoriteProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getFavoriteProducts() {
      const res = await fetch("/api/favorites", {
        credentials: "include",
      });
      if (!res.ok) return;
      const data = await res.json();
      setFavoriteProducts(data);
    }
    getFavoriteProducts();
  }, []);

  const toggleFavoriteProduct = async (toggleProduct: Product) => {
    const isProductInFavorites = favoriteProducts.find(
      (product) => product.productId === toggleProduct.productId
    );

    if (isProductInFavorites) {
      await removeProductFromFavorites(toggleProduct.productId);
      setFavoriteProducts((prevProducts) =>
        prevProducts.filter(
          (product) => product.productId !== toggleProduct.productId
        )
      );
    } else {
      await addProductToFavorites(toggleProduct.productId);
      setFavoriteProducts((prevProducts) => [...prevProducts, toggleProduct]);
    }
  };

  return (
    <FavoriteProductsContext.Provider
      value={{
        favoriteProducts,
        toggleFavoriteProduct,
      }}>
      {children}
    </FavoriteProductsContext.Provider>
  );
}
