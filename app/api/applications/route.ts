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

        // Step 2: Check for duplicate applications
        const email = formData.get("email");
        const duplicateApplication = await client.fetch(
            `*[_type == "application" && job.title == $jobTitle && email == $email][0]`,
            {
                jobTitle,
                email,
            },
        );

        if (duplicateApplication) {
            return NextResponse.json(
                { error: "You have already applied for this job with this email." },
                { status: 400 },
            );
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
            publishedAt: new Date().toISOString(),
        };

        const createdApplication = await client.create(application);

        return NextResponse.json(createdApplication, { status: 201 });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
