"use client";

import { ClimbingBoxLoader } from "react-spinners";

export const Loader = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh", // full viewport height
                width: "100vw", // full viewport width
                position: "fixed", // stays centered even if page scrolls
                top: 0,
                left: 0,
                backgroundColor: "white", // optional: add background for overlay look
                zIndex: 9999, // optional: appear above all content
            }}
        >
            <ClimbingBoxLoader color="#1770e4" size={20} />
        </div>
    );
};
