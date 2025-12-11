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

    // Form State
    const [form, setForm] = useState({
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        email: initialData?.emailAddresses?.[0]?.emailAddress || "",
        password: "",
        confirmPassword: "",
        imageUrl: initialData?.imageUrl || "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isDragging, setIsDragging] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Validation Logic
    function validateField(name: string, value: string) {
        let error = "";

        switch (name) {
            case "firstName":
            case "lastName":
                if (!value.trim()) error = "This field is required.";
                break;

            case "email":
                if (!isEditing && !value.trim()) error = "Email is required.";
                else if (!isEditing && !/^\S+@\S+\.\S+$/.test(value))
                    error = "Invalid email format.";
                break;

            case "password":
                if (!isEditing) {
                    if (value.length < 8) error = "Password must be at least 8 characters.";
                    else if (!/[A-Z]/i.test(value)) error = "Password must contain a letter.";
                    else if (!/[0-9]/.test(value)) error = "Password must contain a number.";
                }
                break;

            case "confirmPassword":
                if (!isEditing && value !== form.password) error = "Passwords do not match.";
                break;
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    }

    // Drag-and-drop image
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

    // Submit handler
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // Final validation before sending
        const newErrors: Record<string, string> = {};

        Object.entries(form).forEach(([name, value]) => {
            if (!isEditing || name !== "email") {
                validateField(name, value);
                if (errors[name]) newErrors[name] = errors[name];
            }
        });

        if (Object.keys(newErrors).length > 0) {
            return alert("Please fix all validation errors.");
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
            const data = await res.json();
            alert(data.error || "Failed to create user.");
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

    // Shared Input Component
    const InputGroup = ({
        label,
        name,
        required = false,
        children,
    }: {
        label: string;
        name: string;
        required?: boolean;
        children: React.ReactNode;
    }) => (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
        </div>
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow"
        >
            {/* First Name */}
            <InputGroup label="First Name" name="firstName" required>
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={`w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded ${
                        errors.firstName ? "border border-red-500" : ""
                    }`}
                />
            </InputGroup>

            {/* Last Name */}
            <InputGroup label="Last Name" name="lastName" required>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={`w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded ${
                        errors.lastName ? "border border-red-500" : ""
                    }`}
                />
            </InputGroup>

            {/* Email */}
            {!isEditing && (
                <InputGroup label="Email Address" name="email" required>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded ${
                            errors.email ? "border border-red-500" : ""
                        }`}
                    />
                </InputGroup>
            )}

            {/* Password Fields */}
            {!isEditing && (
                <>
                    <InputGroup label="Password" name="password" required>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className={`w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded pr-12 ${
                                    errors.password ? "border border-red-500" : ""
                                }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </InputGroup>

                    <InputGroup label="Confirm Password" name="confirmPassword" required>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className={`w-full bg-gray-100 dark:bg-gray-700 text-white p-2 rounded ${
                                errors.confirmPassword ? "border border-red-500" : ""
                            }`}
                        />
                    </InputGroup>
                </>
            )}

            {/* Image Upload */}
            <InputGroup label="Profile Image" name="imageUrl">
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
                        isDragging
                            ? "border-blue-400 bg-blue-50 dark:bg-gray-700"
                            : "border-gray-400"
                    }`}
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
            </InputGroup>

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
