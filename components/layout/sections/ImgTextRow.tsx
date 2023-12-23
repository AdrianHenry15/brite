import Image from "next/image";
import React from "react";

interface IImgTextRowProps {
    imgLeft?: boolean;
    imgTopOnMobile?: boolean;
    textLeft?: boolean;
    src: any;
    link: string;
    title: string;
    description: string;
}

const ImgTextRow = (props: IImgTextRowProps) => {
    return (
        <section className="hidden items-center px-4 py-10 md:flex md:w-full md:justify-center">
            <div className="self-center md:w-[1200px] md:flex">
                {/* IMAGE */}
                {props.imgLeft || props.imgTopOnMobile ? (
                    <div className="md:flex md:flex-1">
                        <Image src={props.src} alt={props.title} />
                    </div>
                ) : null}
                {/* TEXT */}
                <div
                    className={`${
                        props.textLeft
                            ? "md:text-left md:items-start"
                            : "md:text-right md:items-end"
                    } md:flex md:flex-1 md:flex-col`}
                >
                    <h5 className="font-semibold py-6 text-2xl">{props.title}</h5>
                    <p className="text-light text-sm text-zinc-950 px-4 md:max-w-md lg:max-w-lg">
                        {props.description}
                    </p>
                </div>
                {/* IMAGE */}
                {!props.imgLeft ? (
                    <div className="md:flex md:flex-1">
                        <Image src={props.src} alt={props.title} />
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default ImgTextRow;
