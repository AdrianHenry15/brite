import Link from "next/link";
import React from "react";

interface ILayoutBtnProps {
    className?: string;
    title: string;
    icon?: React.ReactNode;
}

const LayoutBtn = (props: ILayoutBtnProps) => {
    return (
        <button
            className={`${props.className} flex items-center mt-4 py-2 px-6 rounded-lg bg-blue-500 text-white`}
        >
            {props.title}
            {props.icon ? props.icon : null}
        </button>
    );
};

export default LayoutBtn;
