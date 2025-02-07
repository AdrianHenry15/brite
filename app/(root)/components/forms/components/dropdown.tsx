import React from "react";
import { Controller } from "react-hook-form";

interface DropdownProps {
    inputName: string;
    inputLabel: string;
    control: any;
    errors: any;
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ inputName, inputLabel, control, errors, options }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{inputLabel}</label>
            <Controller
                name={inputName}
                control={control}
                rules={{ required: `${inputLabel} is required` }}
                render={({ field }) => (
                    <select
                        {...field}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Select an option</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors[inputName] && (
                <p className="text-red-500 text-xs mt-1">{errors[inputName].message}</p>
            )}
        </div>
    );
};

export default Dropdown;
