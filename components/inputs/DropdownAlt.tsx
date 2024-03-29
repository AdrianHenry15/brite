"use client";

import React from "react";
import { Controller, FieldErrors } from "react-hook-form";

interface IDropdownAltProps {
    inputName: string;
    inputLabel: string;
    control: any;
    errors: FieldErrors;
    options: { name: string }[];
    errorText: string;
}

const DropdownAlt = ({
    inputName,
    inputLabel,
    options,
    errorText,
    control,
    errors,
}: IDropdownAltProps) => {
    const InputClass = "border-2 border-gray-400 my-2 p-2 rounded-sm w-full h-8 shadow-md";

    return (
        <div className="py-2 w-full text-black">
            <label className="font-semibold text-lg mb-2 underline">{inputLabel}</label>
            <Controller
                name={inputName}
                control={control}
                defaultValue={options[0].name}
                render={({ field }) => (
                    <>
                        <select required className={`${InputClass} py-4`} {...field}>
                            {options.map((service) => (
                                <option key={service.name} value={service.name}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                        {(errors[inputName] && errors[inputName].type === "required") ||
                        field.value === "None" ? (
                            <p className="text-sm text-red-600 ml-4">{errorText}</p>
                        ) : null}
                    </>
                )}
            />
        </div>
    );
};

export default DropdownAlt;
