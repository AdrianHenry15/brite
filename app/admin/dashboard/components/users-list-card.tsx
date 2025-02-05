import { isAdmin } from "@/lib/check-admin";
import { User } from "@clerk/clerk-sdk-node";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IUsersListCardProps {
    user: User;
}

const UsersListCard = ({ user }: IUsersListCardProps) => {
    const getRole = (email: string) => {
        return isAdmin(email) ? "Admin" : "User";
    };

    return (
        <Link
            href={`users/${user.id}`}
            className="relative bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-6 w-full max-w-xs mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:rotate-2 hover:cursor-pointer"
        >
            {/* User Image */}
            <div className="flex justify-left mb-4">
                <Image
                    width={100}
                    height={100}
                    src={user.imageUrl || "/default-avatar.png"}
                    alt={`${user.firstName}-${user.lastName}`}
                    className="w-28 h-28 rounded-full object-cover ring-4 ring-gradient-to-br from-purple-500 to-blue-600 transition-transform duration-500 transform group-hover:scale-110"
                />
            </div>

            {/* User Info */}
            <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {`${user.firstName} ${user.lastName}` || "No name available"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 mb-2">
                    {user.emailAddresses?.[0]?.emailAddress || "No email available"}
                </p>

                {/* Role Badge */}
                <span
                    className={`mt-3 px-4 py-1 text-xs font-medium rounded-full 
                    ${
                        getRole(user.emailAddresses?.[0]?.emailAddress as string) === "Admin"
                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                >
                    {getRole(user.emailAddresses?.[0]?.emailAddress as string)}
                </span>
            </div>

            {/* Hover animation gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </Link>
    );
};

export default UsersListCard;
