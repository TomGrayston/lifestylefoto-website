import React from "react";

const NavSocialsButton = ({children, props}) => {
    return(
    <li className="px-2">
        <button className={`px-2 py-2 text-xl text-black uppercase bg-white nav hover:bg-gray-200 ${props}`}>
            {children}
        </button>
    </li>
    )
}

export default NavSocialsButton