import React from "react";
import Card from "../Card";

import pic from "../../../public/assets/imgs/brite-pic-8.jpg";

const Jumbotron = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center relative bg-cover bg-[url('/assets/imgs/green-mountains.jpg')] h-80 bg-opacity-70 md:h-[80vh] lg:h-[75vh] lg:flex-row">
            <Card
                link={""}
                title={"Exterior Cleaning"}
                img={pic}
                description={
                    "i be doing stuff mainly cause im cool and i got surf board on deck in da back a da boomblap time for som elunch"
                }
            />
            <Card
                link={""}
                title={"Landscape Lighting"}
                img={pic}
                description={
                    "i be doing stuff mainly cause im cool and i got surf board on deck in da back a da boomblap time for som elunch"
                }
            />
            <Card
                link={""}
                title={"Christmas Lighting"}
                img={pic}
                description={
                    "i be doing stuff mainly cause im cool and i got surf board on deck in da back a da boomblap time for som elunch"
                }
            />
        </div>
    );
};

export default Jumbotron;
