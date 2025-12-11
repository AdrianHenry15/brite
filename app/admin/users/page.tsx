"use client";

import { useEffect } from "react";
import UsersList from "../dashboard/components/users-list";
import useUserStore from "@/store/user-store";

export default function AdminUsersPage() {
    const { users, isLoading, error, fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]); // Ensure fetchUsers is only called once on mount

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <UsersList isLoading={isLoading} error={error} users={users} />
        </div>
    );
}
