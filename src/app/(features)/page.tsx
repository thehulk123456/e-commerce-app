import Hero from "@/_components/Hero";
import HorizontalRule from "@/_components/HorizontalRule";
import TrustBar from "@/_components/TrustBar";
import BestSellingProductsSection from "@/app/(features)/components/BestSellingProductsSection";
import CategoriesSection from "@/app/(features)/components/CategoriesSection";
import ProductsOnSaleSection from "@/app/(features)/components/ProductsOnSaleSection";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}

      <ProductsOnSaleSection />

      <HorizontalRule className="mt-[60px] mb-20" />

      <CategoriesSection className="mb-10" />

      <HorizontalRule className="my-[70px]" />

      <BestSellingProductsSection />

      <HorizontalRule className="mt-[60px] mb-20" />

      <TrustBar className="mb-10" />
    </div>
  );
}
