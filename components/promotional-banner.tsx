import Link from "next/link";
import React from "react";

async function PromotionalBanner() {
    return (
        <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white px-8 py-12 mx-4 mt-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500">
            <Link
                href={"/estimate"}
                className="container mx-auto flex flex-col items-center text-center"
            >
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-6 font-robotoFlex">
                    Brite Holiday Lighting
                </h2>
                <p className="text-md sm:text-xl font-semibold mb-8 max-w-2xl font-robotoFlex">
                    Let Your Home Shine Bright This Holiday Season! ✨
                </p>
                <span className="bg-white text-blue-800 py-3 px-8 rounded-full shadow-lg font-bold text-sm transform hover:scale-110 transition duration-300">
                    Get An Estimate!
                </span>
            </Link>
        </div>
    );
}

export default PromotionalBanner;
