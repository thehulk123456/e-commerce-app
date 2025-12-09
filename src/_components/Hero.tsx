import CategoriesNavbar from "./CategoriesNavbar";
import HeroSlider from "./HeroFeatured";

export default function Hero() {
  return (
    <div className="flex gap-11 justify-center mb-[140px]">
      <CategoriesNavbar additionalClassName="border-r border-r-[rgba(0,0,0,0.3)] h-[384px] flex flex-col justify-center pt-10 pr-4 w-[200px]" />
      <HeroSlider />
    </div>
  );
}
