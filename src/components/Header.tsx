import React from "react";
import Logo from "../assets/icons/light.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="w-full flex flex-col p-4">
            {/* LOGO  */}
            <div className="flex items-center justify-center w-full">
                <Link className="flex flex-col items-center" to="/">
                    <span className="text-xl mb-4">brite</span>
                    <img src={Logo} alt="logo" width={25} />
                </Link>
            </div>
            {/* NAVIGATION */}
            <div className="flex w-full justify-evenly p-8">
                <Link to="/">
                    <span className="hover:bg-blue-300 p-4 rounded-md">Home</span>
                </Link>
                <Link to="/estimate">
                    <span className="hover:bg-blue-300 p-4 rounded-md">Request Estimate</span>
                </Link>
                <Link to="/work">
                    <span className="hover:bg-blue-300 p-4 rounded-md">Our Work</span>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
