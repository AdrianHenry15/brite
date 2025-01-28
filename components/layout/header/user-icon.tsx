"use client";

import React from "react";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { PackageIcon } from "@sanity/icons";

const UserIcon = () => {
    const { user } = useUser();

    return (
        <ClerkLoaded>
            {user && (
                <Link
                    href={"/orders"}
                    className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded"
                >
                    <PackageIcon className="w-6 h-6" />
                    <span>My Orders</span>
                </Link>
            )}
            {user ? (
                <div className="flex items-center space-x-2">
                    <UserButton />
                    <div className="hidden sm:block text-xs">
                        <p className="text-gray-400">Welcome Back</p>
                        <p className="font-bold">{user.fullName}!</p>
                    </div>
                </div>
            ) : (
                <SignInButton mode="modal" />
            )}
        </ClerkLoaded>
    );
};

export default UserIcon;
