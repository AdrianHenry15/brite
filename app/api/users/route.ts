import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

export async function GET() {
    try {
        const users = await clerkClient.users.getUserList();
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
}
