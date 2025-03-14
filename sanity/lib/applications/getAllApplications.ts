import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live"; // Assuming you have a custom function for sanity fetch

export const getAllApplications = async () => {
    const ALL_APPLICATIONS_QUERY = defineQuery(`*[_type == "application"]{
        _id,
        firstName,
        lastName,
        email,
        phone,
        publishedAt,
        job->{
            title
        },
    }`);

    try {
        // Use sanityFetch to send the query
        const response = await sanityFetch({
            query: ALL_APPLICATIONS_QUERY,
        });

        // Check if the response contains data and return it
        return response.data || []; // Ensure response has the data
    } catch (error) {
        console.error("Error fetching all applications:", error);
        return []; // Return an empty array if there's an error
    }
};
