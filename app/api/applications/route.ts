import { createApplication, getAllApplications } from "@/sanity/lib/actions/applications";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const apps = await getAllApplications();
        return NextResponse.json(apps, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to fetch applications" },
            { status: 500 },
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const result = await createApplication(body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to create application" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 201 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to process application creation" },
            { status: 500 },
        );
    }
}
