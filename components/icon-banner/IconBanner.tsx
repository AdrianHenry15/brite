import React from "react";

import IconItem from "./IconItem";

const IconBanner = () => {
    return (
        <section className="bg-white text-black w-full text-center py-24 px-4 flex flex-col md:flex-row">
            <IconItem />
            <IconItem />
            <IconItem />
        </section>
    );
};

export default IconBanner;
