import { Promotion } from "@/sanity.types";
import { getAllPromotions } from "@/sanity/lib/promotions/getAllPromotions";
import PromotionList from "./components/promotion-list";

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
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-blue-500 to-black">
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
