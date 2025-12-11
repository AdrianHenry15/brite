import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import type { SanityDocument } from "sanity";

export const resumeType = defineType({
    name: "resume",
    title: "Resumes",
    type: "document",
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: "resumeFile",
            title: "Resume File",
            type: "file",
            options: {
                accept: ".pdf,.doc,.docx",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "userId",
            title: "User ID (Clerk)",
            type: "string",
            hidden: true,
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc: SanityDocument) => {
                    const fileRef = (doc as any)?.resumeFile?.asset?._ref;
                    if (fileRef) {
                        const fileName = fileRef.split("-").slice(1, -1).join("-");
                        return `resume-${fileName}`;
                    }
                    return "resume-untitled";
                },
                slugify: (input: string) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")
                        .slice(0, 200),
            },
        }),
    ],
});
