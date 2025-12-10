import { Promotion } from "@/sanity.types";
import PromotionList from "./components/promotion-list";
import { Metadata } from "next";
import { getAllPromotions } from "@/sanity/lib/actions/promotions";

export const metadata: Metadata = {
    title: "Current Promotions | Brite Exterior Cleaning Services",
    description:
        "Check out Brite Exterior Cleaning's current promotions and special offers on exterior cleaning services. Save big on residential and commercial cleaning services in Charlotte, NC.",
    openGraph: {
        title: "Current Promotions | Brite Exterior Cleaning Services",
        description:
            "Explore the latest promotions and discounts on exterior cleaning services offered by Brite Exterior Cleaning. Don't miss out on our limited-time offers!",
        url: "https://briteclt.com/promotions",
    },
    twitter: {
        card: "summary_large_image",
        title: "Current Promotions | Brite Exterior Cleaning Services",
        description:
            "Take advantage of our current promotions and save on exterior cleaning services from Brite Exterior Cleaning. View our latest deals!",
    },
};

export default async function PromotionsPage() {
    const promotions = await getAllPromotions();

    const sortByDate = (a: Promotion, b: Promotion) =>
        new Date(a.startDate!).getTime() - new Date(b.startDate!).getTime();

    const activePromotions = promotions
        .filter((p: Promotion) => p.status === "active")
        .sort(sortByDate);

    const upcomingPromotions = promotions
        .filter((p: Promotion) => p.status === "upcoming")
        .sort(sortByDate);

    const expiredPromotions = promotions
        .filter((p: Promotion) => p.status === "expired")
        .sort(sortByDate);

    return (
        <div className="max-w-5xl mx-auto px-12 py-16 bg-gradient-to-b from-blue-500 via-pink-400 to-white">
            <h1 className="text-3xl font-bold text-center mb-6">All Promotions</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">🔥 Active Promotions</h2>
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
