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
    preview: {
        select: {
            title: "firstName",
            subtitle: "lastName",
            jobTitle: "job.title",
        },
        prepare({ title, subtitle, jobTitle }) {
            return {
                title: `${title} ${subtitle}`,
                subtitle: jobTitle ? `Applied for: ${jobTitle}` : "No job selected",
                media: ClipboardImageIcon,
            };
        },
    },
});
