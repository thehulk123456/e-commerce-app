"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    pathname === href ? "underline underline-offset-4" : "";

  return (
    <nav className="flex gap-12">
      <Link href="/" className={linkClasses("/")}>
        Home
      </Link>
      <Link href="/contact" className={linkClasses("/contact")}>
        Contact
      </Link>
      <Link href="/about" className={linkClasses("/about")}>
        About
      </Link>
      <Link href="/sign-up" className={linkClasses("/sign-up")}>
        Sign Up
      </Link>
    </nav>
  );
}
