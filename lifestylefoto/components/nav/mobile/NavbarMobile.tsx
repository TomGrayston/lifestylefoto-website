import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const NavbarMobile = ({children} : Props) => {
    return(
        <div className='fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-2 py-1 bg-stone-100 lg:hidden '>
            {children}
        </div>
    );

}

export default NavbarMobile;