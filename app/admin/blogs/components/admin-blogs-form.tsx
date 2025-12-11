"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Author, Blog } from "@/sanity/lib/types";

export interface BlogData {
    _id?: string;
    title: string;
    excerpt?: string;
    body?: string;
    authorId?: string;
    userId?: string;
    mainImageAssetId?: string;
    publishedAt?: string;
}

export default function AdminBlogsForm({ initialData }: { initialData?: BlogData }) {
    const router = useRouter();
    const isEditing = Boolean(initialData?._id);

    const [authors, setAuthors] = useState<Author[]>([]);
    const [form, setForm] = useState<BlogData>({
        title: initialData?.title || "",
        excerpt: initialData?.excerpt || "",
        body: initialData?.body || "",
        userId: initialData?.userId || "",
        authorId: initialData?.authorId || "",
        mainImageAssetId: initialData?.mainImageAssetId || "",
        publishedAt: initialData?.publishedAt || new Date().toISOString().slice(0, 16), // datetime-local format
    });

    useEffect(() => {
        async function loadAuthors() {
            const res = await fetch("/api/authors");
            const data = await res.json();
            setAuthors(data || []);
        }
        loadAuthors();
    }, []);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const method = isEditing ? "PATCH" : "POST";
        const endpoint = isEditing ? `/api/blogs/${initialData?._id}` : `/api/blogs`;

        const res = await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            router.push("/admin/blogs");
            router.refresh();
        } else {
            alert("Failed to save blog post.");
        }
    }

    async function handleDelete() {
        if (!initialData?._id) return;
        if (!confirm("Delete this blog post?")) return;

        const res = await fetch(`/api/blogs/${initialData._id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            router.push("/admin/blogs");
            router.refresh();
        } else {
            alert("Failed to delete blog post.");
        }
    }

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-white mb-4">
                {isEditing ? "Edit Blog Post" : "Create Blog Post"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="text-white block mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 text-white p-2 rounded"
                    />
                </div>

                {/* Excerpt */}
                <div>
                    <label className="text-white block mb-1">Excerpt</label>
                    <textarea
                        name="excerpt"
                        value={form.excerpt}
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded"
                    />
                </div>

                {/* Body */}
                <div>
                    <label className="text-white block mb-1">Body</label>
                    <textarea
                        name="body"
                        rows={10}
                        value={form.body}
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded"
                    />
                </div>

                {/* Author */}
                <div>
                    <label className="text-white block mb-1">Author</label>
                    <select
                        name="authorId"
                        value={form.authorId}
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded"
                    >
                        <option value="">Select Author</option>
                        {authors.map((author) => (
                            <option key={author._id} value={author._id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Publish Date */}
                <div>
                    <label className="text-white block mb-1">Published At</label>
                    <input
                        type="datetime-local"
                        name="publishedAt"
                        value={form.publishedAt}
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded"
                    />
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                        {isEditing ? "Update" : "Create"}
                    </button>

                    {isEditing && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
