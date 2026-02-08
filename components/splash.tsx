"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "@/public/assets/icons/brite-logo.png";
import Image, { StaticImageData } from "next/image";

interface ISplashProps {
    img: string | StaticImageData;
    title: string;
    description: string;
}

const Splash = (props: ISplashProps) => {
    const { img, title, description } = props;

    // Function to wrap highlighted words in a span
    const highlightText = (text: string) => {
        const highlightWords = new Set([
            "brite",
            "elevate",
            "expert",
            "specialized",
            "flawless",
            "luxury",
            "pristine",
            "precision",
        ]);

        return text.split(" ").map((word, index, array) => {
            const cleanedWord = word.replace(/[^\w]/g, ""); // Remove punctuation for matching
            const lowerWord = cleanedWord.toLowerCase();
            const highlighted = highlightWords.has(lowerWord) ? (
                <span key={index} className="text-blue-400 font-semibold">
                    {word}
                </span>
            ) : (
                word
            );

            // Add space unless it's the last word
            return index < array.length - 1 ? [highlighted, " "] : highlighted;
        });
    };

    return (
        <section className="relative w-full py-12 h-[100vh] bg-black text-white flex items-center justify-center overflow-hidden">
            {/* Background Image / Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30">
                <Image
                    src={img}
                    alt="Luxury Home Exterior"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
                />
            </div>

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6 max-w-3xl"
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center mb-4"
                >
                    <Image src={Logo} alt="Brite Estate Care Logo" width={120} height={120} />
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-wide leading-tight">
                    {title}
                </h1>

                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    {highlightText(description)}
                </p>

                {/* Call to Action Button */}
                <motion.a
                    href="/contact-us"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-block bg-blue-500 px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:bg-opacity-75 duration-300 transition"
                >
                    Get a Free Estimate
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Splash;
