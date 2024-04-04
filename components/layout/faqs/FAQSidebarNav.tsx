"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavMenuType } from "../../../lib/types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface IFAQSidebarNavProps {
    items: NavMenuType[];
}

const FAQSidebarNav = (props: IFAQSidebarNavProps) => {
    const [linkHash, setLinkHash] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [navBarHeight, setNavBarHeight] = useState(0);

    useEffect(() => {
        // Get the height of the navigation bar
        const navBar = document.getElementById("#nav-bar");
        if (navBar) {
            setNavBarHeight(navBar.clientHeight);
        }

        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > navBarHeight) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const renderMobileDropdown = () => {
        return (
            <nav
                className={`${
                    sticky ? "fixed top-[71px] left-0 w-full bg-white" : ""
                } flex flex-col items-start w-full justify-between border-y-[1px] shadow-md border-zinc-200 p-4 z-50 transition-transform duration-500 ease-in-out md:hidden`}
            >
                {props.items.map((item, index) => {
                    if (linkHash === item.link || index === 0) {
                        return (
                            <div className="flex items-center justify-between w-full" key={index}>
                                <h5 className="text-blue-600 font-semibold">{item.title}</h5>
                                {!dropdownOpen ? (
                                    <FaChevronUp onClick={() => setDropdownOpen(true)} size={15} />
                                ) : (
                                    <FaChevronDown
                                        onClick={() => setDropdownOpen(false)}
                                        size={15}
                                    />
                                )}
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                {dropdownOpen && (
                                    <div
                                        className="py-4 px-8 text-blue-600 text-sm md:hidden"
                                        key={index}
                                    >
                                        {dropdownOpen && <Link href={item.link}>{item.title}</Link>}
                                    </div>
                                )}
                            </div>
                        );
                    }
                })}
            </nav>
        );
    };

    const renderRegularNav = () => {
        return (
            <div className="hidden flex-col text-sm pl-10 md:flex md:flex-1">
                {props.items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        onClick={() => setLinkHash(item.link)}
                        className={`pb-10 text-blue-600 hover:text-blue-950 ease-in-out duration-300 ${
                            linkHash === item.link
                                ? "underline underline-offset-4 text-blue-950"
                                : ""
                        }`}
                    >
                        <h5>{item.title}</h5>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <div className="mb-6 w-full md:w-1/3">
            {renderMobileDropdown()}
            {renderRegularNav()}
        </div>
    );
};

export default FAQSidebarNav;
