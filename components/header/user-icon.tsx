"use client";

import { useState } from "react";
import { BillIcon, CubeIcon, DashboardIcon } from "@sanity/icons";
import { Monitor, Moon, Sun } from "lucide-react";
import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import SignInModal from "@/components/user/sign-in-modal";
import { isAdmin } from "@/lib/check-admin";

function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();

    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    const Icon = theme === "dark" ? Moon : theme === "system" ? Monitor : Sun;

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Switch theme to ${nextTheme}`}
            title={`Theme: ${theme ?? "system"}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-muted hover:text-primary"
        >
            <Icon className="h-4 w-4" />
        </button>
    );
}

export default function UserIcon() {
    const { user } = useUser();
    const [showSignIn, setShowSignIn] = useState(false);
    const router = useRouter();

    const userEmail = user?.primaryEmailAddress?.emailAddress;

    return (
        <ClerkLoaded>
            {user ? (
                <div className="flex min-w-0 items-center gap-2">
                    <ThemeToggleButton />

                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox:
                                    "h-10 w-10 border border-border ring-0 transition hover:ring-2 hover:ring-primary",
                                userButtonPopoverCard:
                                    "border border-border bg-card text-card-foreground shadow-xl",
                                userButtonPopoverActionButton:
                                    "text-card-foreground hover:bg-muted",
                                userButtonPopoverActionButtonText: "text-card-foreground",
                            },
                        }}
                    ></UserButton>

                    <div className="hidden min-w-0 text-xs sm:block">
                        <p className="text-muted-foreground">Welcome Back</p>
                        <p className="max-w-[130px] truncate font-bold text-foreground">
                            {user.fullName ?? "User"}!
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <ThemeToggleButton />

                    <button
                        type="button"
                        onClick={() => setShowSignIn(true)}
                        className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Sign In
                    </button>

                    {showSignIn && <SignInModal setShowSignIn={setShowSignIn} />}
                </div>
            )}
        </ClerkLoaded>
    );
}
