import { client } from "../client";

export const deleteResumeBySlug = async (slug: string) => {
    try {
        // Find the resume document by slug
        const resume = await client.fetch(`*[_type == "resume" && slug.current == $slug][0]{_id}`, {
            slug,
        });

        if (!resume) {
            throw new Error("Resume not found.");
        }

        // Delete the document by ID
        await client.delete(resume._id);

        return { success: true, message: "Resume deleted successfully." };
    } catch (error) {
        return { success: false, message: error };
    }
};
