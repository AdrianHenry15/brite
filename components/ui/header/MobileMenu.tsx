"use client";

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavMenuItems } from "../../../lib/constants";
import NavButton from "./NavButton";
import { NavMenu } from "../../../lib/types";

export default function MobileMenu() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname, searchParams]);

    return (
        <>
            <button
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-black transition-colors lg:hidden"
            >
                <Bars3Icon className="h-6 text-black" />
            </button>
            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-[100%]"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-[-100%]"
                    >
                        <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 ">
                            <div className="p-4">
                                <button
                                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md text-black transition-colors"
                                    onClick={closeMobileMenu}
                                    aria-label="Close mobile menu"
                                >
                                    <XMarkIcon className="h-6" />
                                </button>

                                <ul className="flex w-full flex-col h-full">
                                    {NavMenuItems.map((item: NavMenu) => (
                                        <li
                                            className="py-4 text-xl text-black transition-colors hover:text-neutral-500 "
                                            key={item.title}
                                        >
                                            <Link href={item.link} onClick={closeMobileMenu}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* NAV BUTTONS */}
                            <ul className="bottom-0 mb-36 fixed flex flex-col self-center w-full">
                                <NavButton
                                    className="mb-4 py-4"
                                    name="Contact Us"
                                    link="/contact-us"
                                    altColor
                                />
                                <NavButton
                                    className="py-4"
                                    name="Get Your Free Estimate"
                                    link="/estimate"
                                />
                            </ul>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}