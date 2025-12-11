"use client";

import ProductSlider from "../../../_components/ProductsSlider";
import SectionHeader from "../../../_components/SectionHeader";

export default function BestSellingProductsSection() {
  //get best selling products from orders table by count somehow and pass it to products slider
  return (
    <section>
      <SectionHeader
        title="Best Selling Products"
        sectionTitle="This month"
        className="mb-10"
      />

      <ProductSlider className="mb-[60px]" products={[]} />
    </section>
  );
}
