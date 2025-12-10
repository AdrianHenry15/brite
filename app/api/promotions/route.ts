import { NextResponse } from "next/server";
import { Promotion } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { createPromotion } from "@/sanity/lib/actions/promotions";

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

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await createPromotion(body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to create promotion" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 201 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Error creating promotion" },
            { status: 500 },
        );
    }
}
