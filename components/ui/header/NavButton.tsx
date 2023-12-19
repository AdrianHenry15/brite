import Link from "next/link";
import React from "react";

interface INavButtonProps {
    name: string;
    link: string;
    className?: string;
    altColor?: boolean;
}

const NavButton = (props: INavButtonProps) => {
    return (
        <li
            className={`${
                props.altColor
                    ? "text-blue-600 bg-zinc-300 hover:text-white"
                    : "bg-blue-600 hover:text-black text-white"
            } ${
                props.className
            } mx-2 transition-all duration-300 ease-in-out font-semibold text-sm px-6 py-2 text-center rounded-full`}
        >
            <Link href={props.link} className="">
                {props.name}
            </Link>
        </li>
    );
};

export default NavButton;
