import React from "react";
import { Controller, FieldErrors } from "react-hook-form";

interface ITextareaProps {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    control: any;
}

const Textarea = ({ inputName, control, placeholder }: ITextareaProps) => {
    return (
        <Controller
            name={inputName}
            control={control}
            defaultValue={""}
            render={({ field }) => (
                <div>
                    <textarea
                        className="border-2 border-gray-400 my-2 p-2 w-full h-40"
                        placeholder={placeholder}
                        {...field}
                    />
                </div>
            )}
        ></Controller>
    );
};

export default Textarea;
