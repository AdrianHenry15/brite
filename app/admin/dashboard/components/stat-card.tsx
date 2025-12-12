"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Pencil } from "lucide-react";

interface StatCardProps {
    link: string;
    color_gradient: "blue" | "green" | "purple" | "yellow";
    icon: React.ReactNode;
    title: string;
    content: string;
}

const StatCard: React.FC<StatCardProps> = ({ color_gradient, icon, title, content, link }) => {
    const router = useRouter();

    const getColorGradient = () => {
        switch (color_gradient) {
            case "blue":
                return "bg-gradient-to-r from-blue-500 to-indigo-600";
            case "green":
                return "bg-gradient-to-r from-green-500 to-teal-600";
            case "yellow":
                return "bg-gradient-to-r from-yellow-500 to-orange-600";
            default:
                return "bg-gradient-to-r from-purple-500 to-pink-600";
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => router.push(link)}
            onKeyDown={(e) => e.key === "Enter" && router.push(link)}
            className={`
        relative cursor-pointer
        text-white p-6 rounded-xl shadow-lg
        transition-all duration-300
        hover:scale-[1.03]
        focus:outline-none focus:ring-2 focus:ring-white/60
        ${getColorGradient()}
      `}
        >
            {/* Edit link (real anchor, safe) */}
            <Link
                href={`${link}/edit`}
                onClick={(e) => e.stopPropagation()}
                className="
          absolute top-3 right-3
          flex items-center gap-1
          rounded-md bg-white/20 px-2 py-1
          text-xs font-medium
          backdrop-blur
          hover:bg-white/30
          transition
        "
            >
                <Pencil size={14} />
                Edit
            </Link>

            <div className="flex items-center mb-4">
                {icon}
                <h3 className="ml-3 text-xl font-semibold">{title}</h3>
            </div>

            <p className="text-4xl font-bold">{content}</p>
        </div>
    );
};

export default StatCard;
