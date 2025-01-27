import { v4 as uuidv4 } from "uuid"; // You may need this for generating a unique slug if not passed
import { client } from "../client";

interface Resume {
    userId: string;
    name: string;
    resumeFile: string; // Assuming it's a URL or path to the file in Sanity
    publishedAt: string;
}

const createUserResume = async ({ userId, name, resumeFile, publishedAt }: Resume) => {
    try {
        // Generate a unique slug if necessary
        const slug = `${userId}-${uuidv4()}`;

        // Create the resume document
        const resumeDocument = {
            _type: "resume",
            userId,
            name,
            slug,
            resume: {
                _type: "file",
                asset: {
                    _ref: resumeFile, // Assuming you pass the file's asset reference here
                },
            },
            publishedAt,
        };

        // Create the document in Sanity
        const response = await client.create(resumeDocument);
        return response;
    } catch (error) {
        console.error("Error creating resume:", error);
        throw new Error("Error creating resume");
    }
};

export default createUserResume;
