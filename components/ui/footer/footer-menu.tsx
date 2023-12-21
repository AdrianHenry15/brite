import React from "react";
import Link from "next/link";

import { NavMenuAltItems, NavMenuItems } from "../../../lib/constants";

const FooterMenu = () => {
    return (
        <nav className="text-gray-400 text-sm flex-1 md:text-left">
            <h5 className="font-light text-2xl tracking-wider text-white">Company</h5>
            <ul className="text-xs">
                {NavMenuItems.map((item) => {
                    return (
                        <li key={item.title} className="my-4">
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    );
                })}
                {NavMenuAltItems.map((item) => {
                    return (
                        <li className="my-4" key={item.title}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FooterMenu;
