import {
    deleteApplicationById,
    getApplicationById,
    updateApplication,
} from "@/sanity/lib/actions/applications";
import { NextResponse } from "next/server";

interface Params {
    params: { id: string };
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const app = await getApplicationById(id);

        if (!app) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        return NextResponse.json(app, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to fetch application" },
            { status: 500 },
        );
    }
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const data = await req.json();

        const result = await updateApplication(id, data);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to update application" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to update application" },
            { status: 500 },
        );
    }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const result = await deleteApplicationById(id);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to delete application" }, { status: 400 });
        }

        return NextResponse.json({ message: "Application deleted successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to delete application" },
            { status: 500 },
        );
    }
}
