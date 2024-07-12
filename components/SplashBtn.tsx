import Link from "next/link";
import React from "react";

interface ISplashBtnProps {
    link: string;
    title: string;
    icon: React.ReactNode;
}

const SplashBtn = (props: ISplashBtnProps) => {
    const { link, title, icon } = props;
    return (
        <Link
            href={link}
            className="flex m-2 bg-gray-100 rounded-md whitespace-nowrap items-center w-[350px] h-full hover:bg-zinc-200 ease-in-out transition-colors duration-300 md:w-[500px] lg:my-10 lg:w-full"
        >
            <div className="bg-blue-600 flex px-2 py-1 rounded-s-md">{icon}</div>
            <div className="text-blue-700 text-sm px-4 lg:text-md">{title}</div>
        </Link>
    );
};

export default SplashBtn;
