import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 text-white py-24 px-6">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-50px] left-[-50px] w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-white/20 rounded-full blur-2xl"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-6xl font-extrabold leading-tight mb-6">
                    Brighten Charlotte <br />
                    <span className="text-yellow-300">With Brite</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 font-light mb-8">
                    We're on a mission to make Charlotte cleaner and brighter, one project at a
                    time. Join our professional team and be part of the change.
                </p>
                <Link href={"/careers/job-openings"}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md px-6 py-3 shadow-lg transition-all duration-300"
                    >
                        View Open Positions
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
