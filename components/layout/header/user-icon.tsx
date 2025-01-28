"use client";

import React, { useState } from "react";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { CubeIcon } from "@sanity/icons";
import SignInModal from "@/components/user/sign-in-modal";
import { useRouter } from "next/navigation";

const UserIcon = () => {
    const { user } = useUser();
    const [showSignIn, setShowSignIn] = useState(false);
    const userEmail = user?.emailAddresses[0].emailAddress;
    const isAdminEmail =
        userEmail === "adrianhenry2115@gmail.com" ||
        userEmail === "joey.mckenna@britellc.com" ||
        userEmail === "nick.walker@britellc.com";
    const router = useRouter();

    return (
        <ClerkLoaded>
            {user ? (
                <div className="flex items-center space-x-2">
                    <UserButton>
                        <UserButton.MenuItems>
                            {isAdminEmail && (
                                <UserButton.Action
                                    label="Brite Studio"
                                    labelIcon={<CubeIcon />}
                                    onClick={() => router.push("/studio")}
                                />
                            )}
                            {/* <UserButton.Action
                                label="Applications"
                                labelIcon={<BlockContentIcon />}
                                onClick={() => router.push("/careers/applications")}
                            /> */}
                        </UserButton.MenuItems>
                    </UserButton>
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
