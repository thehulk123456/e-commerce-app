import CategoryPhone from "@/_icons/CategoryPhone";

interface CategoryCardProps {
  title: string;
  categoryId: string;
  iconUrl: string;
}

export default function CategoryCard() {
  return (
    <div className="border border-[rgba(0,0,0,0.3)] h-[145px] w-[180px] flex flex-col items-center p-6 hover:bg-button-2 cursor-pointer rounded-sm">
      <CategoryPhone className="mb-4" />
      <div className="text-sm">Phones</div>
    </div>
  );
}
