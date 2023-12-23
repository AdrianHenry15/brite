"use client";

import React from "react";

import IconItem from "./IconItem";

interface IIconBannerProps {
    icon1: React.ReactNode;
    title1: string;
    description1: string;
    addBtn1?: boolean;
    link1?: string;
    icon2: React.ReactNode;
    title2: string;
    description2: string;
    addBtn2?: boolean;
    link2?: string;
    icon3: React.ReactNode;
    title3: string;
    description3: string;
    addBtn3?: boolean;
    link3?: string;
    dark?: boolean;
}

const IconBanner = (props: IIconBannerProps) => {
    return (
        <section
            className={`${
                props.dark ? "bg-black text-white" : "bg-white text-black"
            } w-full justify-evenly text-center py-24 px-4 flex flex-1 flex-col md:flex-row`}
        >
            <IconItem
                addBtn={props.addBtn1}
                link={props.link1}
                icon={props.icon1}
                title={props.title1}
                description={props.description1}
            />
            <IconItem
                addBtn={props.addBtn2}
                link={props.link1}
                icon={props.icon2}
                title={props.title2}
                description={props.description2}
            />
            <IconItem
                addBtn={props.addBtn3}
                link={props.link1}
                icon={props.icon3}
                title={props.title3}
                description={props.description3}
            />
        </section>
    );
};

export default IconBanner;
