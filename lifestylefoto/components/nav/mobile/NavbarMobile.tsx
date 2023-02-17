import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const NavbarMobile = ({children} : Props) => {
    return(
        <div className='fixed z-10 flex items-center justify-between w-full px-2 py-1 shadow-lg bg-stone-100 lg:hidden'>
            {children}
        </div>
    );

}

export default NavbarMobile;