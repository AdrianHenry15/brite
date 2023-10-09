import React from "react";

interface IInputProps {
    type: string;
    placeHolder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input = (props: IInputProps) => {
    return (
        <input
            className={`${props.className} border-black border-[1px] m-2 p-2 rounded-sm w-1/2`}
            type="text"
            placeholder={props.placeHolder}
            onChange={props.onChange}
        />
    );
};

export default Input;
