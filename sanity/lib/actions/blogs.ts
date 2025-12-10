import { client } from "../client";

// GET ALL BLOGS
export const getAllBlogs = async () => {
    try {
        return await client.fetch(`
            *[_type == "blog"] | order(publishedAt desc){
                _id,
                title,
                slug,
                excerpt,
                publishedAt,
                author-> { name },
                mainImage{
                    asset->{
                        url
                    }
                }
            }
        `);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

// GET BLOG BY ID
export const getBlogById = async (id: string) => {
    try {
        return await client.getDocument(id);
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        return null;
    }
};

// GET BLOG BY SLUG
export const getBlogBySlug = async (slug: string) => {
    try {
        const blog = await client.fetch(
            `
            *[_type == "blog" && slug.current == $slug][0]{
                _id,
                title,
                slug,
                excerpt,
                publishedAt,
                
                body,
                
                author->{
                    name,
                    bio,
                    image{
                        asset->{
                            url
                        }
                    }
                },

                mainImage{
                    asset->{
                        url
                    }
                }
            }
        `,
            { slug },
        );

        return blog || null;
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return null;
    }
};

// CREATE BLOG
export const createBlog = async (payload: {
    title: string;
    excerpt?: string;
    body?: any[];
    authorId: string;
    mainImageAssetId?: string;
    publishedAt?: string;
}) => {
    try {
        const slug = payload.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .slice(0, 96);

        const newBlog = await client.create({
            _type: "blog",
            title: payload.title,
            excerpt: payload.excerpt || "",
            body: payload.body || [],
            publishedAt: payload.publishedAt || new Date().toISOString(),

            slug: { _type: "slug", current: slug },

            author: {
                _type: "reference",
                _ref: payload.authorId,
            },

            mainImage: payload.mainImageAssetId
                ? {
                      _type: "image",
                      asset: {
                          _type: "reference",
                          _ref: payload.mainImageAssetId,
                      },
                  }
                : undefined,
        });

        return { success: true, data: newBlog };
    } catch (error) {
        console.error("Error creating blog:", error);
        return { success: false, error };
    }
};

// UPDATE BLOG
export const updateBlog = async (
    id: string,
    payload: Partial<{
        title: string;
        excerpt: string;
        body: any[];
        authorId: string;
        mainImageAssetId: string;
        publishedAt: string;
    }>,
) => {
    try {
        const patch: any = { ...payload };

        // Regenerate slug if title changed
        if (payload.title) {
            patch.slug = {
                _type: "slug",
                current: payload.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                    .slice(0, 96),
            };
        }

        if (payload.authorId) {
            patch.author = {
                _type: "reference",
                _ref: payload.authorId,
            };
        }

        if (payload.mainImageAssetId) {
            patch.mainImage = {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: payload.mainImageAssetId,
                },
            };
        }

        const updated = await client.patch(id).set(patch).commit();

        return { success: true, data: updated };
    } catch (error) {
        console.error("Error updating blog:", error);
        return { success: false, error };
    }
};

// DELETE BLOG BY ID
export const deleteBlogById = async (id: string) => {
    try {
        await client.delete(id);

        return {
            success: true,
            message: "Blog post deleted successfully.",
        };
    } catch (error: any) {
        console.error("Error deleting blog by ID:", error);
        return {
            success: false,
            message: error.message || "Failed to delete blog post.",
        };
    }
};
