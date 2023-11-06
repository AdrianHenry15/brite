import React from "react";
import { Services } from "../store/schemas/IEstimateStore";
import Button from "./ui/buttons/Button";

const EstimateModal = () => {
    return (
        <div className="absolute bg-white flex flex-col lg:w-1/4 p-4 rounded-xl opacity-90 w-full top-[500px]">
            <span>Start Your Free Estimate</span>
            <span>I'm Interested In:</span>
            <div className="w-full flex flex-col items-center">
                {/* SERVICES  */}
                {(Object.keys(Services) as Array<keyof typeof Services>).map((key) => {
                    return <Button key={`div-${key}`} text={key} onClick={() => {}} />;
                })}
            </div>
        </div>
    );
};

export default EstimateModal;
