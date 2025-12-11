import { sanityClient } from "@/sanity/lib/client";

// Function to check if the user has applied for a specific job
export default async function checkIfUserApplied(
    jobTitle: string,
    userId: string,
): Promise<boolean> {
    const query = `*[_type == "application" && jobTitle == $jobTitle && userId == $userId]`;
    const params = {
        jobTitle,
        userId,
    };

    const result = await sanityClient.fetch(query, params);

    return result.length > 0; // If the result is non-empty, the user has applied
}
