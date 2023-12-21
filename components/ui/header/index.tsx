"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MobileHeader from "./MobileMenu";

import { NavMenuItems } from "../../../lib/constants";

import logo from "../../../public/assets/icons/brite-logo.png";
import NavButton from "./NavButton";
import { NavMenu } from "../../../lib/types";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={`bg-white text-sm font-semibold flex w-full self-center sticky top-0 z-50`}>
            {/* MOBILE CONTAINER */}
            <div className="fixed self-center right-0 lg:hidden">
                <MobileHeader />
            </div>
            {/* TITLE & LINKS  */}
            <div className="flex w-full mt-2 justify-evenly">
                <div className="flex items-center">
                    <Link href="/" className="lg:mr-10">
                        {/* TODO: LOGO */}
                        <Image className="" src={logo} alt="logo" width={100} />
                    </Link>
                    {/* LINKS  */}
                    <ul className="hidden text-gray-600 self-center lg:flex">
                        {NavMenuItems.map((item: NavMenu) => (
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
                <ul className="self-center hidden lg:flex">
                    <NavButton name="Contact Us" link="/contact-us" altColor />
                    <NavButton name="Get Your Free Estimate" link="/estimate" />
                </ul>
            </div>
        </nav>
    );
}
