"use client";

import Button from "./Button";
import ProductSlider from "./ProductsSlider";
import SectionHeader from "./SectionHeader";

export default function ProductsOnSaleSection() {
  return (
    <div>
      <div>
        <SectionHeader
          title="Flash sales"
          sectionTitle="Today's"
          className="mb-10"
          saleEndDate={new Date("2025-12-12")}
        />
      </div>

      <ProductSlider className="mb-[60px]" />

      <Button
        text="View All Products"
        type="button"
        variant="primary"
        className="mx-auto"
      />
    </div>
  );
}
