import { logout } from "@/_actions/logout";
import HeartIcon from "@/_icons/HeartIcon";
import Link from "next/link";
import CartWithQuantity from "./CartWithQuantity";
import Navigation from "./Navigation";
import SearchProducts from "./SearchProducts";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 items-center xl:flex-row xl:gap-0 justify-between px-32 py-10 border-b border-b-[rgba(0,0,0,0.3)]">
      <Link href="/" className="font-bold text-2xl">
        Exclusive
      </Link>
      <Navigation />
      <div className="flex flex-col md:flex-row items-center gap-4">
        <SearchProducts />
        <HeartIcon className="cursor-pointer" />
        <CartWithQuantity />

        <form action={logout}>
          <button type="submit" className="cursor-pointer block">
            Log out
          </button>
        </form>
      </div>
    </header>
  );
}
