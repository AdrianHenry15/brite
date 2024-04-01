import { Metadata } from "next";
import React from "react";

import DummyImg from "../../../../public/assets/imgs/Landscape Lighting Main pic.png";

import TextImgContainer from "../../../../components/TextImgContainer";

const DummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies mauris vel nisi tincidunt, eget cursus nisi vehicula. Nam consectetur nisi eget nulla ullamcorper, vitae consectetur mi faucibus. Fusce malesuada purus vel est dignissim, a suscipit mauris vestibulum. Proin vitae velit sit amet felis dapibus tristique. Nullam euismod est eu metus commodo, vel tristique justo gravida. Nulla facilisi. Aenean id elit vitae justo convallis vehicula. In hac habitasse platea dictumst. Sed rhoncus ultricies odio, eu pellentesque eros sodales non. Fusce gravida euismod nunc, sed rutrum nisi tempor sed. Duis auctor libero non magna suscipit, quis viverra quam efficitur. Curabitur blandit mi sit amet augue dictum posuere. Phasellus ut fringilla ante, a vulputate turpis. Curabitur vel eleifend purus.";

export const metadata: Metadata = {
    title: "Our Story At Brite",
    description: "About Us",
};

export default function AboutUs() {
    return (
        <section className="flex flex-col w-full bg-white px-2">
            <h5 className="text-[75px] trackling-wide pt-32">
                Our Story
            </h5>
            <div className="w-full px-4 md:px-10 lg:px-24">
                <TextImgContainer
                    textLeft
                    title={"This Is A Title"}
                    description={DummyText}
                    img={DummyImg}
                />
                <TextImgContainer
                    title={"This Is A Title"}
                    description={DummyText}
                    img={DummyImg}
                />
            </div>
        </section>
    );
}
