import React from "react";
import {
    Controller,
    type Control,
    type FieldErrors,
    type FieldValues,
    type Path,
} from "react-hook-form";

interface DropdownProps<T extends FieldValues> {
    inputName: Path<T>;
    inputLabel: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    options: string[];
    onChange?: (value: string) => void;
}

const Dropdown = <T extends FieldValues>({
    inputName,
    inputLabel,
    control,
    errors,
    options,
    onChange,
}: DropdownProps<T>) => {
    const errorMessage = errors[inputName]?.message as string | undefined;

    return (
        <div className="mb-4">
            <label htmlFor={inputName} className="mb-2 block text-sm font-semibold text-foreground">
                {inputLabel}
            </label>

            <Controller
                name={inputName}
                control={control}
                rules={{ required: `${inputLabel} is required` }}
                render={({ field }) => (
                    <select
                        {...field}
                        id={inputName}
                        onChange={(e) => {
                            field.onChange(e);
                            onChange?.(e.target.value);
                        }}
                        className="block w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <option value="">Select an option</option>

                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                )}
            />

            {errorMessage && (
                <p className="mt-1 text-xs font-medium text-red-500">{errorMessage}</p>
            )}
        </div>
    );
};

export default Dropdown;
