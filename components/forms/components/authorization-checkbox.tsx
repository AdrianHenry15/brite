"use client";

import Link from "next/link";
import React from "react";
import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
    type RegisterOptions,
} from "react-hook-form";

interface AuthorizationCheckboxProps<T extends FieldValues> {
    inputName: Path<T>;
    control: Control<T>;
    validationRules?: RegisterOptions<T, Path<T>>;
}

const AuthorizationCheckbox = <T extends FieldValues>({
    inputName,
    control,
    validationRules,
}: AuthorizationCheckboxProps<T>) => {
    return (
        <Controller
            name={inputName}
            control={control}
            rules={validationRules}
            defaultValue={true as never}
            render={({ field, fieldState }) => (
                <div className="mt-4 flex flex-col gap-2">
                    <label className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-5 text-muted-foreground">
                        <input
                            type="checkbox"
                            checked={Boolean(field.value)}
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-input accent-primary"
                        />

                        <span>
                            By clicking here, you authorize Brite Exterior Services to reach out to
                            you by call, email, or text in accordance with our{" "}
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-primary underline-offset-2 hover:underline"
                                href="/privacy-policy"
                            >
                                Privacy Policy
                            </Link>
                            . You can reply &quot;STOP&quot; to opt out at any time.
                        </span>
                    </label>

                    {fieldState.error?.message && (
                        <p className="ml-1 text-xs font-medium text-destructive">
                            {fieldState.error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

export default AuthorizationCheckbox;
