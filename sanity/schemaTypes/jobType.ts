import { DesktopIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const jobType = defineType({
    name: "job",
    title: "Job Openings",
    type: "document",
    icon: DesktopIcon,
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
            name: "description",
            type: "text",
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
    ],
});
