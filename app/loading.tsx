"use client";

import { Loader } from "../components/Loader";

const Loading = () => {
    return (
        <div className="flex h-full w-full items-center absolute justify-center self-center text-center">
            <Loader />
        </div>
    );
};

export default Loading;
