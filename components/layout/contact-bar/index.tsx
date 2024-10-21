import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactBar = () => {
    return (
        <div className="flex items-center w-full z-[100] sticky top-[75px] bg-white/95 py-2 justify-between flex-col md:px-12 md:flex-row">
            <h5 className="text-black flex flex-1 font-semibold text-lg">Contact Us</h5>
            <div className="flex items-center flex-1 flex-col w-full md:flex-row">
                {/* Phone */}
                <Link
                    className="w-full flex justify-center mb-2 md:mb-0 md:mr-4"
                    href="tel:7048423535"
                >
                    <button className="bg-white flex justify-center items-center px-4 py-1 text-green-600 border-black border-2 rounded-full whitespace-nowrap w-[75%] md:w-min">
                        <FaPhone className="mr-2" />
                        <p className="text-sm">(704) 842-3535</p>
                    </button>
                </Link>

                {/* Email */}
                <Link className="w-full flex justify-center" href="email:joey.mckenna@britellc.com">
                    <button className="rounded-full py-1 px-4 bg-green-600 flex justify-center items-center w-[75%] md:w-min">
                        <MdEmail className="mr-2" />
                        <p className="text-sm">joey.mckenna@britellc.com</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactBar;
