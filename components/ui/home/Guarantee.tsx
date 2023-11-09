import React from "react";

import Stars from "../../../public/assets/imgs/stars.png";

import Button from "../buttons/Button";
import Image from "next/image";

const Guarantee = () => {
    return (
        <div className="flex flex-col justify-center items-center text-white bg-sky-600 px-10 pb-8 md:py-8 md:px-48 md:h-96 lg:flex-row">
            <Image
                className="flex flex-1 object-contain w-96 md:w-[275px]"
                src={Stars}
                alt="stars"
            />
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
