import React from "react";

interface IButtonProps {
    name?: string;
    className?: string;
    icon?: React.ReactNode;
    roundedFull?: boolean;
    altColor?: boolean;
    onClick?: () => void;
    submit?: boolean;
    leftChildren?: boolean;
    rightChildren?: boolean;
    children?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
    return (
        <button
            type={props.submit ? "submit" : "button"}
            className={`${props.className} ${props.roundedFull ? "rounded-full" : "rounded-lg"} ${
                props.altColor
                    ? "text-blue-600 bg-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:text-black"
                    : "bg-blue-600 transition-all duration-300 ease-in-out hover:text-black hover:scale-105 text-white"
            } flex items-center py-2 px-6 shadow-lg`}
        >
            {props.leftChildren ? props.children : null}
            <p onClick={props.onClick}>
                {props.name}
                {props.icon ? props.icon : null}
            </p>
            {props.rightChildren ? props.children : null}
        </button>
    );
};

export default Button;
