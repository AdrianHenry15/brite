import Image from "next/image";
import React from "react";

import Button from "../buttons/Button";

import Pic from "../../../public/assets/imgs/brite-pic-1.jpg";

const LightingPromo = () => {
    return (
        <div className="flex flex-col p-6 py-6 w-full lg:px-48 lg:py-16">
            {/* TEXT AND IMAGE  */}
            <div className="flex">
                <Image src={Pic} alt="pic" className="hidden w-64 lg:flex h-64 self-center mr-24" />
                {/* TEXT CONTAINER */}
                <div className="flex flex-col">
                    <span className="text-2xl font-extrabold mb-4 lg:text-4xl">
                        Jingle Bell Rock That Curb Appeal - Book Your Christmas Lighting
                        Installation Today
                    </span>
                    <span className="text-sm md:text-lg lg:text-lg">
                        {`The holidays aren’t the same without twinkling outdoor Christmas lights and festive
                decorations. But who has time to untangle wires and balance on ladders when there’s
                shopping, baking, party planning, and memory-making to do? Leave the hassle to the
                professionals! We’ll listen to your vision, assess your space, and create a custom
                Christmas lighting plan that’s sure to impress.`}
                    </span>
                    <br />
                    <span className="text-sm md:text-lg lg:text-lg">
                        Beat the rush and schedule your Christmas lighting installation today!
                        Appointments are filling up fast.
                    </span>
                    <Button
                        isLink
                        linkClass="mt-10 self-center lg:self-start"
                        link="/holiday-lighting/#holiday-light-estimate-form"
                        btnClass="bg-blue-500 border-none self-center w-48"
                        text={"Book Today!"}
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default LightingPromo;
