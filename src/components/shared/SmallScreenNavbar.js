import { FaBars } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const SmallScreenNavbar = ({ toggleSidebar }) => {
  return (
    <>
      {/* TOP NAVBAR */}
      <div className="md:hidden flex items-center justify-between h-full">
        {/* LEFT: LOGO */}
        <Logo />

        {/* RIGHT: SIDEBAR ICON */}
        <FaBars
          className="text-2xl text-gray-900 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* SEARCH BAR */}
      <div className="md:hidden mt-2">
        <SearchBar />
      </div>
    </>
  );
};

export default SmallScreenNavbar;
