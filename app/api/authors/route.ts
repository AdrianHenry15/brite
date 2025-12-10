import { createAuthor, getAllAuthors } from "@/sanity/lib/actions/authors";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const authors = await getAllAuthors();
        return NextResponse.json(authors, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to fetch authors" },
            { status: 500 },
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await createAuthor(body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to create author" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 201 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Error creating author" },
            { status: 500 },
        );
    }
}
