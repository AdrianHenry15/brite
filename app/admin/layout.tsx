"use client";

import { useState } from "react";
import RequireAdmin from "./components/require-admin";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderSidebarItem = (link: string, title: string) => {
        return (
            <Link
                href={link}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
                {title}
            </Link>
        );
    };

    return (
        <RequireAdmin>
            <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                {/* Sidebar - Hidden on Small Screens */}
                <aside
                    className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg p-6 transform ${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:flex md:flex-col`}
                >
                    <div className="flex justify-between items-center mb-6 md:hidden">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Admin Panel
                        </h2>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="text-gray-600 dark:text-gray-300"
                        >
                            <XIcon size={24} />
                        </button>
                    </div>

                    <nav className="space-y-4">
                        {renderSidebarItem("/", "🌐 Go To Website")}
                        {renderSidebarItem("/admin/dashboard", "📊 Dashboard")}
                        {renderSidebarItem("/admin/users", "👤 Manage Users")}
                        {renderSidebarItem("/admin/promotions", "🚀 Promotions")}
                        {renderSidebarItem("/admin/blog", "📝 Blog")}
                        {renderSidebarItem("/admin/applications", "📱 Applications")}
                        {renderSidebarItem("/studio", "💻 Brite Studio")}
                        {/* <Link
                            href="/admin/settings"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                        >
                            ⚙️ Settings
                        </Link> */}
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 min-w-0 xl:ml-64 p-6">
                    {/* Header */}
                    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6">
                        {/* Menu Button for Mobile */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden text-gray-600 dark:text-gray-300"
                        >
                            <MenuIcon size={24} />
                        </button>

                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Admin Dashboard
                        </h1>
                        <UserButton fallback="/" />
                    </header>

                    {/* Content Wrapper */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        {children}
                    </div>
                </div>
            </div>
        </RequireAdmin>
    );
}
