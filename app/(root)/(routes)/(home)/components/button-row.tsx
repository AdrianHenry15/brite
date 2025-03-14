"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const ButtonRow = () => {
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
<<<<<<< HEAD
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
        }),
        hover: {
            scale: 1.05,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="relative bg-gradient-to-b from-gray-200 to-gray-600 flex flex-wrap justify-center items-center gap-3 p-4 md:gap-6 md:p-6 lg:gap-8">
            {["/exterior-cleaning", "/commercial-services", "/holiday-lighting"].map(
                (href, index) => (
                    <motion.div
                        key={href}
                        custom={index}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                    >
                        <Link
                            className="shadow-md border border-gray-700 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-5 py-2 text-sm md:text-base lg:text-lg transition-all w-[90%] sm:w-auto text-center block"
                            href={href}
                        >
                            {href
                                .replace("/", "")
                                .replace("-", " ")
                                .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </Link>
                    </motion.div>
                ),
            )}
=======
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
        tap: { scale: 0.95 },
    };

    return (
        <div className="flex py-3 sticky top-0 z-10 bg-gradient-to-b from-zinc-100 to-gray-500 items-center justify-center w-full gap-3 px-4 md:px-8 lg:px-12">
            {[
                "/services/exterior-cleaning",
                "/services/commercial-services",
                "/services/holiday-lighting",
            ].map((href, index) => (
                <motion.div
                    key={href}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ delay: index * 0.15 }} // Stagger effect
                >
                    <Link
                        className="text-xs sm:text-sm md:text-base font-semibold tracking-wide flex items-center justify-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg shadow-lg border border-blue-800 hover:bg-blue-700 active:bg-blue-800 transition-all"
                        href={href}
                    >
                        {href
                            .replace("/services/", "")
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                </motion.div>
            ))}
>>>>>>> b18f1bee01a955a0977c74c14e7712013bac00d2
        </div>
    );
};

export default ButtonRow;
