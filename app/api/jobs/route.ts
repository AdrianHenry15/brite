import { createJob, getAllJobs } from "@/sanity/lib/actions/jobs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const jobs = await getAllJobs();
        return NextResponse.json(jobs, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Failed to fetch jobs" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await createJob(body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to create job" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Error creating job" }, { status: 500 });
    }
}
