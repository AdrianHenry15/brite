import { client } from "../client";

// GET ALL AUTHORS
export const getAllAuthors = async () => {
    try {
        return await client.fetch(`
            *[_type == "author"] | order(name asc){
                _id,
                name,
                bio,
                image{
                    asset->{
                        url
                    }
                }
            }
        `);
    } catch (error) {
        console.error("Error fetching authors:", error);
        return [];
    }
};

// GET AUTHOR BY ID
export const getAuthorById = async (id: string) => {
    try {
        return await client.getDocument(id);
    } catch (error) {
        console.error("Error fetching author by ID:", error);
        return null;
    }
};

// Create Author
export const createAuthor = async (payload: {
    name: string;
    bio?: string;
    imageAssetId?: string;
}) => {
    try {
        const newAuthor = await client.create({
            _type: "author",
            name: payload.name,
            bio: payload.bio || "",
            image: payload.imageAssetId
                ? {
                      _type: "image",
                      asset: {
                          _type: "reference",
                          _ref: payload.imageAssetId,
                      },
                  }
                : undefined,
        });

        return { success: true, data: newAuthor };
    } catch (error) {
        console.error("Error creating author:", error);
        return { success: false, error };
    }
};

// UPDATE AUTHOR
export const updateAuthor = async (
    id: string,
    payload: Partial<{
        name: string;
        bio: string;
        imageAssetId: string;
    }>,
) => {
    try {
        const patch: any = { ...payload };

        if (payload.imageAssetId) {
            patch.image = {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: payload.imageAssetId,
                },
            };
        }

        const updated = await client.patch(id).set(patch).commit();

        return { success: true, data: updated };
    } catch (error) {
        console.error("Error updating author:", error);
        return { success: false, error };
    }
};

// DELETE AUTHOR BY ID
export const deleteAuthorById = async (id: string) => {
    try {
        await client.delete(id);

        return { success: true, message: "Author deleted successfully." };
    } catch (error: any) {
        console.error("Error deleting author:", error);
        return { success: false, message: error.message || "Failed to delete author." };
    }
};
