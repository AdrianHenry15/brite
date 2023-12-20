import Link from "next/link";
import React from "react";

interface IMobileCardProps {
    link: string;
    title: string;
    children: React.ReactNode;
}

const MobileCard = (props: IMobileCardProps) => {
    return (
        <Link
            className="bg-white w-11/12 rounded-xl flex items-center self-center my-10 md:hidden"
            href={props.link}
        >
            <span className="bg-blue-600 rounded-l-xl h-full p-4 justify-center">
                {props.children}
            </span>
            <h5 className="ml-4">{props.title}</h5>
        </Link>
    );
};

export default MobileCard;
