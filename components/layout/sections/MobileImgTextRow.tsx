import Image from "next/image";
import React from "react";

interface IMobileImgTextRowProps {
    textLeft?: boolean;
    src: any;
    link: string;
    title: string;
    description: string;
}

const MobileImgTextRow = (props: IMobileImgTextRowProps) => {
    return (
        <section className="flex flex-col items-center px-4 pt-10 pb-24">
            <div className="">
                {/* IMAGE */}
                <div className="">
                    <Image src={props.src} alt={props.title} />
                </div>
                {/* TEXT */}
                <div
                    className={`${
                        props.textLeft ? "text-left items-start" : "text-right items-end"
                    } flex flex-1 flex-col`}
                >
                    <h5 className="font-semibold py-6 text-2xl">{props.title}</h5>
                    <p className="text-light text-sm text-zinc-950 px-4">{props.description}</p>
                </div>
            </div>
        </section>
    );
};

export default MobileImgTextRow;
