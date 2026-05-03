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

export default function Navbar() {
    const pathname = usePathname();

    const renderNavMenu = () => {
        return NavMenu.map((item: NavMenuType) => {
            const isActive = pathname === item.link;

            return (
                <li key={item.title}>
                    <Link
                        href={item.link}
                        aria-current={isActive ? "page" : undefined}
                        className={`mx-2 flex items-center rounded-full px-3 py-2 transition-colors duration-200 ${
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-primary"
                        }`}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        });
    };

    return (
        <nav
            id="nav-bar"
            className="sticky top-0 z-50 flex w-full self-center border-b border-border bg-background/90 pb-14 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md xl:pb-0"
        >
            <div className="absolute right-0 top-12 self-center xl:top-0 xl:hidden">
                <MobileHeader />
            </div>

            <div className="absolute left-0 top-16 ml-4 self-center xl:top-0 xl:hidden">
                <UserIcon />
            </div>

            <div className="mt-2 flex w-full justify-evenly">
                <Link
                    className="absolute top-24 flex items-center self-center rounded-full border border-border bg-card px-6 py-2 text-primary underline underline-offset-2 shadow-sm transition-colors hover:bg-muted xl:left-4 xl:top-0 xl:hidden"
                    href="tel:7048423535"
                >
                    <FaPhone className="mr-2" />
                    <span>704-842-3535</span>
                </Link>

                <div className="flex items-center">
                    <Link href="/" className="xl:mr-10" aria-label="Brite Exterior Cleaning home">
                        <Image
                            className="pb-2"
                            src={Logo}
                            alt="Brite Exterior Cleaning logo"
                            width={75}
                            priority
                        />
                    </Link>

                    <ul className="hidden items-center xl:flex">{renderNavMenu()}</ul>
                </div>

                <ul className="hidden items-center xl:flex">
                    <li>
                        <Link className="mr-4" href="tel:7048423535">
                            <Button
                                leftChildren
                                roundedFull
                                name="704-842-3535"
                                className="border border-border bg-card text-card-foreground hover:bg-muted xl:mt-5 xl:mr-4"
                                altColor
                            >
                                <FaPhone className="mr-2" />
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link href="/estimate">
                            <Button
                                className="animate-pulse bg-primary text-primary-foreground hover:bg-brite-blue"
                                roundedFull
                                name="Get Your Free Estimate"
                            />
                        </Link>
                    </li>

                    <li className="ml-4">
                        <UserIcon />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
