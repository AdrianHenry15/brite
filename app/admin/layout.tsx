"use client";

import { useState } from "react";
import RequireAdmin from "./components/require-admin";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MenuIcon, XIcon, PlusCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const SidebarItems = [
    { href: "/", label: "Back To Website" },
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/promotions", label: "Promotions" },
    { href: "/admin/blog", label: "Blogs" },
    { href: "/admin/applications", label: "Applications" },
    { href: "/admin/resumes", label: "Resumes" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Extract the last segment: e.g. "promotions", "blog", "users"
    const segments = pathname.split("/").filter(Boolean);
    const last = segments[segments.length - 1];

    // Determine whether we should show the Create button
    const isCreatePage = last === "create";
    const isResourceIndexPage =
        segments.length === 2 && segments[0] === "admin" && segments[1] !== "dashboard";

    // Compute resource name
    const resourceName = isResourceIndexPage
        ? segments[1].replace(/s$/, "") // remove plural for display (e.g., promotions → promotion)
        : null;

    // Compute link to create page (if applicable)
    const createLink = resourceName ? `/admin/${resourceName}s/create` : null;

    return (
        <RequireAdmin>
            <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
                {/* Sidebar */}
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
                        {SidebarItems.map((item) => (
                            <div key={item.href}>
                                <Link
                                    href={item.href}
                                    className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 min-w-0 xl:ml-64 p-6">
                    {/* Header */}
                    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6">
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

                    {/* Content */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
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
                </div>
            </div>
        </RequireAdmin>
    );
}
