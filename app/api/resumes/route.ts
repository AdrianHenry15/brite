import { NextResponse } from "next/server";
import { getAllResumes, createResume } from "@/sanity/lib/actions/resumes";

export async function GET() {
    try {
        const resumes = await getAllResumes();
        return NextResponse.json(resumes, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to fetch resumes" },
            { status: 500 },
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await createResume(body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to create resume" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 201 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Error creating resume" },
            { status: 500 },
        );
    }
}
