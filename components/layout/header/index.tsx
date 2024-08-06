"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MobileHeader from "./MobileMenu";
import Logo from "../../../public/assets/icons/brite-logo.png";
import Button from "../../Button";
import { NavMenu } from "../../../lib/constants";
import { NavMenuType } from "../../../lib/types";
import { FaPhone } from "react-icons/fa6";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav
            id="nav-bar"
            className={`bg-zinc-200 text-sm font-semibold flex w-full self-center sticky top-0 z-50 shadow-md`}
        >
            {/* MOBILE CONTAINER */}
            <div className="absolute self-center right-0 lg:hidden">
                <MobileHeader />
            </div>
            {/* TITLE & LINKS  */}
            <div className="flex w-full mt-2 justify-evenly">
                <Link
                    className="absolute left-4 self-center flex items-center underline underline-offset-2 text-blue-500 lg:hidden"
                    href="tel:7048423535"
                >
                    <FaPhone className="mr-2" />
                    <span>704-842-3535</span>
                </Link>
                <div className="flex items-center">
                    <Link href="/" className="lg:mr-10">
                        {/* TODO: LOGO */}
                        <Image className="pb-2" src={Logo} alt="logo" width={75} />
                    </Link>
                    {/* LINKS  */}
                    <ul className="hidden text-gray-600 items-center lg:flex">
                        {NavMenu.map((item: NavMenuType) => (
                            <li
                                className={`mx-2 transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline ${
                                    pathname === item.link ? "underline" : ""
                                }`}
                                key={item.title}
                            >
                                <Link href={item.link} className="">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* NAV BUTTONS */}
                <ul className="hidden items-center lg:flex">
                    <Link className="mr-4" href="tel:7048423535">
                        <Button
                            leftChildren
                            roundedFull
                            name="704-842-3535"
                            className="bg-white"
                            altColor
                        >
                            <FaPhone className="mr-2" />
                        </Button>
                    </Link>
                    <Link href={"/estimate"}>
                        <Button
                            className="animate-pulse"
                            roundedFull
                            name="Get Your Free Estimate"
                        />
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
