import React from "react";

import { TbStarsFilled } from "react-icons/tb";
import Button from "../buttons/Button";

const Guarantee = () => {
    return (
        <div className="flex flex-col py-8 px-48 justify-center items-center text-white bg-sky-600  lg:h-96 lg:flex-row">
            <TbStarsFilled className="flex flex-1 text-yellow-600" size={275} />
            <div className="flex flex-col flex-1 items-center lg:items-start">
                <span className="font-extrabold text-3xl my-4">The Brite Guarantee</span>
                <span className="text-lg text-center lg:text-left">
                    We will do it right the first time and we promise that if you are not completely
                    satisfied, we'll make it right or give you a full refund.
                </span>
                <Button
                    isLink
                    link="/about"
                    text="Learn More About The Brite Guarantee"
                    textClass="text-black font-bold"
                    btnClass="border-white hover:bg-sky-900 w-[300px] duration-300 bg-white"
                />
            </div>
        </div>
    );
};

export default Guarantee;
