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

        // Step 2: Use the job's actual document ID
        const application = {
            _type: "application",
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            job: {
                _type: "reference",
                _ref: job._id, // ✅ Now using a valid document ID
            },
            publishedAt: new Date().toISOString(),
        };

        const createdApplication = await client.create(application);

        return NextResponse.json(createdApplication, { status: 201 });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
