import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllBlogs = async () => {
    const ALL_BLOGS = defineQuery(`*[_type == "blog"] | order(name asc)
`);

    try {
        // Use sanityFetch to send the query
        const blog = await sanityFetch({
            query: ALL_BLOGS,
        });

        // Return the list of blogs, or an empty array if none are found
        return blog.data || [];
    } catch (error) {
        console.error("Error fetching all Blogs:", error);
        return [];
    }
};
