"use client";

import { ClimbingBoxLoader } from "react-spinners";

export const Loader = () => {
    return (
        <ClimbingBoxLoader
            className="w-full h-full items-center justify-center self-center"
            color="#1770e4"
            size={50}
        />
    );
};
