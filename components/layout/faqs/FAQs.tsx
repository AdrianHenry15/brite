import React from "react";
import FAQContainer from "./FAQContainer";
import FAQItem from "./FAQItem";
import {
    BriteFAQs,
    ExteriorCleaningFAQs,
    HolidayLightingFAQs,
    PressureWashingFAQs,
    SoftWashingFAQs,
    TrashBinCleaningFAQs,
    WindowCleaningFAQs,
} from "../../../lib/FAQItems";
import FAQSidebarNav from "./FAQSidebarNav";
import { FAQNavMenu } from "../../../lib/constants";

const FAQs = () => {
    return (
        <div className="flex flex-col w-full mb-10 md:my-10 md:flex-row">
            {/* FAQs Sidebar Nav */}
            <FAQSidebarNav items={FAQNavMenu} />
            <div className="flex flex-col flex-1 w-full relative">
                {/* FAQs */}
                {/* BRITE */}
                <FAQContainer title="Brite" id="brite">
                    {BriteFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
                {/* EXTERIOR CLEANING */}
                <FAQContainer title="Exterior Cleaning" id="exterior-cleaning">
                    {ExteriorCleaningFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
                {/* HOLIDAY LIGHTING */}
                <FAQContainer title="Holiday Lighting" id="holiday-lighting">
                    {HolidayLightingFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
                {/* PRESSURE WASHING */}
                <FAQContainer title="Pressure Washing" id="pressure-washing">
                    {PressureWashingFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
                {/* SOFT WASHING */}
                <FAQContainer title="Soft Washing" id="soft-washing">
                    {SoftWashingFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
                {/* TRASH BIN CLEANING */}
                <FAQContainer title="Trash Bin Cleaning" id="trash-bin-cleaning">
                    {TrashBinCleaningFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
                {/* WINDOW CLEANING */}
                <FAQContainer title="Window Cleaning" id="window-cleaning">
                    {WindowCleaningFAQs.map((item, index) => {
                        return (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        );
                    })}
                </FAQContainer>
            </div>
        </div>
    );
};

export default FAQs;
