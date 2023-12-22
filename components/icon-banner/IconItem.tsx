import React from "react";

interface IIconItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const IconItem = (props: IIconItemProps) => {
    return (
        <div className="flex flex-col items-center">
            {props.icon}
            <h5 className="py-6 text-xl">{props.title}</h5>
            <aside className="leading-7 w-9/12 mb-20 text-sm italic text-zinc-700 md:mb-0">
                {props.description}
            </aside>
        </div>
    );
};

export default IconItem;
