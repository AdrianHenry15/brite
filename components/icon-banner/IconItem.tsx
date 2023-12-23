"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IoArrowRedoOutline } from "react-icons/io5";
import Button from "../Button";

interface IIconItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
    addBtn?: boolean;
}

const IconItem = (props: IIconItemProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add 'show' class after a delay to trigger the fade-in effect
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 700); // Adjust the delay as needed

        return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }, []);

    return (
        <div
            className={`${
                isVisible ? "show" : ""
            } fade-in flex flex-col items-center flex-1 px-6 py-10 md:py-0 md:px-2 lg:px-12 xl:px-16`}
        >
            {props.icon}
            <h5 className="py-6 text-xl">{props.title}</h5>
            <p className="leading-7 text-sm italic text-zinc-700 flex flex-1">
                {props.description}
            </p>
            {props.addBtn ? (
                <Link className="mt-4" href={props.link}>
                    <Button
                        altColor
                        name={props.title}
                        icon={<IoArrowRedoOutline size={20} className={`ml-2`} />}
                    />
                </Link>
            ) : null}
        </div>
    );
};

export default IconItem;
