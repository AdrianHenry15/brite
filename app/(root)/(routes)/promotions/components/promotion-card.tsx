import { Promotion } from "@/sanity.types";
import React from "react";

interface IPromotionCardProps {
    promotion: Promotion;
}

const PromotionCard = (props: IPromotionCardProps) => {
    const { promotion } = props;
    return (
        <div key={promotion.title} className="p-4 bg-white shadow-md rounded-lg border">
            <h3 className="text-xl font-semibold">{promotion.title}</h3>
            <p className="text-gray-600">{promotion.description}</p>
            <p className="text-blue-500 font-bold mt-2">💰 {promotion.discountPercentage}% Off</p>
            <p className="text-sm text-gray-400">
                📅 {new Date(promotion.startDate!).toLocaleDateString()} -{" "}
                {new Date(promotion.endDate!).toLocaleDateString()}
            </p>
        </div>
    );
};

export default PromotionCard;
