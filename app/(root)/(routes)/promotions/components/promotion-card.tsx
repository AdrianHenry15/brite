import { Promotion } from "@/sanity.types";
import Link from "next/link";

interface IPromotionCardProps {
    promotion: Promotion;
}

const PromotionCard = ({ promotion }: IPromotionCardProps) => {
    return (
        <Link
            href="/estimate"
            className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
        >
            {/* Top Content */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-card-foreground">
                    {promotion.title}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">{promotion.description}</p>
            </div>

            {/* Bottom Meta */}
            <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Discount</span>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                        {promotion.discountPercentage}% OFF
                    </span>
                </div>

                <div className="text-xs text-muted-foreground">
                    {new Date(promotion.startDate ?? "").toLocaleDateString()} —{" "}
                    {new Date(promotion.endDate ?? "").toLocaleDateString()}
                </div>
            </div>
        </Link>
    );
};

export default PromotionCard;
