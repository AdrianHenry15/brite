import { client } from "../client";

interface UpdateApplicationInput {
    slug: string;
    updates: {
        title?: string;
        job?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        resume?: string;
        [key: string]: any; // For additional optional fields
    };
}

export const updateApplication = async ({ slug, updates }: UpdateApplicationInput) => {
    try {
        // Fetch the application document by slug to get its ID
        const query = `*[_type == "application" && slug.current == $slug][0]{ _id }`;
        const params = { slug };
        const application = await client.fetch(query, params);

        if (!application) {
            console.log("Application not found with the provided slug.");
            return null;
        }

        // Prepare the updates, handling references if needed
        const preparedUpdates = {
            ...updates,
            ...(updates.job && { job: { _type: "reference", _ref: updates.job } }),
            ...(updates.resume && { resume: { _type: "reference", _ref: updates.resume } }),
        };

        // Patch the document
        const result = await client.patch(application._id).set(preparedUpdates).commit();

        console.log("Application updated successfully:", result);
        return result;
    } catch (error) {
        console.error("Error updating application:", error);
        throw new Error("Failed to update application");
    }
};
