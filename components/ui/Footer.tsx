"use client";

import React from "react";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import AMPLogo from "../../public/assets/imgs/amp-logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        // FULL CONTAINER
        <div className="w-full flex flex-col justify-center">
            {/* <div className="flex flex-col w-full justify-center"> */}
            {/* CONTACT/LOGO CONTAINER  */}
            <div className="flex flex-col lg:flex-row justify-center items-center w-full py-10">
                {/* CONTACT  */}
                <div className="flex text-center lg:text-right flex-col text-xs w-full flex-1 lg:mr-10">
                    <span className="font-bold pb-4">Contact Us</span>
                    <span className="text-gray-400 pb-4">10130 Mallard Creek Rd. Suite 300 Charlotte, NC 28262</span>
                    <div className="flex flex-col text-gray-400">
                        <div className="pb-4">
                            <span>Office: </span>
                            <a href="tel:7049445574">704-944-5574</a>
                        </div>
                        <div className="pb-4">
                            <span>Email: </span>
                            <a href="email:info@britellc.net">info@britellc.net</a>
                        </div>
                    </div>
                </div>
                {/* IMAGE  */}
                <div className="flex w-full flex-1 justify-center lg:justify-start lg:ml-10">
                    <Image
                        src={AMPLogo}
                        alt="amp-logo"
                        className="lg:w-[200px] lg:h-[50px] md:w-[200px] md:h-[50px] w-[150px] h-[50px] rounded-lg flex"
                    />
                </div>
            </div>
            {/* SOCIALS  */}
            <div className="flex w-full justify-center mt-10">
                <a target="_blank" href="https://www.facebook.com/britelightingllc" className="m-2">
                    <AiFillFacebook size={22} />
                </a>
                <a target="_blank" href="https://www.instagram.com/britelightingllc/" className="m-2">
                    <AiOutlineInstagram size={22} />
                </a>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Footer;
