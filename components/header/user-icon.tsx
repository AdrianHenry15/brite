"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { isAdmin } from "@/lib/check-admin";
import { BillIcon, DashboardIcon } from "@sanity/icons";
import { User2 } from "lucide-react";
import SignInModal from "../user/sign-in-modal";

const UserIcon = () => {
    const { user } = useUser();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const userEmail = user?.emailAddresses[0]?.emailAddress;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

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
                        onClick={() => setShowSignIn((prev) => !prev)}
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
