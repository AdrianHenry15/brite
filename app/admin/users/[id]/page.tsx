import { getUserById } from "@/sanity/lib/actions/users";

export default async function AdminUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUserById(id);

    if (!user) {
        return <div className="text-red-500 text-xl">User not found.</div>;
    }

    return (
        <div className="p-6 space-y-6 bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">User Details</h1>

                <a
                    href="/admin/users"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Users
                </a>
            </div>

            {/* User Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 max-w-lg">
                {/* Avatar */}
                {user.imageUrl && (
                    <img
                        src={user.imageUrl}
                        alt={user.fullName}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                )}

                <h2 className="text-2xl font-semibold text-white text-center">{user.fullName}</h2>

                <p className="text-gray-400 text-center mt-2">{user.email}</p>

                <div className="mt-6 text-gray-300 space-y-2">
                    <p>
                        <span className="font-semibold text-white">ID:</span> {user.id}
                    </p>

                    {/* If you later add Clerk roles, permissions, metadata, etc. */}
                    {user.role && (
                        <p>
                            <span className="font-semibold text-white">Role:</span> {user.role}
                        </p>
                    )}

                    {user.createdAt && (
                        <p>
                            <span className="font-semibold text-white">Created:</span>{" "}
                            {new Date(user.createdAt).toLocaleString()}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
