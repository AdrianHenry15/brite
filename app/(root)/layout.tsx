import React from "react";

import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
