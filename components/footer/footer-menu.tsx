"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AltNavMenu, NavMenu } from "../../lib/constants";

export default function FooterMenu() {
    const pathname = usePathname();

    const menuItems = [...NavMenu, ...AltNavMenu].filter(
        (item, index, array) => array.findIndex((match) => match.title === item.title) === index,
    );

    return (
        <nav className="flex flex-col items-center text-center md:items-start md:text-left">
            <h5 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Company
            </h5>

            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:justify-start">
                {" "}
                {menuItems.map((item) => {
                    const href = item.title === "Services" ? "/services" : item.link;
                    const isActive = pathname === href;

                    return (
                        <li key={`${item.title}-${href}`}>
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`transition-colors ${
                                    isActive
                                        ? "text-primary underline underline-offset-4"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
