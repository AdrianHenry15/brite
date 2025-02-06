import Link from "next/link";
import React from "react";

interface IQuickLinkCardProps {
    link: string;
    icon: React.ReactNode;
    title: string;
}

const QuickLinkCard = (props: IQuickLinkCardProps) => {
    const { link, icon, title } = props;
    return (
        <Link
            href={link}
            className="bg-red-600 text-white p-6 rounded-xl shadow-lg text-center hover:bg-purple-600 transform hover:scale-105 transition-all duration-300"
        >
            {icon}
            <span className="text-xl font-semibold">{title}</span>
        </Link>
    );
};

export default QuickLinkCard;
