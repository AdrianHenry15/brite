import { deleteJobById, getJobById, updateJob } from "@/sanity/lib/actions/jobs";
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const job = await getJobById(id);

        if (!job) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        return NextResponse.json(job, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Failed to fetch job" }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: Params) {
    const { id } = await params;

    try {
        const data = await req.json();
        const result = await updateJob(id, data);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to update job" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Failed to update job" }, { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const result = await deleteJobById(id);

        if (!result.success) {
            return NextResponse.json(
                { error: result.message ?? "Failed to delete job" },
                { status: 400 },
            );
        }

        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Failed to delete job" }, { status: 500 });
    }
}
