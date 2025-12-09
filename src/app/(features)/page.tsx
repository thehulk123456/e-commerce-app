import CategoriesSection from "@/_components/CategoriesSection";
import Hero from "@/_components/Hero";
import ProductsOnSaleSection from "@/_components/ProductsOnSaleSection";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}

      <ProductsOnSaleSection />

      <CategoriesSection className="mb-10" />
    </div>
  );
}
