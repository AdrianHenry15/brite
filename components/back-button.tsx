"use client";

import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

interface IBackButtonProps {
    title: string;
    link: string;
}

export default function BackButton({ title, link }: IBackButtonProps) {
    return (
        <Link
            href={link}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
            <FaChevronLeft
                size={12}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
                aria-hidden="true"
            />
            <span>{title}</span>
        </Link>
    );
}
