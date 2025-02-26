import React from "react";
import UsersListCard from "./users-list-card";

interface IUsersListProps {
    isLoading: boolean;
    error: string | null;
    users: any[];
}

const UsersList = (props: IUsersListProps) => {
    const { isLoading, error, users } = props;
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">All Users</h3>
            {isLoading ? (
                <p>Loading users...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : users.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UsersListCard key={user.id} user={user} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-800 dark:text-gray-100 text-center">No users found</p>
            )}
        </div>
    );
};

export default UsersList;
