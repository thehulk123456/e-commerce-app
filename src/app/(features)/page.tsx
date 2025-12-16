import Hero from "@/_components/Hero";
import HorizontalRule from "@/_components/HorizontalRule";
import TrustBar from "@/_components/TrustBar";
import BestSellingProductsSection from "@/app/(features)/components/BestSellingProductsSection";
import ProductsOnSaleSection from "@/app/(features)/components/ProductsOnSaleSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      <ProductsOnSaleSection />

      <HorizontalRule className="mt-[60px] mb-10 xl:mb-20" />

      <Image
        src="/jbl-speaker-ad.png"
        alt="JBL speaker ad"
        width={1170}
        height={500}
        className="hidden xl:block mb-10 mt-10 xl:mb-[70px] xl:mt-[70px] mx-auto"
      />

      <BestSellingProductsSection />

      <HorizontalRule className="mt-[30px]  xl:mt-[60px] mb-20" />

      <TrustBar className="mb-15 xl:[mb-30] flex-col gap-8 xl:flex-row xl:gap-0" />
    </div>
  );
}
