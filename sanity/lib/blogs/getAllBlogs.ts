import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllBlogs = async () => {
    // Updated query to resolve the author reference and include the author's name and image
    const ALL_BLOGS = defineQuery(`
        *[_type == "blog"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            publishedAt,
            mainImage {
                asset->{
                    _id,
                    url
                }
            },
            excerpt,
            author->{
                _id,
                name,
                image {
                    asset->{
                        _id,
                        url
                    }
                },
            bio
            }
        }
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
