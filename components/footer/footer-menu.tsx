"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AltNavMenu, NavMenu } from "../../lib/constants";

const FooterMenu = () => {
    const pathname = usePathname();

    const menuItems = [...NavMenu, ...AltNavMenu].filter(
        (item, index, array) => array.findIndex((match) => match.title === item.title) === index,
    );

    return (
        <nav className="flex flex-col items-center text-center md:items-start md:text-left">
            <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-foreground">
                Company
            </h5>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {menuItems.map((item) => {
                    const href = item.title === "Services" ? "/services" : item.link;
                    const isActive = pathname === href;

                    return (
                        <li key={`${item.title}-${href}`}>
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`transition-colors hover:text-primary ${
                                    isActive
                                        ? "font-semibold text-primary underline underline-offset-4"
                                        : "text-muted-foreground"
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
};

export default FooterMenu;
