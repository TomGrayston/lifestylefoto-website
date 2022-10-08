import React from "react";

const NavButton = ({children}) => {
    return(
    <li className="px-2">
        <button className="px-6 py-1 text-xl text-black uppercase bg-stone-100 nav hover:bg-gray-200">
            {children}
        </button>
    </li>
    )
}

export default NavButton