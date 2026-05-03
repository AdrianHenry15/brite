"use client";

import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

export default function ScrollUpBtn() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };

        handleScroll(); // initialize state on mount
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Transition
                show={showButton}
                enter="transition ease-out duration-300 transform"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
            >
                <button
                    onClick={handleScrollTop}
                    aria-label="Scroll to top"
                    className="flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                    <FaChevronUp size={20} />
                </button>
            </Transition>
        </div>
    );
}
