import React from "react";

interface IButtonProps {
    text: string;
    onClick: () => void;
    btnClass?: string;
    textClass?: string;
}

const Button = (props: IButtonProps) => {
    return (
        <button onClick={props.onClick} className={`${props.btnClass} flex border-2 p-4 m-4 rounded-lg bg-black w-min`}>
            <span className={`${props.textClass} text-white px-6`}>{props.text}</span>
        </button>
    );
};

export default Button;
