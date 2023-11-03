import Link from "next/link";
import React from "react";

interface IPageBtnProps {
    path: string;
    text: string;
    btnClass?: string;
    textClass?: string;
}

const PageBtn = (props: IPageBtnProps) => {
    return (
        <Link href={props.path}>
            <button className={`flex border-2 p-4 m-4 rounded-md ${props.btnClass}`}>
                <span className={`lg:text-base md:text-base text-xs ${props.textClass}`}>{props.text}</span>
            </button>
        </Link>
    );
};

export default PageBtn;
