"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80 px-6 py-24 text-primary-foreground">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-12 -top-12 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
                <div className="absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-primary-foreground/20 blur-2xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                    Brighten Charlotte <br />
                    <span className="text-primary-foreground/80">With Brite</span>
                </h1>

                <p className="mb-8 text-base font-light leading-relaxed text-primary-foreground/85 sm:text-lg md:text-xl">
                    We're on a mission to make Charlotte cleaner and brighter, one project at a
                    time. Join our professional team and be part of the change.
                </p>

                <Link
                    href="/careers/job-openings"
                    className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-base font-bold text-primary shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-primary-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    View Open Positions
                </Link>
            </div>
        </section>
    );
};

export default Hero;
