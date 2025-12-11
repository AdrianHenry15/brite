import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const userType = defineType({
    name: "user",
    title: "Users",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "userId",
            title: "User ID (Clerk)",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "imageUrl",
            title: "Profile Image",
            type: "url",
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
            options: {
                list: [
                    { title: "Admin", value: "admin" },
                    { title: "User", value: "user" },
                ],
            },
            initialValue: "user",
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
        }),
    ],
    preview: {
        select: { title: "fullName", subtitle: "email", media: "imageUrl" },
    },
});
