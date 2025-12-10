"use client";

import React, { useState } from "react";
import { BillIcon, CubeIcon, DashboardIcon } from "@sanity/icons";
import SignInModal from "@/components/user/sign-in-modal";
import { useRouter } from "next/navigation";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { isAdmin } from "@/lib/check-admin";
import { User2 } from "lucide-react";

const UserIcon = () => {
    const { user } = useUser();
    const [showSignIn, setShowSignIn] = useState(false);
    const router = useRouter();

    const userEmail = user?.emailAddresses[0]?.emailAddress;

    return (
        <ClerkLoaded>
            {user ? (
                <div className="flex items-center space-x-2">
                    <UserButton>
                        {isAdmin(userEmail as string) ? (
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="Admin Dashboard"
                                    onClick={() => router.push("/admin/dashboard")}
                                    labelIcon={<DashboardIcon color="red" fontSize={18} />}
                                />
                            </UserButton.MenuItems>
                        ) : (
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Applications"
                                    onClick={() => router.push("/careers/my-applications")}
                                    labelIcon={<BillIcon />}
                                />
                            </UserButton.MenuItems>
                        )}
                    </UserButton>
                    <div className="hidden sm:block text-xs">
                        <p className="text-gray-400">Welcome Back</p>
                        <p className="font-bold">{user.fullName}!</p>
                    </div>
                </div>
            ) : (
                <ClerkLoaded>
                    <button
                        onClick={() => setShowSignIn(true)}
                        className="bg-blue-500 hover:bg-blue-600/90 transition-all ease-in-out hover:scale-105 duration-300 text-white font-bold py-2 px-2 rounded-full"
                    >
                        <User2 />
                    </button>
                    {showSignIn && <SignInModal setShowSignIn={setShowSignIn} />}
                </ClerkLoaded>
            )}
        </ClerkLoaded>
    );
};

export default UserIcon;
