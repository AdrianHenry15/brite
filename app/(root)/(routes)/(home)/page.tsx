"use client";

import React from "react";

import Jumbotron from "../../../../components/ui/home/Jumbotron";
import LightingXmasPromo from "../../../../components/ui/home/LightingXmasPromo";
import WelcomeMessage from "../../../../components/ui/home/WelcomeMessage";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Jumbotron />
            <LightingXmasPromo />
            <WelcomeMessage />
        </div>
    );
};

export default Home;
