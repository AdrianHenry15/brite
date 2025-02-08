"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const allowedAdmins = [
    "adrianhenry2115@gmail.com",
    "joey.mckenna@britellc.com",
    "nick.walker@britellc.com",
];

export default function RequireAdmin({ children }: { children: React.ReactNode }) {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (isLoaded) {
            if (!user || !allowedAdmins.includes(user?.emailAddresses[0].emailAddress!)) {
                router.push("/");
            } else {
                setAuthorized(true);
            }
        }
    }, [user, isLoaded, router]);

    if (!authorized) return null; // Prevent UI mismatch

    return <>{children}</>;
}
