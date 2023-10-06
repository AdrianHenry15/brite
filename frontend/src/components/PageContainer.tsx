import React from "react";

interface IPageContainerProps {
    children: React.ReactNode;
    className?: string;
}

const PageContainer = (props: IPageContainerProps) => {
    return <div className={`flex flex-col p-6 ${props.className}`}>{props.children}</div>;
};

export default PageContainer;
