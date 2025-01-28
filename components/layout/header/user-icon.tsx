"use client";

import React, { useState } from "react";
import { ClerkLoaded, SignIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { PackageIcon } from "@sanity/icons";
import SignInModal from "@/components/sign-in-modal";

const UserIcon = () => {
    const { user } = useUser();
    const [showSignIn, setShowSignIn] = useState(false);

    return (
        <ClerkLoaded>
            {user ? (
                <div className="flex items-center space-x-2">
                    <UserButton />
                    <div className="hidden sm:block text-xs">
                        <p className="text-gray-400">Welcome Back</p>
                        <p className="font-bold">{user.fullName}!</p>
                    </div>
                </div>
            ) : (
                <>
                    <button
                        onClick={() => setShowSignIn(true)}
                        className="bg-blue-500 hover:bg-blue-600 transition-all ease-in-out hover:scale-105 duration-300 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Sign In
                    </button>
                    {showSignIn && <SignInModal setShowSignIn={setShowSignIn} />}
                </>
            )}
        </ClerkLoaded>
    );
};

export default UserIcon;
