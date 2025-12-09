import CategoryCard from "./CategoryCard";
import SectionHeader from "./SectionHeader";

interface CategoriesSectionProps {
  className?: string;
}

export default function CategoriesSection({
  className,
}: CategoriesSectionProps) {
  return (
    <div className={className ?? ""}>
      <SectionHeader
        title="Categories"
        sectionTitle="Browse By Category"
        className="mb-10"
      />

      <div className="flex flex-wrap gap-4 justify-center">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
