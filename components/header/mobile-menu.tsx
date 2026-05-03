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
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

    const renderNavMenu = () => {
        return NavMenu.map((item) => {
            const isActive = pathname === item.link;

            return (
                <li key={item.title}>
                    <Link
                        href={item.link}
                        onClick={closeMobileMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-xl px-4 py-3 text-lg font-semibold transition-colors ${
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted hover:text-primary"
                        }`}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className="relative">
            {/* OPEN BUTTON */}
            <button
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-muted"
            >
                <Bars3Icon className="h-6" />
            </button>

            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    {/* BACKDROP */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all duration-150 ease-in-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-all duration-150 ease-in-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
                    </TransitionChild>

                    {/* DRAWER */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-transform duration-200 ease-in-out"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-200 ease-in-out"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="fixed right-0 top-0 flex h-full w-full flex-col border-l border-border bg-background shadow-xl sm:w-[375px]">
                            {/* HEADER */}
                            <div className="flex items-center justify-between border-b border-border p-4">
                                <span className="text-sm font-bold text-muted-foreground">
                                    MENU
                                </span>

                                <button
                                    onClick={closeMobileMenu}
                                    aria-label="Close mobile menu"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted"
                                >
                                    <XMarkIcon className="h-5" />
                                </button>
                            </div>

                            {/* NAV ITEMS */}
                            <ul className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                                {renderNavMenu()}
                            </ul>

                            {/* CTA SECTION */}
                            <div className="border-t border-border p-4">
                                <div className="flex flex-col gap-3">
                                    <Link href="tel:7048423535" onClick={closeMobileMenu}>
                                        <Button
                                            leftChildren
                                            roundedFull
                                            className="w-full py-4 justify-center border border-border bg-card text-card-foreground hover:bg-muted"
                                            name="704-842-3535"
                                            altColor
                                        >
                                            <FaPhone className="mr-2" />
                                        </Button>
                                    </Link>

                                    <Link href="/estimate" onClick={closeMobileMenu}>
                                        <Button
                                            roundedFull
                                            className="w-full py-4 justify-center bg-primary text-primary-foreground hover:bg-brite-blue"
                                            name="Get Free Estimate"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    );
}
