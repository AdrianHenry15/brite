import React from "react";

interface IPageBanner {
    children: React.ReactNode;
}

const PageBanner = () => {
    return (
        <div className="flex px-48 py-10 justify-center items-center">
            <span>This</span>
        </div>
    );
};

export default PageBanner;
