import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server"; // <-- Correct
import { sanityClient } from "@/sanity/lib/client";
import { clerkClient } from "@/clerk/client";

interface Params {
    params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        // Fetch user from Clerk
        const clerkUser = await currentUser();

        if (!clerkUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Example: Fetch related Sanity documents by userId
        const resumes = await sanityClient.fetch(
            `*[_type == "resume" && userId == $userId]{
                _id,
                resumeFile {
                    asset->{
                        url,
                        size,
                        originalFilename
                    }
                }
            }`,
            { userId: id },
        );

        return NextResponse.json(
            {
                id: clerkUser.id,
                fullName: clerkUser.fullName,
                email: clerkUser.emailAddresses.at(0)?.emailAddress,
                imageUrl: clerkUser.imageUrl,

                resumes: resumes || [],
            },
            { status: 200 },
        );
    } catch (error: any) {
        console.error("User fetch error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const updates = await req.json();
        const id = params.id;

        const [firstName, ...rest] = updates.fullName.split(" ");
        const lastName = rest.join(" ");

        const user = await clerkClient.users.updateUser(id, {
            firstName,
            lastName,
            publicMetadata: {
                imageUrl: updates.imageUrl ?? undefined,
            },
        });

        return NextResponse.json({ user });
    } catch (err) {
        console.error("Failed to update user:", err);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id;

        // 1. Delete Clerk User
        await clerkClient.users.deleteUser(id);

        // 2. Delete Sanity User
        await sanityClient.delete(`clerk-${id}`);

        return NextResponse.json({ message: "User deleted" });
    } catch (err) {
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}
