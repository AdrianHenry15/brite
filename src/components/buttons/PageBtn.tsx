import React from "react";
import { Link } from "react-router-dom";

interface IPageBtnProps {
    path: string;
    text: string;
    btnClass?: string;
    textClass?: string;
}

const PageBtn = (props: IPageBtnProps) => {
    return (
        <Link to={props.path}>
            <button className={`flex border-2 border-white p-4 m-4 rounded-md ${props.btnClass}`}>
                <span className={`text-white ${props.textClass}`}>{props.text}</span>
            </button>
        </Link>
    );
};

export default PageBtn;
