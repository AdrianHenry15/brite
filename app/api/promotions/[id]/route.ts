import {
    deletePromotionById,
    getPromotionById,
    updatePromotion,
} from "@/sanity/lib/actions/promotions";
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const promotion = await getPromotionById(id);

        if (!promotion) {
            return NextResponse.json({ error: "Promotion not found" }, { status: 404 });
        }

        return NextResponse.json(promotion, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to fetch promotion" },
            { status: 500 },
        );
    }
}

export async function PATCH(req: Request, { params }: Params) {
    const { id } = await params;

    try {
        const data = await req.json();
        const result = await updatePromotion(id, data);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to update promotion" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to update promotion" },
            { status: 500 },
        );
    }
}

export async function DELETE(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const result = await deletePromotionById(id);

        if (!result.success) {
            return NextResponse.json(
                { error: result.message ?? "Failed to delete promotion" },
                { status: 400 },
            );
        }

        return NextResponse.json({ message: "Promotion deleted successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to delete promotion" },
            { status: 500 },
        );
    }
}
