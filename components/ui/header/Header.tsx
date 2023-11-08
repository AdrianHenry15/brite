"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../../../public/assets/icons/brite-logo.png";
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
    const MobileDropdownClass =
        "flex flex-col w-full items-center my-4 z-20 bg-blue-400 rounded-lg p-4 text-sm md:w-2/3 lg:w-1/3";

    return (
        <nav className="flex w-full md:h-32 h-20 lg:h-40 z-50 text-black justify-center">
            <div className="flex items-center justify-between w-2/3">
                {/* LOGO  */}
                <div className="w-full flex items-center">
                    <Link className="w-full" href={"/"}>
                        <Image className="w-1/4 md:w-1/6 lg:w-1/2" alt="logo" src={Logo} />
                    </Link>
                    {/* MENU | MED & SMALL SCREENS*/}
                    {!menu && (
                        <RxHamburgerMenu
                            onClick={() => toggleMenu(true)}
                            className="lg:hidden cursor-pointer mr-4"
                            size={25}
                        />
                    )}
                    {menu && (
                        <AiOutlineClose
                            onClick={() => toggleMenu(false)}
                            className="lg:hidden  cursor-pointer mr-4"
                            size={25}
                        />
                    )}
                </div>
                {/* MOBILE DROPDOWN */}
                {menu && (
                    <div
                        className="
                            absolute 
                            bg-white 
                            w-full 
                            top-20 
                            right-0
                            flex 
                            flex-col 
                            items-center 
                            z-50 
                            pb-8
                            md:top-32 
                            lg:top-32 
                        "
                    >
                        <HeaderLink
                            mobile
                            onClick={() => toggleResidentialOptions(!residential)}
                            name="Residential"
                            isDropdown
                        />
                        {/* MOBILE RESIDENTIAL DROPDOWN */}
                        {residential && (
                            <div className={MobileDropdownClass}>
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
                        <HeaderLink
                            mobile
                            onClick={() => toggleCommercialOptions(!commercial)}
                            name="Commercial"
                            isDropdown
                        />
                        {/* MOBILE COMMERCIAL DROPDOWN  */}
                        {commercial && (
                            <div className={MobileDropdownClass}>
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
                        <HeaderLink
                            mobile
                            onClick={() => toggleAboutOptions(!about)}
                            name="About"
                            isDropdown
                        />
                        {/* MOBILE ABOUT DROPDOWN  */}
                        {about && (
                            <div className={MobileDropdownClass}>
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
                        <HeaderLink name="Locations" />
                        <HeaderLink name="Blog" />
                        <HeaderLink className="bg-blue-500" name="Get Your Free Estimate" />
                    </div>
                )}
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
                                onMouseLeave={() => toggleCommercialOptions(false)}
                                onMouseEnter={() => toggleCommercialOptions(true)}
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
                        {/* ABOUT DROPDOWN  */}
                        {about && (
                            <div
                                onMouseLeave={() => toggleAboutOptions(false)}
                                onMouseEnter={() => toggleAboutOptions(true)}
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
                    <HeaderLink
                        className="bg-blue-500 min-w-[205px] whitespace-nowrap text-center"
                        name="Get Your Free Estimate"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;
