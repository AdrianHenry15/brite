"use client";

import Link from "next/link";
import { MdCopyright } from "react-icons/md";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";

const Footer = () => {
    return (
        <footer className="w-full border-t border-border bg-card text-card-foreground">
            <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                    <LogoCard />
                    <FooterMenu />
                    <ContactCard />
                </div>

                <div className="mt-10 border-t border-border pt-6">
                    <SocialsCard />
                </div>

                <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row">
                    <p>© 2026 Brite Exterior Cleaning. All rights reserved.</p>

                    <Link
                        href="https://www.thirdgenerationstudios.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center transition-colors hover:text-primary"
                    >
                        <MdCopyright size={12} className="mr-1" aria-hidden="true" />
                        <span>Third Generation Studios</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
