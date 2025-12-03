import HeartIcon from "@/_icons/HeartIcon";
import Navigation from "./Navigation";
import Search from "./Search";
import CartIcon from "@/_icons/CartIcon";

export default function Header() {
  return (
    <header className="flex justify-between px-32 py-10 border-b border-b-[rgba(0,0,0,0.3)]">
      <h1 className="font-bold text-2xl">Exclusive</h1>
      <Navigation />
      <div className="flex items-center gap-4">
        <Search />
        <HeartIcon className="cursor-pointer" />
        <CartIcon className="cursor-pointer" />
      </div>
    </header>
  );
}
