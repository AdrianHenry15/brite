import React from "react";
import { Controller, FieldErrors } from "react-hook-form";

interface IInputAltProps {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    control: any;
    errors?: FieldErrors;
    validationRules?: any;
}

const InputAlt = ({ inputName, control, errors, placeholder, validationRules }: IInputAltProps) => {
    const InputClass = `border-2 border-gray-400 text-black flex w-full my-2 p-2 rounded-sm h-8 shadow-md`;

    return (
        <Controller
            rules={validationRules}
            name={inputName}
            control={control}
            defaultValue={""}
            render={({ field }) => (
                <div>
                    <input
                        {...field}
                        className={InputClass}
                        type="text"
                        placeholder={placeholder}
                    />
                    {errors && errors[inputName] && (
                        <p
                            className={`${
                                errors && errors[inputName] ? "text-red-600" : "text-transparent"
                            } text-[10px]`}
                        >
                            {errors[inputName].message.toString()}
                        </p>
                    )}
                </div>
            )}
        ></Controller>
    );
};

export default InputAlt;
