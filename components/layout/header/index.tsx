"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MobileHeader from "./MobileMenu";
import Logo from "../../../public/assets/icons/brite-logo.png";
import Button from "../../Button";
import { NavMenu } from "../../../lib/constants";
import { FaPhone } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import ServicesMenu from "./ServicesMenu";
import { useState } from "react";
import { NavMenuType } from "../../../lib/types";

export default function Navbar() {
    // Constants
    const pathname = usePathname();

    // State
    const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

    // Functions
    const renderNavMenu = () => {
        return NavMenu.map((item: NavMenuType) => {
            if (item.title === "Services") {
                return (
                    <div className="relative cursor-pointer" key={item.title}>
                        <span
                            onClick={(e) => {
                                e.preventDefault();
                                setServicesMenuOpen(!servicesMenuOpen);
                            }}
                        >
                            <li
                                className={` flex items-center mx-2 transition-all duration-300 ease-in-out hover:text-blue-600 hover:underline ${
                                    pathname === item.link ? "underline" : ""
                                }`}
                            >
                                {item.title}
                                <BiChevronDown size={20} />
                            </li>
                        </span>
                        {servicesMenuOpen && (
                            <ServicesMenu setServicesMenuOpen={() => setServicesMenuOpen(false)} />
                        )}
                    </div>
                );
            } else {
                return (
                    <Link
                        onClick={() => setServicesMenuOpen(false)}
                        key={item.title}
                        href={item.link}
                        className="mr-2"
                    >
                        <li
                            className={` flex items-center mx-2 transition-all duration-300 ease-in-out hover:text-blue-600 hover:underline ${
                                pathname === item.link ? "underline" : ""
                            }`}
                        >
                            {item.title}
                        </li>
                    </Link>
                );
            }
        });
    };

    return (
        <nav
            id="nav-bar"
            className={`bg-zinc-200 text-sm font-semibold flex w-full self-center sticky top-0 z-50 shadow-md pb-14 lg:pb-0`}
        >
            {/* MOBILE CONTAINER */}
            <div className="absolute self-center right-0 top-12 lg:top-0 lg:hidden">
                <MobileHeader />
            </div>
            {/* TITLE & LINKS  */}
            <div className="flex w-full mt-2 justify-evenly">
                <Link
                    className="absolute bg-white px-6 py-2 rounded-full self-center flex items-center underline underline-offset-2 text-blue-500 top-24 lg:top-0 lg:left-4 lg:hidden"
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
                    <ul className="hidden text-gray-600 items-center lg:flex">{renderNavMenu()}</ul>
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
