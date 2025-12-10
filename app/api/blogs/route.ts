import { createBlog, getAllBlogs } from "@/sanity/lib/actions/blogs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const blogs = await getAllBlogs();
        return NextResponse.json(blogs, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to fetch blogs" },
            { status: 500 },
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await createBlog(body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to create blog" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Error creating blog" }, { status: 500 });
    }
}
