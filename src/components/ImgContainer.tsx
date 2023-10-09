import React from "react";
import PageContainer from "./PageContainer";
import PageBtn from "./buttons/PageBtn";

interface IImgContainerProps {
    text: string;
    path: string;
    pageBtnText: string;
}

const ImgContainer = (props: IImgContainerProps) => {
    return (
        <PageContainer className="w-full h-screen justify-center items-center text-center bg-black text-white">
            <div className="flex flex-col items-center">
                {/* <span className="text-4xl">The Future is Brite</span> */}
                <span className="lg:text-4xl md:text-4xl text-2xl">{props.text}</span>
                {/* <PageBtn path="/estimate" text="Request An Estimate" /> */}
                <PageBtn path={props.path} text={props.pageBtnText} />
            </div>
        </PageContainer>
    );
};

export default ImgContainer;
