import PromotionCard from "@/app/(root)/(routes)/promotions/components/promotion-card";
import { Promotion } from "@/sanity.types";
import { getAllPromotions } from "@/sanity/lib/promotions/getAllPromotions";

const AdminPromotionsPage = async () => {
    const promotions = await getAllPromotions();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center pt-6 md:pt-0">
                All Promotions
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promotion: Promotion) => (
                    <PromotionCard promotion={promotion} />
                ))}
            </div>
        </div>
    );
};

export default AdminPromotionsPage;
