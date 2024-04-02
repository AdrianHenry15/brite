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
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const renderMobileDropdown = () => {
        return props.items.map((item, index) => {
            if (linkHash === item.link || index === 0) {
                return (
                    <nav
                        key={index}
                        className={`flex items-center w-full justify-between border-y-[1px] border-gray-600 p-4 z-50 md:hidden`}
                    >
                        <h5>{item.title}</h5>
                        {!dropdownOpen ? (
                            <FaChevronUp onClick={() => setDropdownOpen(true)} size={15} />
                        ) : (
                            <FaChevronDown onClick={() => setDropdownOpen(false)} size={15} />
                        )}
                    </nav>
                );
            } else {
                return (
                    <nav className="p-2 text-blue-600 text-sm md:hidden" key={index}>
                        {dropdownOpen && <Link href={item.link}>{item.title}</Link>}
                    </nav>
                );
            }
        });
    };

    const renderRegularNav = () => {
        return (
            <div className="hidden flex-col text-sm md:flex md:flex-1">
                {props.items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        onClick={() => setLinkHash(item.link)}
                        className={`pb-6 text-blue-600 hover:text-blue-950 ease-in-out duration-300 ${
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
        <div className="mb-24 w-full md:w-1/3">
            {renderMobileDropdown()}
            {renderRegularNav()}
        </div>
    );
};

export default FAQSidebarNav;
