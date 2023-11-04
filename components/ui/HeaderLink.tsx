import Link from "next/link";
import React from "react";

import { BiSolidDownArrow } from "react-icons/bi";

interface IHeaderLinkProps {
    name: string;
    mobile?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
    isDropdown?: boolean;
}

const HeaderLink = (props: IHeaderLinkProps) => {
    const LinkClass = "flex items-center hover:bg-blue-400 p-4 rounded-lg transition ease-in duration-300";
    const Source = props.name.toLowerCase().replace(" ", "-");
    if (!props.mobile) {
        return (
            <Link
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                className={`${LinkClass} ${props.className}`}
                href={Source}
            >
                {props.name}
                {props.isDropdown && <BiSolidDownArrow className="ml-2" size={12} />}
            </Link>
        );
    } else {
        return (
            <span className={`${LinkClass} ${props.className} cursor-pointer`} onClick={props.onClick}>
                {props.name}
                {props.isDropdown && <BiSolidDownArrow className="ml-2" size={12} />}
            </span>
        );
    }
};

export default HeaderLink;
