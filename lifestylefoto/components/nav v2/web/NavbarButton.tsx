import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const NavbarButton = ({children}: Props) => {
    return(
    <li className="px-2">
        <button className="px-6 py-1 text-xl text-black bg-stone-100 hover:bg-gray-200">
            {children}
        </button>
    </li>
    )
}

export default NavbarButton