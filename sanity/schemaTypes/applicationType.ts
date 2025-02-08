import { ClipboardImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const applicationType = defineType({
    name: "application",
    title: "Applications",
    type: "document",
    icon: ClipboardImageIcon,
    fields: [
        defineField({
            name: "job",
            title: "Job Opening",
            type: "reference",
            to: [{ type: "job" }], // Ref the "resume" type here
        }),
        defineField({
            name: "resume",
            title: "Resume",
            type: "reference",
            to: [{ type: "resume" }], // Ref the "resume" type here
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc) => {
                    const jobId = (doc.job as { _ref?: string })?._ref || "no-job";
                    return `${doc.firstName}-${doc.lastName}-${jobId}`;
                },
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")
                        .slice(0, 200),
            },
        }),
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "Email Address",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: "phone",
            title: "Phone Number",
            type: "string",
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        }),
    ],
});
