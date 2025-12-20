import { FavoriteProductsContext } from "@/_providers/FavoriteProductsProvider";
import { useContext } from "react";

export function useFavorites() {
  const ctx = useContext(FavoriteProductsContext);
  if (!ctx) {
    throw new Error(
      "useFavorites must be used within a FavoriteProductsProvider"
    );
  }
  return ctx;
}
