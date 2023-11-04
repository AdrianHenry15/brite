"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";

import Logo from "../../public/assets/icons/brite-logo.png";
import HeaderLink from "./HeaderLink";

const Header = () => {
    const [residential, setResidential] = useState(false);
    const [commercial, setCommercial] = useState(false);
    const [about, setAbout] = useState(false);
    const [menu, setMenu] = useState(false);

    const toggleResidentialOptions = (bool: boolean) => {
        setResidential(bool);
    };
    const toggleCommercialOptions = (bool: boolean) => {
        setCommercial(bool);
    };
    const toggleAboutOptions = (bool: boolean) => {
        setAbout(bool);
    };

    const toggleMenu = (bool: boolean) => {
        setMenu(bool);
    };

    // const LinkClass = "flex items-center hover:bg-blue-400 p-4 rounded-lg transition ease-in duration-300";
    const DropdownClass = "flex flex-col z-20 absolute pt-4 bg-blue-400 rounded-lg p-4 text-sm";

    return (
        <nav className="flex bg-white justify-evenly px-10 h-32 lg:h-auto">
            <div className="flex items-center lg:justify-evenly justify-between w-full">
                {/* LOGO  */}
                <Link className="w-1/6 lg:w-1/6 mr-20" href={"/"}>
                    <Image alt="logo" src={Logo} />
                </Link>
                {/* MENU | MED & SMALL SCREENS*/}
                <RxHamburgerMenu onClick={() => toggleMenu(true)} className="lg:hidden" size={25} />
                {/* MENU FOR LG SCREENS */}
                <div className="hidden lg:flex w-full items-center justify-evenly">
                    {/* RESIDENTIAL LINK AND DROPDOWN  */}
                    <div>
                        <HeaderLink
                            onMouseLeave={() => toggleResidentialOptions(false)}
                            onMouseEnter={() => toggleResidentialOptions(true)}
                            isDropdown
                            name="Residential"
                        />
                        {/* RESIDENTIAL DROPDOWN  */}
                        {residential && (
                            <div
                                onMouseLeave={() => toggleResidentialOptions(false)}
                                onMouseEnter={() => toggleResidentialOptions(true)}
                                className={DropdownClass}
                            >
                                {/* RESIDENTIAL DROPDOWN OPTIONS  */}
                                <Link className="py-4" href={"pro-window-cleaning"}>
                                    Professional Window Cleaning
                                </Link>
                                <Link className="py-4" href={"interior-glass-cleaning"}>
                                    Interior Glass Cleaning
                                </Link>
                                <Link className="py-4" href={"pressure-washing"}>
                                    Pressure Washing
                                </Link>
                                <Link className="py-4" href={"gutter-cleaning"}>
                                    Gutter Cleaning
                                </Link>
                                <Link className="py-4" href={"landscape-lighting"}>
                                    Landscape Lighting
                                </Link>
                                <Link className="py-4" href={"holiday-lighting"}>
                                    Holiday Lighting
                                </Link>
                            </div>
                        )}
                    </div>
                    {/* COMMERCIAL LINK AND DROPDOWN  */}
                    <div>
                        <HeaderLink
                            onMouseEnter={() => toggleCommercialOptions(true)}
                            onMouseLeave={() => toggleCommercialOptions(false)}
                            isDropdown
                            name="Commericial"
                        />
                        {/* COMMERCIAL DROPDOWN  */}
                        {commercial && (
                            <div
                                onMouseLeave={() => toggleResidentialOptions(false)}
                                onMouseEnter={() => toggleResidentialOptions(true)}
                                className={DropdownClass}
                            >
                                {/* RESIDENTIAL DROPDOWN OPTIONS  */}
                                <Link className="py-4" href={"construction-clean-up"}>
                                    Construction Clean Up
                                </Link>
                                <Link className="py-4" href={"real-estate-cleaning"}>
                                    Real Estate Cleaning
                                </Link>
                                <Link className="py-4" href={"retail-spaces"}>
                                    Retail Spaces
                                </Link>
                                <Link className="py-4" href={"retirement-homes"}>
                                    Retirement Homes
                                </Link>
                            </div>
                        )}
                    </div>
                    {/* ABOUT LINK AND DROPDOWN */}
                    <div>
                        <HeaderLink
                            onMouseEnter={() => toggleAboutOptions(true)}
                            onMouseLeave={() => toggleAboutOptions(false)}
                            isDropdown
                            name="About"
                        />
                        {/* COMMERCIAL DROPDOWN  */}
                        {about && (
                            <div
                                onMouseLeave={() => toggleResidentialOptions(false)}
                                onMouseEnter={() => toggleResidentialOptions(true)}
                                className={DropdownClass}
                            >
                                {/* RESIDENTIAL DROPDOWN OPTIONS  */}
                                <Link className="py-4" href={"brand-mission"}>
                                    Brand Mission & Values
                                </Link>
                                <Link className="py-4" href={"giving-back"}>
                                    Giving Back
                                </Link>
                                <Link className="py-4" href={"about"}>
                                    About Brite
                                </Link>
                                <Link className="py-4" href={"guarantee"}>
                                    Our Guarantee
                                </Link>
                                <Link className="py-4" href={"leadership-history"}>
                                    Leadership & History
                                </Link>
                            </div>
                        )}
                    </div>
                    <HeaderLink name="Locations" />
                    <HeaderLink name="Blog" />
                    <HeaderLink className="bg-blue-500" name="Get Your Free Estimate" />
                </div>
            </div>
        </nav>
    );
};

export default Header;
