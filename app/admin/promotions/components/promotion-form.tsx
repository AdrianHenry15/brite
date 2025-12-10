"use client";

import { Promotion } from "@/sanity.types";
import { createPromotion, updatePromotion } from "../actions";

interface IPromotionFormProps {
    promotion?: Promotion; // If provided → edit mode
}

export default function PromotionForm({ promotion }: IPromotionFormProps) {
    const isEdit = Boolean(promotion);

    return (
        <form
            action={(formData) =>
                isEdit ? updatePromotion(promotion!._id, formData) : createPromotion(formData)
            }
            className="space-y-4 bg-white p-6 border rounded-lg shadow-md"
        >
            <h2 className="text-xl font-semibold mb-2">
                {isEdit ? "Update Promotion" : "Create New Promotion"}
            </h2>

            <input
                name="title"
                placeholder="Title"
                defaultValue={promotion?.title}
                required
                className="input"
            />

            <textarea
                name="description"
                placeholder="Description"
                defaultValue={promotion?.description}
                className="input"
            />

            <input
                type="number"
                name="discountPercentage"
                placeholder="Discount %"
                defaultValue={promotion?.discountPercentage}
                required
                className="input"
            />

            <label className="block text-sm">Start Date</label>
            <input
                type="datetime-local"
                name="startDate"
                defaultValue={
                    promotion?.startDate
                        ? new Date(promotion.startDate).toISOString().slice(0, 16)
                        : ""
                }
                required
                className="input"
            />

            <label className="block text-sm">End Date</label>
            <input
                type="datetime-local"
                name="endDate"
                defaultValue={
                    promotion?.endDate ? new Date(promotion.endDate).toISOString().slice(0, 16) : ""
                }
                required
                className="input"
            />

            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                {isEdit ? "Update Promotion" : "Create Promotion"}
            </button>
        </form>
    );
}
