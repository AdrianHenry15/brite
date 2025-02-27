"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const ButtonRow = () => {
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
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
        </div>
    );
};

export default ButtonRow;
