import Link from "next/link";
import React from "react";
import { NavMenuItems, NavMenuLinks } from "../lib/constants";

const ButtonRow = () => {
    const LinkClass =
        "hover:scale-110 ease-in-out duration-300 transition-all text-2xl shadow-md border-4 border-t-gray-300 border-l-gray-600 border-r-gray-400 border-black flex items-center justify-center px-6 py-1 text-white bg-blue-500 rounded-md";

    return (
        <div className="flex px-10 py-4 sticky bg-gray-100 items-center justify-evenly w-full h-[10%]">
            <Link className={LinkClass} href={NavMenuLinks.EXTERIOR_CLEANING}>
                {NavMenuItems.EXTERIOR_CLEANING}
            </Link>
            <Link className={LinkClass} href={NavMenuLinks.COMMERCIAL_SERVICES}>
                {NavMenuItems.COMMERCIAL_SERVICES}
            </Link>
            <Link className={LinkClass} href={NavMenuLinks.HOLIDAY_LIGHTING}>
                {NavMenuItems.HOLIDAY_LIGHTING}
            </Link>
        </div>
    );
};

export default ButtonRow;
