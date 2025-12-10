"use client";

import Button from "../../../_components/Button";
import ProductSlider from "../../../_components/ProductsSlider";
import SectionHeader from "../../../_components/SectionHeader";

export default function ProductsOnSaleSection() {
  return (
    <section>
      <SectionHeader
        title="Flash sales"
        sectionTitle="Today's"
        className="mb-10"
        saleEndDate={new Date("2025-12-12")}
      />

      <ProductSlider className="mb-[60px]" />

      <Button
        text="View All Products"
        type="button"
        variant="primary"
        className="mx-auto"
      />
    </section>
  );
}
