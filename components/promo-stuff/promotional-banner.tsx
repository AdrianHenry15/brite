"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import axios from "axios";

import { Promotion } from "@/sanity.types";

const PromotionalBanner = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [hiddenPromotions, setHiddenPromotions] = useState<Set<string>>(new Set());
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const { data } = await axios.get("/api/promotions");

                const activePromotions = data.promotions.filter(
                    (promotion: Promotion) => promotion.status === "active",
                );

                setPromotions(activePromotions);
            } catch (error) {
                console.error("Error fetching promotions:", error);
            }
        };

        fetchPromotions();

        const interval = setInterval(fetchPromotions, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const visiblePromotions = useMemo(() => {
        return promotions.filter(
            (promotion) => promotion.title && !hiddenPromotions.has(promotion.title),
        );
    }, [promotions, hiddenPromotions]);

    useEffect(() => {
        if (visiblePromotions.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % visiblePromotions.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [visiblePromotions.length]);

    useEffect(() => {
        if (currentIndex >= visiblePromotions.length) {
            setCurrentIndex(0);
        }
    }, [currentIndex, visiblePromotions.length]);

    const currentPromotion = visiblePromotions[currentIndex];

    if (!currentPromotion?.title) return null;

    const handleClose = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        setHiddenPromotions((prev) => {
            const next = new Set(prev);
            next.add(currentPromotion.title!);
            return next;
        });
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentPromotion.title}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="w-full border-t border-border bg-gradient-to-r from-primary via-brite-blue to-accent text-primary-foreground"
            >
                <div className="relative mx-auto flex min-h-11 w-full max-w-7xl items-center justify-center px-10 py-2 text-center text-xs font-semibold sm:px-12 sm:text-sm">
                    <Link
                        href="/promotions"
                        className="line-clamp-2 inline-flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0.5 leading-5 transition-opacity hover:opacity-90 sm:line-clamp-none"
                    >
                        <span aria-hidden="true">{renderIcon(currentPromotion.icon)}</span>

                        <span className="font-extrabold tracking-wide">
                            {currentPromotion.title}
                        </span>

                        {currentPromotion.discountPercentage ? (
                            <span className="rounded-full bg-background/15 px-2 py-0.5 font-extrabold">
                                {currentPromotion.discountPercentage}% Off
                            </span>
                        ) : null}

                        {currentPromotion.description ? (
                            <span className="hidden sm:inline">
                                — {currentPromotion.description}
                            </span>
                        ) : null}
                    </Link>

                    <button
                        type="button"
                        aria-label="Dismiss promotion"
                        onClick={handleClose}
                        className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-background/15 sm:right-3"
                    >
                        <XMarkIcon className="h-4 w-4" />
                    </button>
                </div>
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
