import React from "react";
import Image from "next/image";

interface IImgTextProps {
    src: any;
    name: string;
    imgClass?: string;
}

const ImgTextOverlay = (props: IImgTextProps) => {
    return (
        <section className="relative flex w-full">
            <Image
                className={`${props.imgClass} object-cover w-full h-[80vh] md:h-[80vh] lg:h-[75vh] opacity-75`}
                src={props.src}
                alt={props.name}
            />

            {/* Text overlay */}
            <div
                className={`absolute w-full flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-around flex-col items-center`}
            >
                <h5 className="font-semibold tracking-wider underline-offset-2 italic text-5xl p-4 text-white drop-shadow-xl">
                    {props.name}
                </h5>
            </div>
        </section>
    );
};

export default ImgTextOverlay;
