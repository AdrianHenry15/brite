import Link from "next/link";
import React from "react";

interface StatCardProps {
    link: string;
    color_gradient: "blue" | "green" | "purple";
    icon: React.ReactNode;
    title: string;
    content: string;
}

const StatCard: React.FC<StatCardProps> = ({ color_gradient, icon, title, content, link }) => {
    const getColorGradient = () => {
        switch (color_gradient) {
            case "blue":
                return "bg-gradient-to-r from-blue-500 to-indigo-600";
            case "green":
                return "bg-gradient-to-r from-green-500 to-teal-600";
            default:
                return "bg-gradient-to-r from-purple-500 to-pink-600";
        }
    };

    return (
        <Link
            href={link}
            className={`text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ${getColorGradient()}`}
        >
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="ml-3 text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-4xl font-bold">{content}</p>
        </Link>
    );
};

export default StatCard;
