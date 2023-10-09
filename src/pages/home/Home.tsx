import React from "react";
import ImgContainer from "../../components/ImgContainer";

const Home = () => {
    return (
        <div>
            <ImgContainer text={"The Future is Brite"} path={"/estimate"} pageBtnText={"Request An Estimate"} />
            <div className="flex flex-col w-full justify-center items-center p-10">
                <span className="text-2xl pb-4">Premium Outdoor Lighting Systems</span>
                <span>Christmas | Landscape | Hardscape</span>
            </div>
            <ImgContainer text={"Design | Install | Maintain"} path={"/work"} pageBtnText={"Our Work"} />
        </div>
    );
};

export default Home;
