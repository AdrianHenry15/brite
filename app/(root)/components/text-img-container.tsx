import Image from "next/image";
import React from "react";

interface ITextImgContainerProps {
    title: string;
    description: string;
    img: any;
    textLeft?: boolean;
}

const TextImgContainer = (
    props: ITextImgContainerProps
) => {
    return (
        <div
            className={`${
                props.textLeft
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse text-right"
            } flex flex-col-reverse my-48`}
        >
            {/* LEFT/TEXT */}
            <div className="flex flex-col flex-1">
                <h5 className="font-semibold text-4xl my-4">
                    {props.title}
                </h5>
                <p>{props.description}</p>
            </div>
            {/* RIGHT/IMG */}
            <div className="flex flex-1 justify-center items-center">
                <Image
                    src={props.img}
                    alt="container-img"
                    className="object-cover h-[350px] w-[350px] rounded-full"
                />
            </div>
        </div>
    );
};

export default TextImgContainer;
