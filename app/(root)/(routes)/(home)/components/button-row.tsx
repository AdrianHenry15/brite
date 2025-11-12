"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const ButtonRow = () => {
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
        tap: { scale: 0.95 },
    } as const;

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
        </div>
    );
};

export default ButtonRow;
