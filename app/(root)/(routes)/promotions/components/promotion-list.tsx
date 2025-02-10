import { Promotion } from "@/sanity.types";

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
                        📅 {new Date(promo.startDate!).toLocaleDateString()} -{" "}
                        {new Date(promo.endDate!).toLocaleDateString()}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PromotionList;
