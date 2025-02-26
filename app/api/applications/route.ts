import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const jobTitle = formData.get("job"); // Job title from form

        // Step 1: Fetch job document by title
        const job = await client.fetch(`*[_type == "job" && title == $title][0]`, {
            title: jobTitle,
        });

        if (!job) {
            return NextResponse.json({ error: "Job not found" }, { status: 400 });
        }

        // Step 2: Handle resume file upload
        const resumeFile = formData.get("resumeFile") as File;

        let resumeFileReference = null;
        if (resumeFile) {
            const uploadedFile = await client.assets.upload("file", resumeFile);
            resumeFileReference = {
                _type: "file",
                asset: {
                    _ref: uploadedFile._id,
                },
            };
        }

        // Step 3: Prepare application data
        const application = {
            _type: "application",
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            job: {
                _type: "reference",
                _ref: job._id, // Using valid job document ID
            },
            resumeFile: resumeFileReference,
            publishedAt: new Date().toISOString(),
        };

        const createdApplication = await client.create(application);

        return NextResponse.json(createdApplication, { status: 201 });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
