"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ClipboardListIcon, UsersIcon, CurrencyIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const { user } = useUser();
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch users on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/users");
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to fetch users");
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                    Welcome back, {user?.fullName}!
                </h1>
                <UserButton fallback="/" />
            </header>

            {/* Stats Section - Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Stat Card 1 */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <UsersIcon size={32} />
                        <h3 className="ml-3 text-xl font-semibold">Total Users</h3>
                    </div>
                    <p className="text-4xl font-bold">1,245</p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <ClipboardListIcon size={32} />
                        <h3 className="ml-3 text-xl font-semibold">Applications</h3>
                    </div>
                    <p className="text-4xl font-bold">345</p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <CurrencyIcon size={32} />
                        <h3 className="ml-3 text-xl font-semibold">Revenue</h3>
                    </div>
                    <p className="text-4xl font-bold">$23,980</p>
                </div>
            </div>

            {/* Users List Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    All Users
                </h3>
                {isLoading ? (
                    <p>Loading users...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200 dark:bg-gray-700">
                                <tr>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                        Name
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                        Email
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(users) && users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user.id} className="border-b dark:border-gray-600">
                                            <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-100">
                                                {user.fullName}
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-100">
                                                {user.emailAddresses[0]?.emailAddress}
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-100">
                                                {user.publicMetadata?.role || "User"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={3}
                                            className="py-3 px-4 text-sm text-center text-gray-800 dark:text-gray-100"
                                        >
                                            No users found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Quick Links Section */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Quick Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link
                        href="/admin/users"
                        className="bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
                    >
                        <UsersIcon size={32} className="mx-auto mb-3" />
                        <span className="text-xl font-semibold">Manage Users</span>
                    </Link>
                    <Link
                        href="/admin/applications"
                        className="bg-green-500 text-white p-6 rounded-xl shadow-lg text-center hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                    >
                        <ClipboardListIcon size={32} className="mx-auto mb-3" />
                        <span className="text-xl font-semibold">Manage Applications</span>
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="bg-purple-500 text-white p-6 rounded-xl shadow-lg text-center hover:bg-purple-600 transform hover:scale-105 transition-all duration-300"
                    >
                        <CurrencyIcon size={32} className="mx-auto mb-3" />
                        <span className="text-xl font-semibold">Settings</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
