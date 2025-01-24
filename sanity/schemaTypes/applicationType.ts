import { ClipboardImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const applicationType = defineType({
    name: "application",
    title: "Applications",
    type: "document",
    icon: ClipboardImageIcon,
    fields: [
        defineField({
            name: "userId",
            type: "string",
        }),
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
            name: "firstName",
            type: "string",
        }),
        defineField({
            name: "lastName",
            type: "string",
        }),
        defineField({
            name: "email",
            type: "string",
        }),
        defineField({
            name: "phone",
            type: "string",
        }),
        defineField({
            name: "resume",
            title: "Resume",
            type: "reference",
            to: [{ type: "resume" }], // Ref the "resume" type here
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
    ],
});
