import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";

import { IoArrowRedoOutline } from "react-icons/io5";

interface IIconItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
    addBtn?: boolean;
}

const IconItem = (props: IIconItemProps) => {
    return (
        <div className="flex flex-col items-center flex-1 px-6 py-4 md:py-0 md:px-2 lg:px-12 xl:px-16">
            {props.icon}
            <h5 className="py-6 text-xl">{props.title}</h5>
            <aside className="leading-7 text-sm italic text-zinc-700 flex flex-1">
                {props.description}
            </aside>
            {props.addBtn ? (
                <Link className="" href={props.link}>
                    <button className="flex items-center mt-4 py-2 px-6 rounded-lg bg-blue-500 text-white">
                        {props.title}
                        <IoArrowRedoOutline size={20} className="ml-2" />
                    </button>
                </Link>
            ) : null}
        </div>
    );
};

export default IconItem;
