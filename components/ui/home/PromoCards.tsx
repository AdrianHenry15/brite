import Link from "next/link";
import React from "react";

interface IPromoCardsProps {
    children: React.ReactNode;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

const PromoCards = (props: IPromoCardsProps) => {
    return (
        <div className="flex flex-col justify-center items-center flex-1 text-center text-sm my-6 md:px-4">
            {props.children}
            <span className="font-extrabold text-xl text-sky-600 my-4">{props.title}</span>
            <p className="my-4 font-medium">{props.description}</p>
            <Link className="text-sky-500 underline font-bold" href={props.link}>
                {props.linkText}
            </Link>
        </div>
    );
};

export default PromoCards;
