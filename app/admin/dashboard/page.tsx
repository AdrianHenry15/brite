"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
    ClipboardListIcon,
    UsersIcon,
    WebcamIcon,
    Laptop2Icon,
    FileIcon,
    PenBoxIcon,
    CoinsIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import StatCard from "./components/stat-card";
import { useApplicationStore } from "@/store/application-store";
import UsersList from "./components/users-list";
import { Application, Blog, Promotion } from "@/sanity.types";
import { getAllApplications } from "@/sanity/lib/actions/applications";
import { getAllBlogs } from "@/sanity/lib/actions/blogs";
import { getAllPromotions } from "@/sanity/lib/actions/promotions";

export default function AdminDashboard() {
    // Users
    const { user } = useUser();
    const [users, setUsers] = useState<any[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [totalUserCount, setTotalUserCount] = useState(0);

    // Loading & Error States
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch users on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/users");
                const data = await response.json();
                const applicationsData = await getAllApplications();
                const blogsData = await getAllBlogs();
                const promotionsData = await getAllPromotions();
                setTotalUserCount(data.totalCount);
                setUsers(data.data);
                setApplications(applicationsData);
                setBlogs(blogsData);
                setPromotions(promotionsData);
            } catch (err) {
                setError("Failed to fetch users");
            } finally {
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
                    Welcome, {user?.fullName}!
                </h1>
            </header>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <StatCard
                    link="/admin/users"
                    color_gradient="blue"
                    icon={<UsersIcon />}
                    title="Total Users"
                    content={totalUserCount.toString()}
                />
                <StatCard
                    link="/admin/applications"
                    color_gradient="green"
                    icon={<FileIcon />}
                    title="Applications"
                    content={promotions.length.toString()}
                />
                <StatCard
                    link="/admin/blogs"
                    color_gradient="purple"
                    icon={<PenBoxIcon />}
                    title="Blogs"
                    content={blogs.length.toString()}
                />
                <StatCard
                    link="/admin/promotions"
                    color_gradient="yellow"
                    icon={<CoinsIcon />}
                    title="Promotions"
                    content={promotions.length.toString()}
                />
            </div>

            {/* Users List Section */}
            <UsersList isLoading={isLoading} error={error} users={users} />

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
                        href="/"
                        className="bg-purple-500 text-white p-6 rounded-xl shadow-lg text-center hover:bg-purple-600 transform hover:scale-105 transition-all duration-300"
                    >
                        <WebcamIcon size={32} className="mx-auto mb-3" />
                        <span className="text-xl font-semibold">Go To Website</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
