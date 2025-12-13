"use client";

import { Product } from "@/_types/products";
import { useDebounce } from "@/_utils/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function SearchProducts() {
  const router = useRouter();

  const [isFocus, setIsFocus] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const [products, setProducts] = useState<Product[]>([]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setProducts([]);
    }

    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      async function fetchProducts() {
        const response = await fetch(
          `/api/products?search=${encodeURIComponent(debouncedSearchTerm)}`
        );

        const data = await response.json();

        setProducts(data);
      }

      fetchProducts();
    }
  }, [debouncedSearchTerm]);

  const onProductClick = (product: Product) => {
    router.push(`/products/${product.productId}`);
  };

  return (
    <div
      className="relative"
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsFocus(false);
        }
      }}>
      <Search onSearchChange={onSearchChange} />

      {isFocus ? (
        <div className="bg-primary-1 w-[400px] h-[400px] absolute left-0 top-9 border border-border z-10 rounded-sm overflow-y-auto">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="flex items-center gap-3 text-text-2 px-2 py-1 my-1 cursor-pointer hover:bg-[rgba(0,0,0,0.1)]"
                key={product.productId}
                onMouseDown={(e) => {
                  e.preventDefault(); // keep focus from shifting / dropdown from closing first
                  onProductClick(product);
                }}>
                <img
                  className="w-[20px]"
                  src="/joystick.png"
                  alt="Joystick"
                  loading="lazy"
                />

                <div> {product.name}</div>
              </div>
            ))
          ) : (
            <div className=" text-text-2 px-2 py-1 my-1">No products found</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
