import { JsonIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const jobType = defineType({
    name: "job",
    title: "Job Openings",
    type: "document",
    icon: JsonIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "location",
            type: "string",
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            description: "A short summary of the blog post.",
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    options: { hotspot: true },
                },
            ],
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
    ],
});
