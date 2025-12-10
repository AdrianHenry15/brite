import React from "react";
import Link from "next/link";
import { Resume } from "@/sanity.types";
import { FileText } from "lucide-react";

interface IResumeCardProps {
    resume: Resume;
}

const ResumeCard = ({ resume }: IResumeCardProps) => {
    const asset = (resume.resumeFile as any)?.asset;
    const url = asset?.url || "#";

    // Extract useful metadata
    const originalName = asset?.originalFilename || "Resume";
    const fileSize = asset?.size ? `${(asset.size / 1024).toFixed(1)} KB` : null;

    const fileExtension = originalName.split(".").pop()?.toUpperCase();

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white shadow-md rounded-lg border flex items-start gap-4 hover:shadow-lg transition"
        >
            <div className="p-3 bg-gray-100 rounded-lg">
                <FileText size={28} className="text-blue-600" />
            </div>

            <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800">{originalName}</h3>

                <p className="text-gray-600">{fileExtension} File</p>

                {fileSize && <p className="text-gray-400 text-sm">Size: {fileSize}</p>}
            </div>
        </Link>
    );
};

export default ResumeCard;
