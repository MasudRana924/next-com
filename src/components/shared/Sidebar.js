import Link from "next/link";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ toggleSidebar }) => {
  const handleLinkClick = () => {
    toggleSidebar(); // Close the sidebar when a link is clicked
  };

  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg z-50">
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        <IoClose
          className="text-2xl text-gray-900 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="flex flex-col items-start gap-4 px-6 py-6">
        <Link href="/" onClick={handleLinkClick} className="text-lg font-medium text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="/cart" onClick={handleLinkClick} className="text-lg font-medium text-gray-700 hover:text-gray-900">
          Cart
        </Link>
        <Link href="/about" onClick={handleLinkClick} className="text-lg font-medium text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link href="/login" onClick={handleLinkClick} className="text-lg font-medium text-gray-700 hover:text-gray-900">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
