import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllResumes = async () => {
    const ALL_RESUMES_QUERY = defineQuery(`*[_type == "resume"]{
    _id,
    user-> { name },
    "resumeFile": resumeFile.asset-> { url },
    uploadedAt
  } | order(uploadedAt desc)`);

    try {
        // Use sanityFetch to send the query
        const resumes = await sanityFetch({
            query: ALL_RESUMES_QUERY,
        });

        // Return the list of resumes, or an empty array if none are found
        return resumes.data || [];
    } catch (error) {
        console.error("Error fetching all resumes:", error);
        return [];
    }
};
