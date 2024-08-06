import Link from "next/link";
import React from "react";

interface ISplashBtnProps {
    link: string;
    title: string;
    icon?: React.ReactNode;
}

const SplashBtn = (props: ISplashBtnProps) => {
    const { link, title, icon } = props;
    return (
        <Link
            href={link}
            className="flex m-2 shadow-lg bg-gray-200 rounded-md whitespace-nowrap items-center justify-center w-[350px] h-[60px] hover:bg-zinc-200 ease-in-out transition-colors duration-300 md:w-[500px] lg:my-10 lg:h-[150px] lg:w-full"
        >
            {icon ? <div className="bg-blue-600 flex px-2 py-1 rounded-s-md">{icon}</div> : null}
            <div className="text-blue-500 underline underline-offset-4 font-semibold text-md px-4 lg:text-xl">
                {title}
            </div>
        </Link>
    );
};

export default SplashBtn;
