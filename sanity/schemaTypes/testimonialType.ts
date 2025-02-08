import { InfoOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
    name: "testimonial",
    title: "Testimonies",
    type: "document",
    icon: InfoOutlineIcon,
    fields: [
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
            name: "role",
            type: "string",
        }),
        defineField({
            name: "testimonial",
            type: "text",
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
    ],
});
