import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: "author",
    title: "Authors",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required().error("Name is required."),
        }),

        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
            description: "A short bio of the author.",
        }),
    ],
});
