"use client";

import React from "react";
import Image from "next/image";

import Brite from "../../../public/assets/icons/brite-logo.png";
import ThirdGen from "../../../public/assets/icons/thirdgenstudios-logo.png";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";
import Link from "next/link";

const Footer = () => {
    return (
        // FULL CONTAINER
        <footer className="w-full bg-black text-white flex flex-col justify-center px-4">
            {/* FOOTER MENU */}
            <div className="flex flex-col self-center w-full md:flex-row md:py-2">
                <LogoCard />
                <div className="flex flex-col md:flex-row md:w-1/2 md:self-center">
                    <FooterMenu />
                    <ContactCard />
                </div>
            </div>
            {/* SOCIALS  */}
            <SocialsCard />
            {/* CREATED BY */}
            <div className="flex flex-col items-center justify-center text-center self-center w-full border-t-[1px] py-14 text-xs border-zinc-500">
                <div className="flex flex-col pt-4 items-center">
                    <p className="mb-4 text-xs">Created by</p>
                    {/* THIRD GEN LOGO */}
                    <Link href={"thirdgenerationstudios.com"}>
                        <Image className="w-32" src={ThirdGen} alt="third-gen-logo" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
