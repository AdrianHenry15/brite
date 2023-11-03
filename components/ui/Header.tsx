"use client";

import React from "react";
import Logo from "@/public/assets/icons/light.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <nav className="w-full flex flex-col p-4">
            {/* LOGO  */}
            <div className="flex items-center justify-center w-full">
                <Link className="flex flex-col items-center" href="/">
                    <span className="text-xl mb-4">brite</span>
                    <Image src={Logo} alt="logo" width={25} />
                </Link>
            </div>
            {/* NAVIGATION */}
            <div className="flex w-full my-8 justify-between">
                <Link href="/">
                    <span className="hover:bg-blue-300 p-4 rounded-md text-sm flex">Home</span>
                </Link>
                <Link href="/estimate">
                    <span className="hover:bg-blue-300 p-4 rounded-md text-sm flex">Request Estimate</span>
                </Link>
                <Link href="/work">
                    <span className="hover:bg-blue-300 p-4 rounded-md text-sm flex">Our Work</span>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
