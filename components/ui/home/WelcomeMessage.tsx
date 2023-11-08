import React from "react";

const WelcomeMessage = () => {
    return (
        <div className="flex flex-col w-full items-center relative bg-cover bg-[url('/assets/imgs/brick.jpg')] h-80 md:h-[150vh] lg:h-[100vh]">
            {/* WHITE BG  */}
            <div className="bg-white flex flex-col mx-4 my-24 h-full shadow-xl p-20">
                {/* TEXT  */}
                <div className="text-center flex flex-col">
                    <span className="font-extrabold text-4xl">
                        Your Journey To A Spotless Home Or Business Begins Here.
                    </span>
                    <span>
                        Get peace of mind knowing that all our servces are done right the first time
                        and done with a smile.
                    </span>
                    <span>Start with a FREE, no obligation estimate today!</span>
                </div>
                {/* PROMO CARDS  */}
            </div>
        </div>
    );
};

export default WelcomeMessage;
