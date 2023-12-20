import React from "react";

const WelcomeMessage = () => {
    return (
        <div
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
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessage;
