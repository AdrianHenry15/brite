import { deleteAuthorById, getAuthorById, updateAuthor } from "@/sanity/lib/actions/authors";
import { NextResponse } from "next/server";

interface Params {
    params: { id: string };
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const author = await getAuthorById(id);

        if (!author) {
            return NextResponse.json({ error: "Author not found" }, { status: 404 });
        }

        return NextResponse.json(author, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Failed to fetch author" },
            { status: 500 },
        );
    }
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const body = await req.json();
        const result = await updateAuthor(id, body);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to update author" }, { status: 400 });
        }

        return NextResponse.json(result.data, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Error updating author" },
            { status: 500 },
        );
    }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const result = await deleteAuthorById(id);

        if (!result.success) {
            return NextResponse.json({ error: "Failed to delete author" }, { status: 400 });
        }

        return NextResponse.json({ message: "Author deleted successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Error deleting author" },
            { status: 500 },
        );
    }
}
