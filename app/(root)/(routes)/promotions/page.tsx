"use client";

import { getAllPromotions } from "@/sanity/lib/promotions/getAllPromotions";
import { useEffect, useState } from "react";

interface Promotion {
    title: string;
    description: string;
    discountPercentage: number;
    icon?: string;
    status: string;
    startDate: string;
    endDate: string;
}

export default function PromotionsPage() {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPromotions() {
            const data = await getAllPromotions();
            setPromotions(data);
            setLoading(false);
        }
        fetchPromotions();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">Loading promotions...</div>
        );
    }

    const activePromotions = promotions.filter((p) => p.status === "active");
    const upcomingPromotions = promotions.filter((p) => p.status === "upcoming");
    const expiredPromotions = promotions.filter((p) => p.status === "expired");

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">All Promotions</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">🔥 Active Promotions</h2>
                <PromotionList promotions={activePromotions} />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
                    ⏳ Upcoming Promotions
                </h2>
                <PromotionList promotions={upcomingPromotions} />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-500 mb-4">📅 Expired Promotions</h2>
                <PromotionList promotions={expiredPromotions} />
            </section>
        </div>
    );
}

const PromotionList = ({ promotions }: { promotions: Promotion[] }) => {
    if (promotions.length === 0) {
        return <p className="text-gray-400">No promotions available.</p>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promo) => (
                <div key={promo.title} className="p-4 bg-white shadow-md rounded-lg border">
                    <h3 className="text-xl font-semibold">{promo.title}</h3>
                    <p className="text-gray-600">{promo.description}</p>
                    <p className="text-blue-500 font-bold mt-2">
                        💰 {promo.discountPercentage}% Off
                    </p>
                    <p className="text-sm text-gray-400">
                        📅 {new Date(promo.startDate).toLocaleDateString()} -{" "}
                        {new Date(promo.endDate).toLocaleDateString()}
                    </p>
                </div>
            ))}
        </div>
    );
};
