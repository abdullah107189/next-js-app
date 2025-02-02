"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  if (!pathname?.includes("dashboard")) {
    return (
      <nav className="sticky top-0 z-10 bg-gray-900 text-white">
        <ul className="flex gap-3 p-4 rounded-lg max-w-[1440px] mx-auto">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
        </ul>
      </nav>
    );
  } else {
    <></>;
  }
};

export default Navbar;
