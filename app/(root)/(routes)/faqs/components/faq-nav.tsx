"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { NavMenuType } from "@/lib/types";

interface FAQSidebarNavProps {
    items: NavMenuType[];
}

export default function FAQSidebarNav({ items }: FAQSidebarNavProps) {
    const [activeHash, setActiveHash] = useState("#brite");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const activeItem = useMemo(
        () => items.find((item) => item.link === activeHash),
        [items, activeHash],
    );

    const getFAQScrollOffset = () => {
        const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

        return isLargeScreen ? 200 : 660;
    };
    const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        event.preventDefault();

        const targetElement = document.getElementById(link.replace("#", ""));
        if (!targetElement) return;

        setActiveHash(link);
        setDropdownOpen(false);

        window.scrollTo({
            top: window.scrollY + targetElement.getBoundingClientRect().top - getFAQScrollOffset(),
            behavior: "smooth",
        });
    };

    return (
        <aside className="mb-6 w-full sticky top-64 lg:h-fit lg:w-1/3 lg:self-start">
            <nav
                className="sticky top-64 z-40 rounded-2xl border border-border bg-card/95 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/80 lg:hidden"
                aria-label="FAQ navigation"
            >
                <button
                    type="button"
                    onClick={() => setDropdownOpen((current) => !current)}
                    className="flex w-full items-center justify-between rounded-xl bg-muted px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                    aria-expanded={dropdownOpen}
                >
                    <span>{activeItem?.title ?? "FAQ Sections"}</span>
                    {dropdownOpen ? (
                        <FaChevronUp className="text-primary" size={14} />
                    ) : (
                        <FaChevronDown className="text-primary" size={14} />
                    )}
                </button>

                {dropdownOpen && (
                    <div className="mt-3 flex max-h-[40vh] flex-col gap-1 overflow-y-auto pr-1">
                        {items.map((item) => {
                            const isActive = activeHash === item.link;

                            return (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    onClick={(event) => handleScrollToSection(event, item.link)}
                                    className={[
                                        "rounded-lg px-4 py-3 text-sm transition-colors",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                    ].join(" ")}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>

            <nav
                className="hidden rounded-2xl border border-border bg-card p-5 shadow-sm lg:block"
                aria-label="FAQ sidebar navigation"
            >
                <div className="mb-5 border-b border-border pb-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        FAQ Navigation
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-foreground">Browse by topic</h2>
                </div>

                <div className="flex flex-col gap-1">
                    {items.map((item) => {
                        const isActive = activeHash === item.link;

                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                onClick={(event) => handleScrollToSection(event, item.link)}
                                className={[
                                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                ].join(" ")}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
