"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Promotion } from "@/sanity.types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import axios from "axios";

const PromotionalBanner = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [visiblePromotions, setVisiblePromotions] = useState(new Set<string>());
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const { data } = await axios.get("/api/promotions");
                const activePromotions = data.promotions.filter(
                    (p: Promotion) => p.status === "active",
                );

                setPromotions(activePromotions);
                setVisiblePromotions(new Set(activePromotions.map((p: Promotion) => p.title)));
            } catch (error) {
                console.error("Error fetching promotions:", error);
            }
        };

        fetchPromotions();

        const interval = setInterval(fetchPromotions, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (promotions.length < 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                let nextIndex = (prevIndex + 1) % promotions.length;

                while (!visiblePromotions.has(promotions[nextIndex].title!)) {
                    nextIndex = (nextIndex + 1) % promotions.length;

                    if (nextIndex === prevIndex) return prevIndex;
                }

                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [promotions, visiblePromotions]);

    const handleClose = (e: React.MouseEvent, title: string) => {
        e.stopPropagation();

        setVisiblePromotions((prev) => {
            const newSet = new Set(prev);
            newSet.delete(title);
            return newSet;
        });
    };

    const currentPromotion = promotions[currentIndex];

    if (!currentPromotion || !visiblePromotions.has(currentPromotion.title!)) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentPromotion.title}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-[144px] z-30 flex w-full cursor-pointer flex-col items-center justify-center border-b border-border bg-gradient-to-r from-primary via-brite-blue to-accent p-2 text-center text-sm font-medium text-primary-foreground shadow-sm lg:top-[87px] md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <Link
                    href="/promotions"
                    className="mx-10 inline-flex flex-wrap items-center justify-center gap-1 transition-opacity hover:opacity-90"
                >
                    <span aria-hidden="true">{renderIcon(currentPromotion.icon)}</span>

                    <span className="mx-2 font-extrabold tracking-wider">
                        {currentPromotion.title}
                    </span>

                    <span aria-hidden="true">-</span>

                    <span className="mx-2 rounded-full bg-background/15 px-2 py-0.5 font-extrabold text-primary-foreground">
                        {currentPromotion.discountPercentage}% Off
                    </span>

                    <span aria-hidden="true">-</span>

                    <span>{currentPromotion.description}</span>
                </Link>

                <button
                    type="button"
                    aria-label="Dismiss promotion"
                    className="absolute right-4 top-1/2 z-50 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-background/15"
                    onClick={(e) => handleClose(e, currentPromotion.title!)}
                >
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

const renderIcon = (icon?: string) => {
    switch (icon) {
        case "sparkle":
            return "✨";
        case "star":
            return "⭐";
        case "discount":
            return "💰";
        case "gift":
            return "🎁";
        default:
            return "🔥";
    }
};

export default PromotionalBanner;
