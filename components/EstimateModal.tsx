import React from "react";
import { Services } from "../store/schemas/IEstimateStore";
import Button from "./ui/buttons/Button";

const EstimateModal = () => {
    return (
        <div className="flex flex-col bg-white">
            <span>Start Your Free Estimate</span>
            <span>I'm Interested In:</span>
            <div className="w-full flex flex-col items-center">
                {/* SERVICES  */}
                {(Object.keys(Services) as Array<keyof typeof Services>).map((key) => {
                    return (
                        <Button
                            key={`div-${key}`}
                            text={key}
                            onClick={() => {}}
                            textClass="text-xs"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default EstimateModal;
