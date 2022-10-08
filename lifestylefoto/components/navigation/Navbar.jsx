import React from "react";
import DesktopNav from "./Desktop/DesktopNav";
import MobileNav from "./Mobile/MobileNav";
const Navbar = () => {

    return (
    <nav className="fixed top-0 left-0 w-full ">
        <DesktopNav/>
        <MobileNav/>
    </nav>
    );
};

export default Navbar;
