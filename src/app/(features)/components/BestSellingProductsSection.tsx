"use client";

import Button from "../../../_components/Button";
import ProductSlider from "../../../_components/ProductsSlider";
import SectionHeader from "../../../_components/SectionHeader";

export default function BestSellingProductsSection() {
  return (
    <section>
      <SectionHeader
        title="Best Selling Products"
        sectionTitle="This month"
        className="mb-10"
      />

      <ProductSlider className="mb-[60px]" />

      <Button
        text="View All"
        type="button"
        variant="primary"
        className="mx-auto"
      />
    </section>
  );
}
