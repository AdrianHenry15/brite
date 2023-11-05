import React from "react";
import PageBtn from "./ui/buttons/PageBtn";
import Image, { StaticImageData } from "next/image";
import PageContainer from "./PageContainer";

interface IImgContainerProps {
    text: string;
    path: string;
    pageBtnText: string;
    img: any;
}

const ImgContainer = (props: IImgContainerProps) => {
    return (
        <PageContainer className="w-full h-screen justify-center items-center text-center bg-black text-white">
            <Image src={props.img} alt="client-img" className="absolute opacity-75 lg:w-1/2 md:w-1/2 w-2/3" />
            <Image src={props.img} alt="client-img" className="absolute opacity-75 lg:w-1/3 md:w-1/2 w-2/3" />
            <div className="flex flex-col items-center z-10">
                {/* <span className="text-4xl">The Future is Brite</span> */}
                <span className="lg:text-4xl md:text-4xl text-2xl text-white font-semibold">{props.text}</span>
                {/* <PageBtn path="/estimate" text="Request An Estimate" /> */}
                <PageBtn path={props.path} text={props.pageBtnText} btnClass="border-black bg-white" textClass="text-black" />
            </div>
        </PageContainer>
    );
};

export default ImgContainer;
