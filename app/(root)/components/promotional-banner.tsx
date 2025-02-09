"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getActivePromotions } from "@/sanity/lib/promotions/getActivePromotions";
import { useRouter } from "next/navigation";

interface Promotion {
    title: string;
    description: string;
    discountPercentage: number;
    icon?: string;
}

const PromotionalBanner = () => {
    const router = useRouter();
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [currentPromotion, setCurrentPromotion] = useState<Promotion | null>(null);

    useEffect(() => {
        async function fetchPromotions() {
            const data = await getActivePromotions();
            if (data.length > 0) {
                setPromotions(data);
                setCurrentPromotion(data[0]); // Set initial promotion
            }
        }
        fetchPromotions();
    }, []);

    useEffect(() => {
        if (promotions.length < 2) return;

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % promotions.length;
            setCurrentPromotion(promotions[currentIndex]);
        }, 5000); // Change promotion every 5 seconds

        return () => clearInterval(interval);
    }, [promotions]);

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

    if (!currentPromotion) return null;

    return (
        <motion.div
            onClick={() => router.push("/promotions")}
            key={currentPromotion.title} // Animate when promotion changes
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center p-4 font-semibold text-lg"
        >
            {renderIcon(currentPromotion.icon)} {currentPromotion.title} -{" "}
            {currentPromotion.discountPercentage}% Off! {currentPromotion.description}
        </motion.div>
    );
};

export default PromotionalBanner;
