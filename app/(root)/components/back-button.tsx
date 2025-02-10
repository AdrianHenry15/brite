"use client";

import Link from "next/link";

interface IBackButtonProps {
    title: string;
    link: string;
}

export default function BackButton(props: IBackButtonProps) {
    const { title, link } = props;

    return (
        <Link
            href={link}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
            {title}
        </Link>
    );
}
