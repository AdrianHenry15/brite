import React from "react";
import PageContainer from "./PageContainer";
import PageBtn from "./buttons/PageBtn";

interface IImgContainerProps {
    text: string;
    path: string;
    pageBtnText: string;
    img: string;
}

const ImgContainer = (props: IImgContainerProps) => {
    return (
        <PageContainer className="w-full h-screen justify-center items-center text-center bg-black text-white">
            <img src={props.img} alt="client-img" className="absolute opacity-75" />
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
