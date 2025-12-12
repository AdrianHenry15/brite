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
                className="relative z-10 flex flex-col text-center px-6 max-w-3xl"
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

                <div className="flex items-center justify-center">
                    {/* Call to Action Button */}
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block w-56 whitespace-nowrap mx-2 my-2 px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300 text-center"
                    >
                        Get a Free Estimate
                    </motion.a>

                    <motion.a
                        href="tel:7048423535"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block underline underline-offset-2 w-56 mx-2 px-8 py-4 text-lg my-2 font-semibold text-blue-500 bg-white rounded-full shadow-lg hover:bg-opacity-75 transition duration-300 text-center"
                    >
                        704-842-3535
                    </motion.a>
                </div>
                <hr className="" />
                <div className="flex items-center justify-center sm:flex-row flex-col">
                    <div className="flex items-center justify-between">
                        <motion.a
                            href="/services/exterior-cleaning"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block w-56 whitespace-nowrap mx-2 my-2 px-8 py-4 text-md font-semibold text-white bg-gradient-to-tr from-blue-500  to-purple-500 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300 text-center"
                        >
                            Exterior Cleaning
                        </motion.a>
                        <motion.a
                            href="/services/holiday-lighting"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block w-56 whitespace-nowrap mx-2 my-2 px-8 py-4 text-md font-semibold text-white bg-gradient-to-tr from-blue-500  to-purple-500 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300 text-center"
                        >
                            Holiday Lighting
                        </motion.a>
                    </div>
                    <motion.a
                        href="/services/commercial-services"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block w-56 whitespace-nowrap mx-2 my-2 px-8 py-4 text-md font-semibold text-white bg-gradient-to-tr from-blue-500  to-purple-500 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300 text-center"
                    >
                        Commercial Services
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Splash;
