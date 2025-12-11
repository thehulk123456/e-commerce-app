import CategoryPhone from "@/_icons/CategoryPhone";
import { Category } from "@/_types/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="border border-[rgba(0,0,0,0.3)] h-[145px] w-[180px] flex flex-col items-center p-6 hover:bg-button-2 cursor-pointer rounded-sm">
      <CategoryPhone className="mb-4" />
      <div className="text-sm">{category.name}</div>
    </div>
  );
}
