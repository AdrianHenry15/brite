"use client";

import React, { useState } from "react";
import { BillIcon, CubeIcon, DashboardIcon } from "@sanity/icons";
import { Moon, Sun, Monitor } from "lucide-react";
import SignInModal from "@/components/user/sign-in-modal";
import { useRouter } from "next/navigation";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { isAdmin } from "@/lib/check-admin";

function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("system");
        else setTheme("light");
    };

    const Icon = theme === "dark" ? Moon : theme === "system" ? Monitor : Sun;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-muted hover:text-primary"
        >
            <Icon className="h-4 w-4" />
        </button>
    );
}

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
                        <UserButton.MenuItems>
                            <UserButton.Action
                                label="Toggle Theme"
                                onClick={() => {
                                    const root = document.documentElement;
                                    root.classList.toggle("dark");
                                }}
                                labelIcon={<Moon className="h-4 w-4" />}
                            />

                            {isAdmin(userEmail as string) ? (
                                <>
                                    <UserButton.Action
                                        label="Admin Dashboard"
                                        onClick={() => router.push("/admin/dashboard")}
                                        labelIcon={<DashboardIcon fontSize={18} />}
                                    />
                                    <UserButton.Action
                                        label="Brite Studio"
                                        onClick={() => router.push("/studio")}
                                        labelIcon={<CubeIcon fontSize={18} />}
                                    />
                                </>
                            ) : (
                                <UserButton.Action
                                    label="My Applications"
                                    onClick={() => router.push("/careers/my-applications")}
                                    labelIcon={<BillIcon />}
                                />
                            )}
                        </UserButton.MenuItems>
                    </UserButton>

                    <div className="hidden text-xs sm:block">
                        <p className="text-muted-foreground">Welcome Back</p>
                        <p className="font-bold text-foreground">{user.fullName}!</p>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <ThemeToggleButton />

                    <button
                        type="button"
                        onClick={() => setShowSignIn(true)}
                        className="rounded-full bg-primary px-4 py-2 font-bold text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brite-blue"
                    >
                        Sign In
                    </button>

                    {showSignIn && <SignInModal setShowSignIn={setShowSignIn} />}
                </div>
            )}
        </ClerkLoaded>
    );
};

export default UserIcon;
