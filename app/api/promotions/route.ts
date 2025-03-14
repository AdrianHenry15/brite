import { NextResponse } from "next/server";
import { Promotion } from "@/sanity.types";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try {
        const now = new Date().toISOString();

        // Fetch all promotions
        const promotions: Promotion[] = await client.fetch(`*[_type == "promotion"]`);

        // Determine the new status
        const updatedPromotions = promotions.map((promotion) => {
            let newStatus = "upcoming";
            if (promotion.startDate && promotion.endDate) {
                if (now >= promotion.startDate && now <= promotion.endDate) {
                    newStatus = "active";
                } else if (now > promotion.endDate) {
                    newStatus = "expired";
                }
            }

            return { ...promotion, status: newStatus };
        });

        // Batch update the statuses in Sanity
        const transaction = client.transaction();
        updatedPromotions.forEach((promotion) => {
            transaction.patch(promotion._id, { set: { status: promotion.status } });
        });

        await transaction.commit();

        return NextResponse.json({ message: "Promotions updated", promotions: updatedPromotions });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update promotions" }, { status: 500 });
    }
}
