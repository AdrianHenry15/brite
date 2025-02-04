"use client";

import React, { useState } from "react";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { BillIcon, ClipboardIcon, CubeIcon } from "@sanity/icons";
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
                        {isAdminEmail ? (
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="Brite Studio"
                                    onClick={() => router.push("/studio")}
                                    labelIcon={<CubeIcon fontSize={18} />}
                                />
                                <UserButton.Action
                                    label="All Applications"
                                    onClick={() => router.push("/careers/admin/applications")}
                                    labelIcon={<BillIcon fontSize={18} />}
                                />
                                <UserButton.Action
                                    label="All Resumes"
                                    onClick={() => router.push("/careers/admin/resumes")}
                                    labelIcon={<ClipboardIcon fontSize={18} />}
                                />
                            </UserButton.MenuItems>
                        ) : (
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label={`My Applications`}
                                    onClick={() => router.push("/careers/my-applications")}
                                    labelIcon={<BillIcon />}
                                />
                                {/* <UserButton.Action
                                    label="My Resume"
                                    onClick={() => router.push("/careers/my-resume")}
                                    labelIcon={<ClipboardIcon />}
                                /> */}
                            </UserButton.MenuItems>
                        )}
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
