"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AdminUserFormProps {
    initialData?: {
        id: string;
        firstName: string;
        lastName: string;
        emailAddresses?: [{ emailAddress: string }];
        imageUrl: string;
    };
}

export default function AdminUserForm({ initialData }: AdminUserFormProps) {
    const router = useRouter();
    const isEditing = Boolean(initialData);

    const [form, setForm] = useState({
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        email: initialData?.emailAddresses?.[0]?.emailAddress || "",
        password: "",
        confirmPassword: "",
        imageUrl: initialData?.imageUrl || "",
    });

    const [isDragging, setIsDragging] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setForm((prev) => ({ ...prev, imageUrl: url }));
    }

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDragging(true);
    }

    function handleDragLeave() {
        setIsDragging(false);
    }

    function validatePassword(password: string) {
        const errors: string[] = [];

        if (password.length < 8) {
            errors.push("Password must be at least 8 characters.");
        }
        if (!/[A-Z]/i.test(password)) {
            errors.push("Password must contain at least one letter.");
        }
        if (!/[0-9]/.test(password)) {
            errors.push("Password must contain at least one number.");
        }

        return errors;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!isEditing) {
            // BASIC PASSWORD VALIDATION
            const errors = validatePassword(form.password);

            if (form.password !== form.confirmPassword) {
                return alert("Passwords do not match.");
            }

            if (errors.length > 0) {
                return alert(errors.join("\n"));
            }
        }

        const method = isEditing ? "PATCH" : "POST";
        const endpoint = isEditing ? `/api/users/${initialData?.id}` : `/api/users`;

        const payload = isEditing
            ? {
                  firstName: form.firstName,
                  lastName: form.lastName,
                  imageUrl: form.imageUrl,
              }
            : {
                  firstName: form.firstName,
                  lastName: form.lastName,
                  email: form.email,
                  password: form.password,
                  imageUrl: form.imageUrl,
              };

        const res = await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            router.push("/admin/users");
            router.refresh();
        } else {
            alert("Failed to save user.");
        }
    }

    async function handleDelete() {
        if (!initialData?.id) return;
        if (!confirm("Are you sure you want to delete this user?")) return;

        const res = await fetch(`/api/users/${initialData.id}`, { method: "DELETE" });

        if (res.ok) {
            router.push("/admin/users");
            router.refresh();
        } else {
            alert("Failed to delete user.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow"
        >
            {/* First Name */}
            <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded"
                />
            </div>

            {/* Last Name */}
            <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded"
                />
            </div>

            {/* Email (Create only) */}
            {!isEditing && (
                <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded"
                    />
                </div>
            )}

            {/* Password + Confirm Password (Create only) */}
            {!isEditing && (
                <>
                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                minLength={8}
                                className="w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded pr-12"
                            />

                            {/* Show/hide toggle */}
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength={8}
                            className="w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded"
                        />
                    </div>
                </>
            )}

            {/* Drag & Drop Image Upload */}
            <div>
                <label className="block text-sm font-medium mb-1">Profile Image</label>

                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`
                        border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                        transition
                        ${isDragging ? "border-blue-400 bg-blue-50 dark:bg-gray-700" : "border-gray-400"}
                    `}
                >
                    {form.imageUrl ? (
                        <img
                            src={form.imageUrl}
                            alt="Preview"
                            className="mx-auto h-24 w-24 rounded-full object-cover shadow"
                        />
                    ) : (
                        <p className="text-gray-500 dark:text-gray-300">
                            Drag & drop an image here, or paste a URL below
                        </p>
                    )}
                </div>

                <input
                    type="text"
                    name="imageUrl"
                    value={form.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full mt-3 bg-gray-100 dark:bg-gray-700 text-white p-2 rounded"
                />
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    {isEditing ? "Update User" : "Create User"}
                </button>

                {isEditing && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                    >
                        Delete User
                    </button>
                )}
            </div>
        </form>
    );
}
