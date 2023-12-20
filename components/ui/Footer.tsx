"use client";

import React from "react";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import AMPLogo from "../../public/assets/imgs/amp-logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        // FULL CONTAINER
        <footer className="w-full flex flex-col justify-center">
            {/* CONTACT/LOGO CONTAINER  */}
            <div className="flex flex-col lg:flex-row justify-center items-center w-full py-10">
                {/* CONTACT  */}
                <div className="flex text-center lg:text-right flex-col text-xs w-full flex-1 lg:mr-10">
                    <Link href={"/contact-us"} className="font-bold text-xl pb-4">
                        Contact Us
                    </Link>
                    <div className="w-full text-start">
                        <address className="text-gray-400 pb-4">
                            10130 Mallard Creek Rd. Suite 300 Charlotte, NC 28262
                        </address>
                        <div className="flex flex-col text-gray-400">
                            <div className="pb-4">
                                <label>Office: </label>
                                <Link href="tel:7049445574">704-944-5574</Link>
                            </div>
                            <div className="pb-4">
                                <label>Email: </label>
                                <Link href="email:info@britellc.net">info@britellc.net</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SOCIALS  */}
            <div className="flex w-full justify-center mt-10">
                <Link
                    target="_blank"
                    href="https://www.facebook.com/britelightingllc"
                    className="m-2"
                >
                    <AiFillFacebook size={22} />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.instagram.com/britelightingllc/"
                    className="m-2"
                >
                    <AiOutlineInstagram size={22} />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
