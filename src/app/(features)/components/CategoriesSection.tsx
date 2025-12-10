import CategoryCard from "../../../_components/CategoryCard";
import SectionHeader from "../../../_components/SectionHeader";

interface CategoriesSectionProps {
  className?: string;
}

export default function CategoriesSection({
  className,
}: CategoriesSectionProps) {
  return (
    <section className={className ?? ""}>
      <SectionHeader
        sectionTitle="Categories"
        title="Browse By Category"
        className="mb-10"
      />

      <div className="flex flex-wrap gap-4 justify-center">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
}
