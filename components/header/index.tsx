"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

import MobileHeader from "./mobile-menu";
import Logo from "@/public/assets/icons/brite-logo.png";
import { NavMenu } from "../../lib/constants";
import { NavMenuType } from "@/lib/types";
import UserIcon from "./user-icon";
import Button from "@/components/button";
import PromotionalBanner from "../promo-stuff/promotional-banner";
import ButtonRow from "@/app/(root)/(routes)/(home)/components/button-row";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
            <ButtonRow />

            <nav className="w-full">
                <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Mobile left */}
                    <div className="flex w-14 items-center xl:hidden">
                        <UserIcon />
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Brite Exterior Cleaning home"
                        className="flex shrink-0 items-center justify-center"
                    >
                        <Image
                            src={Logo}
                            alt="Brite Exterior Cleaning logo"
                            width={72}
                            priority
                            className="h-auto"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <ul className="hidden items-center justify-center gap-1 xl:flex">
                        {NavMenu.map((item: NavMenuType) => {
                            const isActive = pathname === item.link;

                            return (
                                <li key={item.title}>
                                    <Link
                                        href={item.link}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                                            isActive
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:bg-muted hover:text-primary"
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-3 xl:flex">
                        <Link href="tel:7048423535">
                            <Button
                                leftChildren
                                roundedFull
                                name="704-842-3535"
                                className="border border-border bg-card text-card-foreground hover:bg-muted"
                                altColor
                            >
                                <FaPhone className="mr-2" />
                            </Button>
                        </Link>

                        <Link href="/estimate">
                            <Button
                                roundedFull
                                name="Get Your Free Estimate"
                                className="bg-primary text-primary-foreground hover:bg-brite-blue"
                            />
                        </Link>

                        <UserIcon />
                    </div>

                    {/* Mobile right */}
                    <div className="flex w-14 items-center justify-end xl:hidden">
                        <MobileHeader />
                    </div>
                </div>

                {/* Mobile phone CTA */}
                <div className="border-t border-border px-4 py-2 xl:hidden">
                    <Link
                        href="tel:7048423535"
                        className="mx-auto flex w-fit items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                    >
                        <FaPhone className="mr-2" />
                        704-842-3535
                    </Link>
                </div>
            </nav>

            <PromotionalBanner />
        </header>
    );
}
