import { Promotion } from "@/sanity.types";
import PromotionCard from "./promotion-card";

const PromotionList = ({ promotions }: { promotions: Promotion[] }) => {
    if (promotions.length === 0) {
        return <p className="text-gray-400">No promotions available.</p>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promotion) => (
                <PromotionCard key={promotion._id} promotion={promotion} />
            ))}
        </div>
    );
};

export default PromotionList;
