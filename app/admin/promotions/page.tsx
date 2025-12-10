import PromotionCard from "@/app/(root)/(routes)/promotions/components/promotion-card";
import { Promotion } from "@/sanity.types";
import { getAllPromotions } from "@/sanity/lib/actions/promotions";

const AdminPromotionsPage = async () => {
    const promotions = await getAllPromotions();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center pt-6 md:pt-0">
                All Promotions
            </h2>
            <div className="grid px-12 lg:px-0 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {promotions.map((promotion: Promotion) => (
                    <PromotionCard key={promotion._id || ""} promotion={promotion} />
                ))}
            </div>
        </div>
    );
};

export default AdminPromotionsPage;
