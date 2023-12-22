import React from "react";

import IconItem from "./IconItem";

interface IIconBannerProps {
    icon1: React.ReactNode;
    title1: string;
    description1: string;
    icon2: React.ReactNode;
    title2: string;
    description2: string;
    icon3: React.ReactNode;
    title3: string;
    description3: string;
}

const IconBanner = (props: IIconBannerProps) => {
    return (
        <section className="bg-white text-black w-full text-center py-24 px-4 flex flex-col md:flex-row">
            <IconItem icon={props.icon1} title={props.title1} description={props.description1} />
            <IconItem icon={props.icon2} title={props.title2} description={props.description2} />
            <IconItem icon={props.icon3} title={props.title3} description={props.description3} />
        </section>
    );
};

export default IconBanner;
