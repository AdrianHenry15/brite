"use client";

import React from "react";

import Jumbotron from "../../../../components/ui/home/Jumbotron";
import WelcomeMessage from "../../../../components/ui/home/WelcomeMessage";
import Guarantee from "../../../../components/ui/home/Guarantee";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Jumbotron />
            <WelcomeMessage />
            <Guarantee />
        </div>
    );
};

export default Home;
