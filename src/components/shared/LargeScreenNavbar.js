import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
const LargeScreenNavbar = () => {
  return (
    <div className="hidden md:flex items-center justify-between gap-8 h-full">
      {/* LEFT */}
      <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
        <Logo />
        <div className="hidden xl:flex gap-4 text-gray-900">
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
        <SearchBar />
        <NavBarIcons/>
      </div>
    </div>
  );
};
export default LargeScreenNavbar;
