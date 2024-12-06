"use client"
import { useState } from "react";
import SmallScreenNavbar from "./SmallScreenNavbar";
import LargeScreenNavbar from "./LargeScreenNavbar";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="h-20 p-4 md:p-0 md:w-3/4 mx-auto relative">
      {/* SMALL SCREENS */}
      <SmallScreenNavbar toggleSidebar={toggleSidebar} />
      {/* LARGE SCREENS */}
      <LargeScreenNavbar />
      {/* SIDEBAR */}
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};
export default Navbar;
