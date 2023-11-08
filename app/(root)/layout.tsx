import React from "react";
import Image from "next/image";

import Header from "../../components/ui/header/Header";
import Footer from "../../components/ui/Footer";

import Splash from "../../public/assets/imgs/green-mountains.jpg";
import Jumbotron from "../../components/ui/home/Jumbotron";

import "../globals.css";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full mb-10">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
