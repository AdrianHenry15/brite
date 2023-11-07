import Image from "next/image";
import React from "react";

import Pic1 from "../../../public/assets/imgs/green-mountains.jpg";

const Jumbotron = () => {
    return (
        <div className="flex w-full justify-between relative">
            <Image className="h-fit w-fit flex items-center justify-center" src={Pic1} alt="pic" />
            <span
                className="
        absolute
                bg-gradient-to-br
                text-transparent 
                from-blue-600 
                to-zinc-200
                bg-clip-text 
                text-3xl
                w-1/2
                font-semibold
                opacity-75
                text-right
                md:text-6xl
                lg:text-7xl 
                "
            >
                Radiant Possibilities
            </span>
        </div>
    );
};

export default Jumbotron;
