import { getConnection } from "@/_utils/db";
import CategoriesNavbar from "./CategoriesNavbar";
import HeroSlider from "./HeroFeatured";

async function getCategories() {
  try {
    const connection = await getConnection();

    const [rows] = (await connection.execute(
      "SELECT * FROM categories"
    )) as any[];

    return rows;
  } catch (e) {
    return [];
  }
}

export default async function Hero() {
  const categories = await getCategories();

  return (
    <div className="flex gap-11 justify-center mb-[140px]">
      <CategoriesNavbar
        categoriesData={categories}
        additionalClassName="border-r border-r-[rgba(0,0,0,0.3)] h-[384px] flex flex-col justify-center pt-10 pr-4 w-[200px]"
      />
      <HeroSlider />
    </div>
  );
}
