"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

interface ICardProps {
    link: string;
    title: string;
    img: any;
    description: string;
    buttonTitle: string;
}

const Card = (props: ICardProps) => {
    return (
        <div className="max-w-sm my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 hidden flex-col flex-1 md:flex">
            <Link href={props.link}>
                <Image
                    className="rounded-t-lg hidden object-cover object-center h-[300px] lg:flex"
                    src={props.img}
                    alt={props.title}
                />
            </Link>
            <div className="p-5">
                <Link className="hidden md:flex" href={props.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden md:flex">
                    {props.description}
                </p>
                <Link
                    href={props.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {props.buttonTitle}
                    {/* ARROW */}
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Card;
