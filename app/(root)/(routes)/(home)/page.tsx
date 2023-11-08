"use client";

import React from "react";

import Jumbotron from "../../../../components/ui/home/Jumbotron";
import LightingPromo from "../../../../components/ui/home/LightingPromo";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Jumbotron />
            <LightingPromo />
        </div>
    );
};

export default Home;
