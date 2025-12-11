import { clerkClient } from "@/clerk/client";
import { sanityClient } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

// GET: Fetch all Clerk users
export async function GET() {
    try {
        const users = await clerkClient.users.getUserList({ limit: 100 });

        return NextResponse.json({
            data: users.data,
            totalCount: users.totalCount,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
}

// POST: Create Clerk + Sanity user
export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, password, imageUrl } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // 1. Create Clerk user
        const clerkUser = await clerkClient.users.createUser({
            firstName,
            lastName,
            emailAddress: [email],
            password,
            publicMetadata: {
                imageUrl,
            },
        });

        const clerkId = clerkUser.id;

        // 2. Create Sanity user mapped to Clerk ID
        const sanityUser = await sanityClient.create({
            _type: "user",
            _id: `clerk-${clerkId}`,
            clerkId,
            firstName,
            lastName,
            fullName: `${firstName} ${lastName}`,
            email,
            imageUrl: imageUrl || "",
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                clerkUser,
                sanityUser,
                message: "User created successfully",
            },
            { status: 201 },
        );
    } catch (err: any) {
        console.error("Clerk error DETAILS:", JSON.stringify(err, null, 2));

        return NextResponse.json(
            {
                message: "Failed to create user",
                clerkErrors: err?.errors ?? null,
            },
            { status: err?.status || 500 },
        );
    }
}
