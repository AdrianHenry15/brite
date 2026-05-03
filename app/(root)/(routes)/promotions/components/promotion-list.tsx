import { Promotion } from "@/sanity.types";
import PromotionCard from "./promotion-card";

const PromotionList = ({ promotions }: { promotions: Promotion[] }) => {
    if (promotions.length === 0) {
        return (
            <p className="rounded-2xl border border-dashed border-border bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
                No promotions available.
            </p>
        );
    }

    return (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promotion, index) => {
                const key = promotion?._id ?? `${promotion?.title}-${index}`;

                return <PromotionCard key={key} promotion={promotion} />;
            })}
        </div>
    );
};

export default PromotionList;
