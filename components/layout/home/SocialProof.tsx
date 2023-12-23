"use client";

import Script from "next/script";
import React, { useEffect, useRef } from "react";
import Button from "../../Button";

const SocialProof = () => {
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
        // TODO: UPGRADE TO BASIC PLAN FOR ELFSIGHT TO TAKE OFF ELFSIGHT BRANDING
        <section
            ref={containerRef}
            className={`fade-in bg-white w-full flex flex-col items-center py-24 px-10 justify-center relative overflow-hidden shadow-inner border-y-[1px]`}
        >
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
            ></Script>
            <div
                className="elfsight-app-5569a9cf-9ef8-40cf-a013-e933e23bdd38"
                data-elfsight-app-lazy
            ></div>
            <Button
                name="Get Your Free Estimate!"
                className="flex justify-center mt-10 w-[300px] animate-bounce"
            />
        </section>
    );
};

export default SocialProof;
