"use client";

import { isAdmin } from "@/lib/check-admin";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";
import toast from "react-hot-toast";
import UserProfileCard from "./components/user-profile-card";
import { User } from "@clerk/clerk-sdk-node";

export default async function AdminUserPage({ params }: { params: { id: string } }) {
    const userId = params.id;
    const { user } = useUser();
    const userEmail = user?.emailAddresses[0].emailAddress as string;

    useEffect(() => {
        // Ensure the logged-in user is an admin
        if (!userId || !isAdmin(userEmail)) {
            toast.error("You do not have permission to view this profile.");
            return;
        }
    }, [userId]);

    return (
        <div className="min-h-screen md:p-4">
            <UserProfileCard user={user} />
        </div>
    );
}
