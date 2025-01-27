import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10">
      <ul className="flex gap-3 p-4 rounded-lg max-w-[1440px] mx-auto">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/services"}>Services</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
