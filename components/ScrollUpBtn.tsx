"use client";

import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const ScrollUpBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                // Change this value to the scroll point where you want to show the button
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Transition
            show={showButton}
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-500 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
            className="fixed bottom-6 right-6 z-50"
        >
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-blue-500/95 hover:bg-blue-700 font-bold p-4 rounded-full"
            >
                <FaChevronUp className="text-white" size={25} />
            </button>
        </Transition>
    );
};

export default ScrollUpBtn;
