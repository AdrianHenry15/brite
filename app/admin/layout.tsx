"use client";

import React, { useState } from "react";
import RequireAdmin from "./components/require-admin";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MenuIcon, XIcon, PlusCircle, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import AdminSidebar from "./components/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    // Determine whether we should show the Create button
    const segments = pathname.split("/").filter(Boolean);
    const last = segments[segments.length - 1];
    const isCreatePage = last === "create";
    const isResourceIndexPage =
        segments.length === 2 && segments[0] === "admin" && segments[1] !== "dashboard";
    const resourceName = isResourceIndexPage ? segments[1].replace(/s$/, "") : null;
    const createLink = resourceName ? `/admin/${resourceName}s/create` : null;

    return (
        <RequireAdmin>
            <div className="flex w-full h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
                {/* Sidebar */}
                <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

                {/* Right Content Area */}
                <main
                    className={`
                        flex-1 h-full ml-16 md:ml-64 transition-all duration-300
                        ${collapsed ? "ml-16" : "ml-64"}
                        overflow-y-auto
                    `}
                >
                    {/* Top Header */}
                    <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Admin Dashboard
                        </h1>
                        <UserButton fallback="/" />
                    </header>

                    {/* Page Content */}
                    <div className="p-6 space-y-6">
                        {/* Dynamic Create Button */}
                        {isResourceIndexPage && !isCreatePage && createLink && (
                            <Link
                                href={createLink}
                                className="
                                    inline-flex items-center gap-2
                                    px-4 py-2 
                                    bg-blue-600 text-white 
                                    rounded-lg shadow 
                                    hover:bg-blue-700 
                                    transition
                                "
                            >
                                <PlusCircle size={18} />
                                Create{" "}
                                {resourceName!.charAt(0).toUpperCase() + resourceName!.slice(1)}
                            </Link>
                        )}

                        {children}
                    </div>
                </main>
            </div>
        </RequireAdmin>
    );
}
