import Link from "next/link";
import React from "react";

const ButtonRow = () => {
    const LinkClass =
        "hover:scale-110 ease-in-out duration-300 transition-all shadow-md border-4 border-t-gray-300 border-l-gray-600 border-r-gray-400 border-black flex items-center justify-center py-1 text-white bg-blue-500 rounded-md text-[10px] px-2 md:text-sm md:px-6 lg:text-2xl";

    return (
        <div className="flex py-4 sticky bg-gray-100 items-center justify-evenly w-full h-[10%] lg:px-10">
            <Link className={LinkClass} href={"/exterior-cleaning"}>
                {"Exterior Cleaning"}
            </Link>
            <Link className={LinkClass} href={"/commercial-services"}>
                {"Commercial Services"}
            </Link>
            <Link className={LinkClass} href={"/holiday-lighting"}>
                {"Holiday Lighting"}
            </Link>
        </div>
    );
};

export default ButtonRow;
