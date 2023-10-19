import React from "react";

interface IBannerProps {
    text: string;
}

const Banner = (props: IBannerProps) => {
    return (
        <div className="w-full justify-center flex border-[1px] border-gray-300 items-center p-2">
            <span className="text-xs text-center">{props.text}</span>
        </div>
    );
};

export default Banner;
