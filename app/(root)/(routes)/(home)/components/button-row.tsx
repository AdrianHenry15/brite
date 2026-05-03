"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    "/services/exterior-cleaning",
    "/services/commercial-services",
    "/services/holiday-lighting",
];

const ButtonRow = () => {
    const buttonVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        hover: { scale: 1.05 },
        tap: { scale: 0.97 },
    } as const;

    return (
        <div className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 lg:px-8">
                {links.map((href, index) => {
                    const label = href
                        .replace("/services/", "")
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase());

                    return (
                        <motion.div
                            key={href}
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ delay: index * 0.08 }}
                        >
                            <Link
                                href={href}
                                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-card-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-4 sm:py-2 sm:text-sm md:text-base"
                            >
                                {label}
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ButtonRow;
