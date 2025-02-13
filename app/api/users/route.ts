import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function GET() {
    const client = await clerkClient();
    try {
        const users = await client.users.getUserList();
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
}
