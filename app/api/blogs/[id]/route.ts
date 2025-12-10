import { deleteBlogById, getBlogById, updateBlog } from "@/sanity/lib/actions/blogs";
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const blog = await getBlogById(id);

        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(blog, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message ?? "Failed to fetch blog" }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: Params) {
    const { id } = await params;

    try {
        const data = await req.json();
        const result = await updateBlog(id, data);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to update blog" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to update blog" },
            { status: 500 },
        );
    }
}

export async function DELETE(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const result = await deleteBlogById(id); // if you want slug-based deletion

        if (!result.success) {
            return NextResponse.json(
                { error: result.message ?? "Failed to delete blog" },
                { status: 400 },
            );
        }

        return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Failed to delete blog" },
            { status: 500 },
        );
    }
}
