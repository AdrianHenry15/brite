import React from "react";

const Jumbotron = () => {
    return (
        <div className="flex w-full items-center justify-between relative bg-cover bg-[url('/assets/imgs/green-mountains.jpg')] h-80 md:h-[80vh] lg:h-[75vh]">
            <span
                className="
                z-20
                text-white
                text-3xl
                w-1/2
                font-semibold
                text-right
                md:text-6xl
                lg:text-7xl 
                "
            >
                Radiant <br /> Possibilities
            </span>
        </div>
    );
};

export default Jumbotron;
