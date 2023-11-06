import React from "react";
import { Services } from "../store/schemas/IEstimateStore";
import Button from "./ui/buttons/Button";

const EstimateModal = () => {
    return (
        <div className="absolute bg-white flex flex-col w-1/3 p-4 rounded-xl opacity-90 right-4 top-36">
            <span>Start Your Free Estimate</span>
            <span>I'm Interested In:</span>
            <div className="w-full flex flex-col items-center">
                {/* SERVICES  */}
                {(Object.keys(Services) as Array<keyof typeof Services>).map((key) => {
                    return <Button text={key} onClick={() => {}} />;
                })}
            </div>
        </div>
    );
};

export default EstimateModal;
