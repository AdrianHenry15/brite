import { sanityClient } from "../client";

// GET ALL RESUMES
export const getAllResumes = async () => {
    try {
        return await sanityClient.fetch(`
            *[_type == "resume"] | order(uploadedAt desc){
              _id,
              _createdAt,
              uploadedAt,
              user-> { name },
              resumeFile {
                asset->{
                  url,
                  originalFilename,
                  size
                }
              }
            }
        `);
    } catch (err) {
        console.error("Error fetching resumes:", err);
        return [];
    }
};

// GET RESUME BY ID
export const getResumeById = async (id: string) => {
    try {
        const resume = await sanityClient.getDocument(id);

        return resume || null;
    } catch (error) {
        console.error("Error fetching resume by ID:", error);
        return null;
    }
};

// GET RESUME BY SLUG
export const getResumeBySlug = async (slug: string) => {
    try {
        const resume = await sanityClient.fetch(
            `
            *[_type == "resume" && slug.current == $slug][0]{
                _id,
                _type,
                _createdAt,
                _updatedAt,
                uploadedAt,
                
                user->{
                    _id,
                    name
                },

                resumeFile {
                    asset->{
                        url,
                        originalFilename,
                        size,
                        mimeType
                    }
                }
            }
            `,
            { slug },
        );

        return resume || null;
    } catch (error) {
        console.error("Error fetching resume by slug:", error);
        return null;
    }
};

// CREATE RESUME
export const createResume = async ({
    fileAssetId,
    userId,
}: {
    fileAssetId: string;
    userId: string;
}) => {
    try {
        // Create slug based on asset
        const slug = `resume-${fileAssetId}`.toLowerCase();

        const newResume = await sanityClient.create({
            _type: "resume",
            uploadedAt: new Date().toISOString(),
            user: {
                _type: "reference",
                _ref: userId, // Clerk User Doc or Sanity User doc
            },
            resumeFile: {
                _type: "file",
                asset: {
                    _type: "reference",
                    _ref: fileAssetId,
                },
            },
            slug: {
                _type: "slug",
                current: slug,
            },
        });

        return { success: true, data: newResume };
    } catch (error) {
        console.error("Error creating resume:", error);
        return { success: false, error };
    }
};

// UPDATE RESUME
export const updateResume = async ({
    id,
    newFileAssetId,
}: {
    id: string;
    newFileAssetId: string;
}) => {
    try {
        const newSlug = `resume-${newFileAssetId}`;

        const updated = await sanityClient
            .patch(id)
            .set({
                resumeFile: {
                    _type: "file",
                    asset: {
                        _type: "reference",
                        _ref: newFileAssetId,
                    },
                },
                slug: {
                    _type: "slug",
                    current: newSlug,
                },
                uploadedAt: new Date().toISOString(),
            })
            .commit();

        return { success: true, data: updated };
    } catch (error) {
        console.error("Error updating resume:", error);
        return { success: false, error };
    }
};

// DELETE RESUME BY ID
export const deleteResumeById = async (id: string) => {
    try {
        await sanityClient.delete(id);

        return {
            success: true,
            message: "Resume deleted successfully.",
        };
    } catch (error: any) {
        console.error("Error deleting resume by ID:", error);
        return {
            success: false,
            message: error.message || "Failed to delete resume.",
        };
    }
};

// DELETE RESUME BY SLUG
export const deleteResumeBySlug = async (slug: string) => {
    try {
        const doc = await sanityClient.fetch(
            `*[_type == "resume" && slug.current == $slug][0]{ _id }`,
            {
                slug,
            },
        );

        if (!doc?._id) {
            return { success: false, message: "Resume not found." };
        }

        await sanityClient.delete(doc._id);

        return { success: true, message: "Resume deleted successfully." };
    } catch (error: any) {
        return { success: false, message: error.message || error };
    }
};
