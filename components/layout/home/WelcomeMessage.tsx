import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";

const WelcomeMessage = () => {
    return (
        <section
            // ref={ref}
            className={`flex flex-col w-full items-center relative bg-cover bg-[url('/assets/imgs/brick.jpg')] h-min-content`}
        >
            {/* WHITE BG  */}
            <div className="bg-white flex flex-col mx-4 my-24 h-full shadow-xl md:p-20 px-4 py-10">
                {/* TEXT  */}
                <div className="text-center flex flex-col">
                    <span className="font-extrabold md:text-4xl text-2xl mb-4">
                        Your Journey To A Brite Home Or Business Starts Here.
                    </span>
                    <span>
                        Get peace of mind knowing that all our services are done Brite the first
                        time.
                    </span>
                    <span>Start with a FREE, no obligation estimate today!</span>
                    <Link href="/estimate">
                        <button className="mt-4 px-6 py-2 bg-blue-500 rounded-lg shadow-lg">
                            Get Your Free Estimate Today!
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WelcomeMessage;
