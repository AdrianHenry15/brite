import { ClipboardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const resumeType = defineType({
    name: "resume",
    title: "Resumes",
    type: "document",
    icon: ClipboardIcon,
    fields: [
        defineField({
            name: "userId",
            type: "string",
        }),
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "name",
            },
        }),
        defineField({
            name: "resume",
            type: "file",
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
    ],
});
