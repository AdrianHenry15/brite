"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MobileHeader from "./MobileMenu";
import AltLogo from "../../../public/assets/icons/brite-logo-alt.png";
import Button from "../../Button";
import { NavMenu } from "../../../lib/constants";
import { NavMenuType } from "../../../lib/types";
import UserIcon from "./user-icon/user-icon";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav
            id="nav-bar"
            className={`bg-white text-sm font-semibold flex w-full self-center sticky top-0 z-50 shadow-md`}
        >
            {/* MOBILE CONTAINER */}
            <div className="absolute self-center right-0 xl:hidden">
                <MobileHeader />
            </div>
            {/* TITLE & LINKS  */}
            <div className="flex w-full mt-2 justify-evenly">
                <div className="flex items-center">
                    <Link href="/" className="lg:mr-10">
                        {/* TODO: LOGO */}
                        <Image className="" src={AltLogo} alt="logo" width={100} />
                    </Link>
                    {/* LINKS  */}
                    <ul className="hidden text-gray-600 items-center xl:flex">
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
                <ul className="hidden items-center xl:flex">
                    <Link className="mr-4" href={"/contact-us"}>
                        <Button roundedFull name="Contact Us" altColor />
                    </Link>
                    <Link href={"/estimate"}>
                        <Button
                            className="animate-pulse"
                            roundedFull
                            name="Get Your Free Estimate"
                        />
                    </Link>
                    <div className="ml-4">
                        <UserIcon />
                    </div>
                </ul>
            </div>
        </nav>
    );
}
