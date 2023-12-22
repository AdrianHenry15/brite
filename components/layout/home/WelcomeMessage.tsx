"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button from "../../Button";

const WelcomeMessage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Adjust the threshold as needed (percentage of element visibility)
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
            className={`fade-in flex flex-col w-full items-center relative bg-cover bg-[url('/assets/imgs/brick.jpg')] h-min-content`}
        >
            {/* WHITE BG  */}
            <div className="bg-white flex flex-col mx-4 my-24 h-full shadow-xl rounded-md md:p-20 px-4 py-10">
                {/* TEXT  */}
                <div className="text-center flex flex-col">
                    <span className="font-extrabold md:text-4xl text-2xl mb-4">
                        Your Journey To A Brite Home Or Business Starts Here.
                    </span>
                    <span>
                        Get peace of mind knowing that all our services are done Brite the first
                        time.
                    </span>
                    <span>Start with a FREE, no obligation estimate today!</span>
                    <Link className="flex justify-center mt-10" href="/estimate">
                        <Button name="Get Your Free Estimate!" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WelcomeMessage;
