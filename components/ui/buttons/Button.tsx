import React from "react";

interface IButtonProps {
    text: string;
    onClick: (e: any) => void;
    btnClass?: string;
    textClass?: string;
    key?: string;
}

const Button = (props: IButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={`${props.btnClass} flex border-2 p-2 my-4 rounded-lg border-sky-700 w-2/3 lg:w-[205px] justify-center`}
        >
            <span className={`${props.textClass} text-black px-6 text-sm`}>{props.text}</span>
        </button>
    );
};

export default Button;
