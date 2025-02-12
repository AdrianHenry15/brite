import { client } from "../client";

export const deleteApplicationBySlug = async (slug: string) => {
    try {
        // Fetch the application document by slug to get its ID
        const query = `*[_type == "application" && slug.current == $slug][0]{ _id }`;
        const params = { slug };
        const application = await client.fetch(query, params);

        if (!application) {
            console.log("Application not found with the provided slug.");
            return null;
        }

        // Delete the document using its ID
        const result = await client.delete(application._id);

        console.log("Application deleted successfully:", result);
        return result;
    } catch (error) {
        console.error("Error deleting application by slug:", error);
        throw new Error("Failed to delete application");
    }
};
