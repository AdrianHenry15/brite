"use client";

import { isAdmin } from "@/lib/check-admin";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Pencil } from "lucide-react";

interface IUsersListCardProps {
    user: any;
}

const UsersListCard = ({ user }: IUsersListCardProps) => {
    const router = useRouter();

    const getRole = (email: string) => {
        return isAdmin(email) ? "Admin" : "User";
    };

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/admin/users/${user.id}`)}
            onKeyDown={(e) => e.key === "Enter" && router.push(`/admin/users/${user.id}`)}
            className="group relative bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-6 w-full max-w-xs mx-auto cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:rotate-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
            {/* Edit link */}
            <Link
                href={`/admin/users/edit/${user.id}`}
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md bg-black/10 dark:bg-white/10 px-2 py-1 text-xs font-medium text-gray-900 dark:text-white backdrop-blur  transition"
            >
                <Pencil size={14} />
                Edit
            </Link>

            {/* User Image */}
            <div className="flex justify-start mb-4">
                <Image
                    width={112}
                    height={112}
                    src={user.imageUrl || "/default-avatar.png"}
                    alt={`${user.firstName}-${user.lastName}`}
                    className="w-28 h-28 rounded-full object-cover ring-4 ring-gradient-to-br from-purple-500 to-blue-600 transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* User Info */}
            <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {`${user.firstName ?? ""} ${user.lastName ?? ""}` || "No name available"}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 mb-2">
                    {user.emailAddresses?.[0]?.emailAddress || "No email available"}
                </p>

                {/* Role Badge */}
                <span
                    className={`mt-3 inline-block px-4 py-1 text-xs font-medium rounded-full ${
                        getRole(user.emailAddresses?.[0]?.emailAddress) === "Admin"
                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                >
                    {getRole(user.emailAddresses?.[0]?.emailAddress)}
                </span>
            </div>

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition" />
        </div>
    );
};

export default UsersListCard;
