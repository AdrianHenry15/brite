import { client } from "../client";

interface DeleteResumeParams {
    userId?: string; // Optional userId or slug to identify the resume
    slug?: string;
}

const deleteUserResume = async ({ userId, slug }: DeleteResumeParams) => {
    try {
        if (!userId && !slug) {
            throw new Error("Either userId or slug must be provided");
        }

        // Build the query to find the document to delete
        const query = userId
            ? `*[_type == "resume" && userId == $userId][0]._id`
            : `*[_type == "resume" && slug.current == $slug][0]._id`;

        // Fetch the document ID based on userId or slug
        const documentId = await client.fetch(query, { userId, slug });

        if (!documentId) {
            throw new Error("Resume not found");
        }

        // Delete the document
        const response = await client.delete(documentId);

        return response;
    } catch (error) {
        console.error("Error deleting resume:", error);
        throw new Error("Error deleting resume");
    }
};

export default deleteUserResume;
