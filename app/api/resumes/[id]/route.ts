import { NextResponse } from "next/server";
import { getResumeById, updateResume, deleteResumeById } from "@/sanity/lib/actions/resumes";

interface Params {
    params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const resume = await getResumeById(id);

        if (!resume) {
            return NextResponse.json({ error: "Resume not found" }, { status: 404 });
        }

        return NextResponse.json(resume, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to fetch resume" },
            { status: 500 },
        );
    }
}

export async function PATCH(req: Request, { params }: Params) {
    const { id } = await params;

    try {
        const data = await req.json();
        const result = await updateResume({ id, ...data });

        if (!result.success) {
            return NextResponse.json({ error: "Failed to update resume" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to update resume" },
            { status: 500 },
        );
    }
}

export async function DELETE(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const result = await deleteResumeById(id);

        if (!result.success) {
            return NextResponse.json(
                { error: result.message ?? "Failed to delete resume" },
                { status: 400 },
            );
        }

        return NextResponse.json({ message: "Resume deleted successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to delete resume" },
            { status: 500 },
        );
    }
}
