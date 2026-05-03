"use client";

import { SignIn } from "@clerk/nextjs";
import React, { useEffect } from "react";

interface SignInModalProps {
    setShowSignIn: (item: boolean) => void;
}

export default function SignInModal({ setShowSignIn }: SignInModalProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-[100] flex min-h-screen w-full items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
        >
            <button
                type="button"
                className="absolute inset-0 cursor-default"
                aria-label="Close sign in modal"
                onClick={() => setShowSignIn(false)}
            />

            <div className="relative z-10 flex w-full max-w-md items-center justify-center">
                <SignIn
                    routing="hash"
                    appearance={{
                        elements: {
                            rootBox: "mx-auto w-full",
                            card: "mx-auto w-full rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl",
                            headerTitle:
                                "text-center text-2xl font-bold tracking-tight text-foreground",
                            headerSubtitle: "text-center text-sm text-muted-foreground",
                            socialButtonsBlockButton:
                                "border border-border bg-background text-foreground hover:bg-muted",
                            formFieldLabel: "text-sm font-medium text-foreground",
                            formFieldInput:
                                "rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring",
                            formButtonPrimary:
                                "bg-primary text-primary-foreground hover:bg-primary/90",
                            footerActionText: "text-muted-foreground",
                            footerActionLink: "text-primary hover:text-primary/80",
                        },
                    }}
                />

                <button
                    type="button"
                    aria-label="Close sign in modal"
                    onClick={() => setShowSignIn(false)}
                    className="absolute right-14 top-2 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
