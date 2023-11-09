import React from "react";

import { Frequency, Services } from "../../store/schemas/IEstimateStore";
import Button from "./buttons/Button";

import { TbStarsFilled } from "react-icons/tb";

const StaticModal = () => {
    return (
        <div>
            {/* INTRO  */}
            <span>We're Always Ready To Start Your Next Project.</span>
            <span>
                We look forward to making your home or business sparkle and shine Brite. To do that,
                we'll need some information.
            </span>
            {/* LIST OF SERVICES TITLE  */}
            <span>
                Which services are you interested in? <span>*</span>
            </span>
            {/* LIST OF SERVICES  */}
            <div>
                {(Object.keys(Services) as Array<keyof typeof Services>).map((key) => {
                    const Link = Services[key].toLowerCase().replace(" ", "-");
                    return <Button isLink link={`/${Link}`} text={Services[key]} />;
                })}
            </div>
            {/* FREQUENCY  */}
            <div>
                <span>
                    What level of frequency are you looking for? <span>*</span>
                </span>
                <select name="frequency" id="">
                    <option value={Frequency.FOUR_ANN}>4x a Year/ Quarterly</option>
                    <option value={Frequency.THREE_ANN}>3x a Year</option>
                    <option value={Frequency.TWO_ANN}>2x a Year</option>
                    <option value={Frequency.ANN}>Once a Year</option>
                    <option value={Frequency.MONTHLY}>Monthly</option>
                    <option value={Frequency.ONCE}>Once</option>
                </select>
            </div>
            {/* LOCATION */}
            <div>
                <span>
                    What is your location? <span>*</span>
                </span>
                <input type="text" />
                <aside>
                    In order to provide an accurate estimat and connect you to the right location
                    your zip code is required.
                </aside>
            </div>
        </div>
    );
};

export default StaticModal;
