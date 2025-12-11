import { sanityClient } from "../client";
// ---------------------------------------------
// GET ALL USERS
// ---------------------------------------------
export const getAllUsers = async () => {
    try {
        const users = await sanityClient.fetch(`
            *[_type == "user"] | order(createdAt desc){
                _id,
                userId,
                fullName,
                email,
                imageUrl,
                role,
                createdAt
            }
        `);

        return users;
    } catch (error: any) {
        console.error("Error fetching users:", error);
        return [];
    }
};

// ---------------------------------------------
// GET USER BY SANITY DOCUMENT ID
// ---------------------------------------------
export const getUserById = async (id: string) => {
    try {
        const user = await sanityClient.getDocument(id);
        return user || null;
    } catch (error: any) {
        console.error("Error fetching user by ID:", error);
        return null;
    }
};

// ---------------------------------------------
// GET USER BY Clerk userId
// ---------------------------------------------
export const getUserByUserId = async (userId: string) => {
    try {
        const sanityUser = await sanityClient.fetch(
            `
            *[_type == "user" && userId == $userId][0]
            `,
            { userId },
        );

        return sanityUser || null;
    } catch (error: any) {
        console.error("Error fetching user by Clerk userId:", error);
        return null;
    }
};

// ---------------------------------------------
// CREATE USER
// ---------------------------------------------
export const createUser = async (payload: {
    userId: string; // Clerk ID
    fullName?: string;
    email?: string;
    imageUrl?: string;
    role?: string;
    createdAt?: string;
}) => {
    try {
        const newUser = await sanityClient.create({
            _type: "user",
            ...payload,
        });

        return { success: true, data: newUser };
    } catch (error: any) {
        console.error("Error creating user:", error);
        return { success: false, error: error.message };
    }
};

// ---------------------------------------------
// UPDATE USER
// ---------------------------------------------
export const updateUser = async (
    id: string,
    payload: Partial<{
        fullName: string;
        email: string;
        imageUrl: string;
        role: string;
        createdAt: string;
    }>,
) => {
    try {
        const updated = await sanityClient.patch(id).set(payload).commit();
        return { success: true, data: updated };
    } catch (error: any) {
        console.error("Error updating user:", error);
        return { success: false, error: error.message };
    }
};

// ---------------------------------------------
// DELETE USER BY ID
// ---------------------------------------------
export const deleteUserById = async (id: string) => {
    try {
        await sanityClient.delete(id);

        return {
            success: true,
            message: "User deleted successfully.",
        };
    } catch (error: any) {
        console.error("Error deleting user:", error);
        return {
            success: false,
            message: error.message || "Failed to delete user.",
        };
    }
};
