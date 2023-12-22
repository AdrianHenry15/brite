import React from "react";

import { GiVacuumCleaner } from "react-icons/gi";

const IconItem = () => {
    return (
        <div className="flex flex-col items-center">
            <GiVacuumCleaner size={40} />
            <h5 className="py-6 text-xl">Pressure Washing</h5>
            <aside className="w-9/12 mb-20 text-sm italic text-zinc-700 md:mb-0">
                I be pressure washing these stepa dn come up for air and im like damn, where da
                cheesecake?
            </aside>
        </div>
    );
};

export default IconItem;
