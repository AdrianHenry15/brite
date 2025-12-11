import { clerkClient } from "@/clerk/client";
import { sanityClient } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

// GET: Fetch all users
export async function GET() {
    try {
        const users = await clerkClient.users.getUserList({
            limit: 100,
        });

        return NextResponse.json({
            data: users.data,
            totalCount: users.totalCount,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, imageUrl } = await req.json();

        // 1. Create Clerk user
        const clerkUser = await clerkClient.users.createUser({
            firstName,
            lastName,
            emailAddress: [email],
            publicMetadata: {
                imageUrl,
            },
        });

        const clerkId = clerkUser.id;

        // 2. Create Sanity user mapped to Clerk ID
        const sanityUser = await sanityClient.create({
            _type: "user",
            _id: `clerk-${clerkId}`, // prevents duplicates
            clerkId,
            fullName: `${firstName} ${lastName}`,
            email,
            imageUrl,
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({
            clerkUser,
            sanityUser,
            message: "User created successfully",
        });
    } catch (err) {
        console.error("User creation error:", err);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}
