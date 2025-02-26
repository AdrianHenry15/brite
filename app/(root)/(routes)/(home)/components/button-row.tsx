"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const ButtonRow = () => {
    const LinkClass =
        "hover:scale-110 ease-in-out duration-300 transition-all shadow-md border-4 border-t-gray-300 border-l-gray-600 border-r-gray-400 border-black flex items-center justify-center py-1 text-white bg-blue-500 rounded-md px-2 md:text-sm md:px-6 lg:text-lg";

    const buttonVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="flex py-4 sticky bg-gradient-to-b from-zinc-200 to-gray-600 items-center justify-evenly w-full h-[10%] lg:px-10">
            {["/exterior-cleaning", "/commercial-services", "/holiday-lighting"].map(
                (href, index) => (
                    <motion.div
                        key={href}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.2 }} // Stagger effect
                    >
                        <Link className={LinkClass} href={href}>
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
