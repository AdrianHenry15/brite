import { isAdmin } from "@/lib/check-admin";
import Image from "next/image";
import React from "react";

interface IUserProfileCardProps {
    user: any;
}

const UserProfileCard = (props: IUserProfileCardProps) => {
    const { user } = props;
    const userEmail = user.emailAddresses[0].emailAddress;
    return (
        <div className="bg-gray-800 shadow-xl rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 mb-8">
                <Image
                    width={100}
                    height={100}
                    src={user!.imageUrl}
                    alt={user!.fullName as string}
                    className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg mb-4 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                        {user!.fullName}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{userEmail}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Role:
                        <span
                            className={`font-medium ml-1 ${isAdmin(userEmail) ? "text-indigo-600" : "text-green-600"}`}
                        >
                            {isAdmin(userEmail) ? "Admin" : "User"}
                        </span>
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    User Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <p className="font-medium text-gray-600 dark:text-gray-400">Full Name</p>
                        <p className="text-lg text-gray-800 dark:text-white">{user!.fullName}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-600 dark:text-gray-400">
                            Email Address
                        </p>
                        <p className="text-lg text-gray-800 dark:text-white">{userEmail}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-600 dark:text-gray-400">Role</p>
                        <p className="text-lg text-gray-800 dark:text-white">
                            {isAdmin(userEmail) ? "Admin" : "User"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Editable Profile Section */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Edit Profile
                </h3>
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
                    <button className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 mb-4 sm:mb-0">
                        Edit Name
                    </button>
                    <button className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300">
                        Change Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;
