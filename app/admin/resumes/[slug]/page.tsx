"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ResumePage = ({ params }: { params: { id: string } }) => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("applicationId", params.id);

        try {
            await axios.post("/api/update-resume", formData);
            alert("Resume updated successfully!");
            router.refresh(); // Reload the page to show the new resume
        } catch (error) {
            console.error("Error updating resume:", error);
            alert("Failed to update resume.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Update Resume</h2>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="border p-2 w-full"
            />
            <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                {uploading ? "Uploading..." : "Upload Resume"}
            </button>

            <h3 className="text-lg font-semibold mt-6">Current Resume</h3>
            <iframe
                src={`/api/view-resume?id=${params.id}`}
                className="w-full h-[80vh] border rounded-lg"
            />
        </div>
    );
};

export default ResumePage;
