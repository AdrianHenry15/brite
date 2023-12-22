import React from "react";

interface IIconItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const IconItem = (props: IIconItemProps) => {
    return (
        <div className="flex flex-col items-center flex-1 px-6 md:px-2 lg:px-12 xl:px-16">
            {props.icon}
            <h5 className="py-6 text-xl">{props.title}</h5>
            <aside className="leading-7 mb-20 text-sm italic text-zinc-700 flex flex-1 md:mb-0">
                {props.description}
            </aside>
        </div>
    );
};

export default IconItem;
