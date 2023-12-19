import Link from "next/link";
import React from "react";

const Estimate = () => {
    return (
        <div>
            <Link href={process.env.HOUSECALL_PRO_LINK}>Click this</Link>
        </div>
    );
};

export default Estimate;
