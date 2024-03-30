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
    const InputClass =
        "border-2 border-gray-400 text-black z-50 my-2 px-2 rounded-sm w-full shadow-md";

    return (
        <div className="py-2 w-full text-black">
            <label className="font-semibold text-lg text-white mb-2 underline">{inputLabel}</label>
            <Controller
                name={inputName}
                control={control}
                defaultValue={options[0].name}
                render={({ field }) => (
                    <>
                        <select required className={`${InputClass} py-2`} {...field}>
                            {options.map((service) => (
                                <option
                                    className="text-black"
                                    key={service.name}
                                    value={service.name}
                                >
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
