import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { ServicesMenuItems } from "../../../lib/constants";

interface IServicesMenuProps {
    setServicesMenuOpen: () => void;
}

const ServicesMenu = (props: IServicesMenuProps) => {
    // Props
    const { setServicesMenuOpen } = props;
    const menuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }} // Adjust duration for desired speed
        >
            <ul className="flex flex-col">
                {ServicesMenuItems.map((item) => {
                    return (
                        <Link
                            onClick={setServicesMenuOpen}
                            href={item.link}
                            key={item.title}
                            className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                        >
                            <li className="text-black">{item.title}</li>
                            <BiChevronRight className="text-black" size={20} />
                        </Link>
                    );
                })}
            </ul>
        </motion.div>
    );
};

export default ServicesMenu;
