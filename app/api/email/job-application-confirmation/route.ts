import JobApplicationConfirmationEmailTemplate from "@/components/email-templates/job-application/job-application-confirmation-email-template";
import JobApplicationEmailTemplate from "@/components/email-templates/job-application/job-application-email-template";
import { auth } from "@clerk/nextjs/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { userId } = await auth(); // Get the authenticated user's ID
        if (!userId) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Parse request body to get applicant details
        const { applicantName, applicantEmail, applicantPhoneNumber, job } = await req.json();

        // Ensure all fields are provided
        if (!applicantName || !applicantEmail || !applicantPhoneNumber || !job) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "Brite Hiring <noreply@britecleaning.com>",
            to: [applicantEmail], // Update with the actual recipient email
            subject: `Job Application Confirmation - ${job}`,
            react: JobApplicationConfirmationEmailTemplate({
                applicantName,
                applicantEmail,
                applicantPhoneNumber,
                job,
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
