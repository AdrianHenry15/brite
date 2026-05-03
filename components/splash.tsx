"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "@/public/assets/icons/brite-logo.png";

interface SplashProps {
    img: string | StaticImageData;
    title: string;
    description: string;
    ctaHref?: string;
    ctaLabel?: string;
}

const HIGHLIGHT_WORDS = new Set([
    "brite",
    "elevate",
    "expert",
    "specialized",
    "flawless",
    "luxury",
    "pristine",
    "precision",
]);

const Splash = ({
    img,
    title,
    description,
    ctaHref = "/contact-us",
    ctaLabel = "Get a Free Estimate",
}: SplashProps) => {
    const highlightText = (text: string) => {
        return text.split(" ").map((word, index, array) => {
            const cleanedWord = word.replace(/[^\w]/g, "").toLowerCase();
            const isHighlighted = HIGHLIGHT_WORDS.has(cleanedWord);

            return (
                <span key={`${word}-${index}`}>
                    <span className={isHighlighted ? "font-semibold text-primary" : undefined}>
                        {word}
                    </span>
                    {index < array.length - 1 ? " " : ""}
                </span>
            );
        });
    };

    return (
        <section className="relative flex min-h-[90svh] w-full items-center justify-center overflow-hidden bg-brite-navy px-4 py-24 text-primary-foreground sm:px-6 lg:px-8">
            <Image
                src={img}
                alt={`${title} hero image`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-35"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-brite-navy/50 via-brite-navy/10 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-5"
                >
                    <Image
                        src={Logo}
                        alt="Brite Exterior Cleaning logo"
                        width={112}
                        height={112}
                        priority
                    />
                </motion.div>

                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)] sm:text-5xl lg:text-6xl">
                    {title}
                </h1>

                <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)] sm:text-lg lg:text-xl">
                    {highlightText(description)}
                </p>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                        href={ctaHref}
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-colors hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        {ctaLabel}
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Splash;
