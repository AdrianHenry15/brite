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

        // Re-fetch promotions every 5 minutes to keep it updated
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
                    if (nextIndex === prevIndex) return prevIndex; // All promotions hidden
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
                className="sticky top-[144px] lg:top-[90px] z-30 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-gray-100 text-center p-2 text-sm cursor-pointer flex flex-col md:flex-row items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent navigation on click
            >
                <Link href={"/promotions"}>
                    {renderIcon(currentPromotion.icon)}
                    <span className="font-bold tracking-wider mx-2">
                        {currentPromotion.title}
                    </span>{" "}
                    -
                    <span className="font-bold text-white mx-2">
                        {currentPromotion.discountPercentage}% Off
                    </span>{" "}
                    - {currentPromotion.description}
                </Link>
                <button
                    className="absolute right-4 top-1/2 z-50 transform -translate-y-1/2 text-white"
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
