import React from "react";

interface IInputProps {
    type: string;
    placeHolder: string;
    onChange: () => void;
    className?: string;
}

const Input = (props: IInputProps) => {
    return <input className={`${props.className} `} type="text" placeholder={props.placeHolder} onChange={props.onChange} />;
};

export default Input;
