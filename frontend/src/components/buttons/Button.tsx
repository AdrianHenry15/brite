import React from "react";

interface IButtonProps {
    path: string;
    text: string;
    onClick: () => void;
    btnClass?: string;
    textClass?: string;
}

const Button = (props: IButtonProps) => {
    return (
        <button onClick={props.onClick} className={`flex border-2 p-4 m-4 rounded-md ${props.btnClass}`}>
            <span className={`text-white ${props.textClass}`}>{props.text}</span>
        </button>
    );
};

export default Button;
