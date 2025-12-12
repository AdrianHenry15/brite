"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Promotion } from "@/sanity.types";
import { Trash2, Save } from "lucide-react";

interface IPromotionFormProps {
    promotion?: Promotion;
}

export default function PromotionForm({ promotion }: IPromotionFormProps) {
    const isEdit = Boolean(promotion);
    const router = useRouter();

    const [form, setForm] = useState({
        title: promotion?.title || "",
        description: promotion?.description || "",
        discountPercentage: promotion?.discountPercentage?.toString() || "",
        startDate: promotion?.startDate
            ? new Date(promotion.startDate).toISOString().slice(0, 16)
            : "",
        endDate: promotion?.endDate ? new Date(promotion.endDate).toISOString().slice(0, 16) : "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.title.trim()) newErrors.title = "Title is required.";
        if (!form.discountPercentage.trim()) newErrors.discountPercentage = "Discount is required.";

        const pct = Number(form.discountPercentage);
        if (pct < 0 || pct > 100) newErrors.discountPercentage = "0–100 only.";

        if (!form.startDate) newErrors.startDate = "Start date is required.";
        if (!form.endDate) newErrors.endDate = "End date is required.";

        if (form.startDate && form.endDate) {
            if (new Date(form.endDate) < new Date(form.startDate)) {
                newErrors.endDate = "End date must be after start date.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            ...form,
            discountPercentage: Number(form.discountPercentage),
        };

        const method = isEdit ? "PATCH" : "POST";
        const endpoint = isEdit ? `/api/promotions/${promotion!._id}` : `/api/promotions`;

        const res = await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            router.push("/admin/promotions");
            router.refresh();
        } else {
            alert("Failed to save promotion.");
        }
    };

    const handleDelete = async () => {
        if (!promotion?._id) return;
        if (!confirm("Delete this promotion?")) return;

        const res = await fetch(`/api/promotions/${promotion._id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            router.push("/admin/promotions");
            router.refresh();
        } else {
            alert("Failed to delete promotion.");
        }
    };

    const InputGroup = ({
        label,
        name,
        required,
        children,
    }: {
        label: string;
        name: string;
        required?: boolean;
        children: React.ReactNode;
    }) => (
        <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
    );

    return (
        <div
            className="
            max-w-2xl mx-auto 
            bg-white dark:bg-gray-800 
            rounded-xl shadow-lg 
            p-8 
            transition 
            border border-gray-200 dark:border-gray-700
        "
        >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                {isEdit ? "Edit Promotion" : "Create Promotion"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <InputGroup label="Promotion Title" name="title" required>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleInput}
                        className={`
                            w-full p-3 rounded-lg 
                            bg-gray-100 dark:bg-gray-700 
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500
                            border
                            ${errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                        `}
                    />
                </InputGroup>

                <InputGroup label="Description" name="description">
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleInput}
                        rows={4}
                        className="
                            w-full p-3 rounded-lg 
                            bg-gray-100 dark:bg-gray-700 
                            text-gray-900 dark:text-white
                            border border-gray-300 dark:border-gray-600
                            focus:ring-2 focus:ring-blue-500
                        "
                    />
                </InputGroup>

                <InputGroup label="Discount Percentage" name="discountPercentage" required>
                    <input
                        type="number"
                        name="discountPercentage"
                        value={form.discountPercentage}
                        onChange={handleInput}
                        className={`
                            w-full p-3 rounded-lg 
                            bg-gray-100 dark:bg-gray-700 
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500
                            border
                            ${
                                errors.discountPercentage
                                    ? "border-red-500"
                                    : "border-gray-300 dark:border-gray-600"
                            }
                        `}
                    />
                </InputGroup>

                <InputGroup label="Start Date" name="startDate" required>
                    <input
                        type="datetime-local"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleInput}
                        className={`
                            w-full p-3 rounded-lg 
                            bg-gray-100 dark:bg-gray-700 
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500
                            border
                            ${errors.startDate ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                        `}
                    />
                </InputGroup>

                <InputGroup label="End Date" name="endDate" required>
                    <input
                        type="datetime-local"
                        name="endDate"
                        value={form.endDate}
                        onChange={handleInput}
                        className={`
                            w-full p-3 rounded-lg 
                            bg-gray-100 dark:bg-gray-700 
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500
                            border
                            ${errors.endDate ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                        `}
                    />
                </InputGroup>

                <div className="flex items-center gap-4 pt-4">
                    <button
                        type="submit"
                        className="
                            flex items-center gap-2
                            px-5 py-3 rounded-lg 
                            bg-blue-600 hover:bg-blue-700 
                            text-white font-medium
                            transition shadow-sm
                        "
                    >
                        <Save size={18} />
                        {isEdit ? "Update Promotion" : "Create Promotion"}
                    </button>

                    {isEdit && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="
                                flex items-center gap-2
                                px-5 py-3 rounded-lg 
                                bg-red-600 hover:bg-red-700 
                                text-white font-medium
                                transition shadow-sm
                            "
                        >
                            <Trash2 size={18} />
                            Delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
