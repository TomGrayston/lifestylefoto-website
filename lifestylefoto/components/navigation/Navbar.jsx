import React from "react";
import DesktopNav from "./Desktop/DesktopNav";
import MobileNav from "./Mobile/MobileNav";
const Navbar = () => {

    return (
    <nav className="fixed top-0 left-0 w-full">
        <div className="flex items-center justify-between px-2 py-2 m-auto ">
            <h1 className="items-center pt-1 text-4xl text-white nav">
                LifestyleFoto
            </h1>
            <DesktopNav/>
            <MobileNav/>
        </div>
    </nav>
    );
};

export default Navbar;
