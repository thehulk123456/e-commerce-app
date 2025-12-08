import Hero from "@/_components/Hero";
import PaginationArrows from "@/_components/PaginationArrows";
import SectionHeader from "@/_components/SectionHeader";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}

      <SectionHeader
        title="Flash sales"
        sectionTitle="Today's"
        saleEndDate={new Date("2025-12-12")}>
        <PaginationArrows />
      </SectionHeader>
    </div>
  );
}
