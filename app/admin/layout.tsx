"use client";

import { useState } from "react";
import RequireAdmin from "./components/require-admin";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                        <Link
                            href="/"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                        >
                            🌐 Go To Website
                        </Link>
                        <Link
                            href="/admin/dashboard"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                        >
                            📊 Dashboard
                        </Link>
                        <Link
                            href="/admin/users"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                        >
                            👤 Manage Users
                        </Link>
                        <Link
                            href="/admin/applications"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                        >
                            📱 Applications
                        </Link>
                        <Link
                            href="/admin/settings"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                        >
                            ⚙️ Settings
                        </Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 min-w-0 md:ml-64 p-6">
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
                        <UserButton afterSignOutUrl="/" />
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
