"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface IIconItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
    addBtn?: boolean;
}

const IconItem = (props: IIconItemProps) => {
    const router = useRouter();
    return (
        <div
            className={`flex flex-col items-center flex-1 px-6 py-10 md:py-0 md:px-2 lg:px-12 xl:px-16`}
        >
            <a className="flex flex-col items-center" href={props.link}>
                {props.icon}
                <h5 className="py-6 text-xl">{props.title}</h5>
            </a>
            <p className="leading-7 text-sm italic text-zinc-700 flex flex-1">
                {props.description}
            </p>
            {props.addBtn ? (
                <Button
                    className="bg-blue-500 text-white"
                    title={props.title}
                    onClick={() => router.push(props.link)}
                />
            ) : null}
        </div>
    );
};

export default IconItem;
