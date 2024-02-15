import Link from "next/link";
import React from "react";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const SocialsCard = () => {
    return (
        <div className="flex w-full justify-evenly py-10 border-y-[1px] border-zinc-900">
            <Link
                className="hover:scale-125 transition-all duration-300 ease-in-out"
                target="_blank"
                href="https://www.facebook.com/britelightingllc"
            >
                <AiFillFacebook size={25} />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/britelightingllc/">
                <AiOutlineInstagram
                    className="hover:scale-125 transition-all duration-300 ease-in-out"
                    size={25}
                />
            </Link>
        </div>
    );
};

export default SocialsCard;
