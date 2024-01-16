"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

import Button from "../../Button";

interface IImgTextRowProps {
    imgLeft?: boolean;
    textLeft?: boolean;
    src: any;
    link: string;
    title: string;
    description?: string;
}

const ImgTextRow = (props: IImgTextRowProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.1, // Adjust the threshold as needed (percentage of element visibility)
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    containerRef.current?.classList.add("show");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);

    return (
        <section
            ref={containerRef}
            // add 'fade-in' class to fade in on scroll
            className="flex flex-col-reverse items-center px-4 my-10 py-10 md:flex md:w-full md:justify-center"
        >
            {/* THIS CONTAINER HOLDS THE IMAGE AND THE TEXT CONTAINER  */}
            <div
                className={`${
                    props.imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } self-center items-center lg:w-9/12 lg:h-[350px] lg:flex`}
            >
                {/* IMAGE AND TEXT */}
                <div className="shadow-inner md:max-w-[550px] md:flex md:flex-1">
                    <Image priority loading="eager" src={props.src} alt={props.title} />
                </div>
                <div
                    className={`${
                        props.textLeft
                            ? "md:text-left md:items-start"
                            : "md:text-right md:items-end"
                    } text-center md:flex md:flex-1 md:flex-col`}
                >
                    {/* TITLE */}
                    <h5 className="font-semibold py-6 text-2xl">{props.title}</h5>
                    {/* DESCRIPTION */}
                    <p className="text-light text-sm text-zinc-950 px-4 md:max-w-md lg:max-w-lg">
                        {props.description}
                    </p>
                    {/* BUTTON */}
                    <Link className="flex justify-center" href={"/estimate"}>
                        <Button
                            className={`${props.textLeft ? "ml-4" : "mr-4"} animate-pulse mt-4`}
                            name={"Get Your Free Estimate Now"}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ImgTextRow;
