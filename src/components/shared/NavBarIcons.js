"use client";
import Link from "next/link";
import { CiHeart,CiUser  } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Button } from "../ui/button";

const NavBarIcons = () => {
    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <CiHeart className="text-gray-900 text-2xl" />
            <div className="relative cursor-pointer">
                <LiaShoppingBagSolid className="text-gray-900 text-2xl" />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full text-white text-sm flex items-center justify-center">
                    0
                </div>
            </div>
            <Link href="/login">
                {/* <Button variant="default">Login</Button> */}
                <CiUser  className="text-gray-900 text-2xl" />
            </Link>
        </div>
    );
};
export default NavBarIcons;
