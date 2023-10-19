import React from "react";
import ImgContainer from "../../components/ImgContainer";
import Pic1 from "../../assets/imgs/brite-pic-5.jpg";
import Pic2 from "../../assets/imgs/brite-pic-9.jpg";

const Home = () => {
    return (
        <div>
            <ImgContainer text={"The Future is Brite"} path={"/estimate"} pageBtnText={"Request An Estimate"} img={Pic1} />
            <div className="flex flex-col w-full justify-center items-center p-10">
                <span className="lg:text-2xl md:text-2xl text-lg pb-4">Premium Outdoor Lighting Systems</span>
                <span className="text-xs">Christmas | Landscape | Hardscape</span>
            </div>
            <ImgContainer text={"Design | Install | Maintain"} path={"/work"} pageBtnText={"Our Work"} img={Pic2} />
        </div>
    );
};

export default Home;
