"use client";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { FaPhone } from "react-icons/fa6";
import { NavMenu } from "../../lib/constants";
import Button from "@/components/button";

export default function MobileMenu() {
    // Constants
    const pathname = usePathname();

    // State
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);
    // const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

    const renderNavMenu = () => {
        return NavMenu.map((item) => {
            return (
                <Link
                    key={item.title}
                    href={item.link}
                    onClick={closeMobileMenu}
                    className={`${pathname === item.link ? "underline" : ""}`}
                >
                    <li
                        className={`py-4 text-xl text-black transition-colors hover:text-neutral-500`}
                    >
                        {item.title}
                    </li>
                </Link>
            );
        });
    };

    return (
        <div className="relative">
            <button
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-black transition-colors overflow-hidden"
            >
                <Bars3Icon className="h-6 text-black" />
            </button>

            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all ease-in-out duration-100"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-100"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </TransitionChild>
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all ease-in-out duration-100"
                        enterFrom="translate-x-[100%]"
                        enterTo="translate-x-[0%] sm:translate-x-[45%] md:translate-x-[60%]"
                        leave="transition-all ease-in-out duration-100"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-[100%]"
                    >
                        <DialogPanel className="fixed bottom-0 right-0 top-0 flex h-full flex-col bg-white pb-6 w-full sm:w-[375px]">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <button
                                        className="flex h-11 w-11 items-center justify-center rounded-md text-black transition-colors"
                                        onClick={closeMobileMenu}
                                        aria-label="Close mobile menu"
                                    >
                                        <XMarkIcon className="h-6" />
                                    </button>
                                </div>

                                <ul className="flex w-full flex-col h-full">{renderNavMenu()}</ul>
                            </div>
                            {/* NAV BUTTONS */}
                            <ul className="bottom-0 fixed flex flex-col self-start w-full">
                                <Link
                                    onClick={closeMobileMenu}
                                    className="w-full px-10 flex justify-start"
                                    href="tel:7048423535"
                                >
                                    <Button
                                        leftChildren
                                        roundedFull
                                        className="mb-4 w-full py-4 flex justify-center sm:w-[300px]"
                                        name="704-842-3535"
                                        altColor
                                    >
                                        <FaPhone className="mr-2" />
                                    </Button>
                                </Link>
                                <Link
                                    onClick={closeMobileMenu}
                                    className="w-full px-10 flex justify-start"
                                    href={"/estimate"}
                                >
                                    <Button
                                        roundedFull
                                        className="mb-4 w-full py-4 flex justify-center sm:w-[300px]"
                                        name={"Estimate"}
                                    />
                                </Link>
                            </ul>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    );
}
