import React from "react";
import { Controller, FieldErrors } from "react-hook-form";

interface ITextareaAltProps {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    control: any;
}

const TextareaAlt = ({ inputName, control, placeholder }: ITextareaAltProps) => {
    return (
        <Controller
            name={inputName}
            control={control}
            defaultValue={""}
            render={({ field }) => (
                <div>
                    <textarea
                        className="border-2 border-gray-400 h-24 my-2 p-2 w-full text-black"
                        placeholder={placeholder}
                        {...field}
                    />
                </div>
            )}
        ></Controller>
    );
};

export default TextareaAlt;
