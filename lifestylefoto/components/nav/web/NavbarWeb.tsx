import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    bgColour?: string,
    extendStyles?: string
}

const NavbarWeb = ({children, bgColour, extendStyles}: Props) => {
    return(
        <div className={`absolute w-screen z-10 px-2 py-1 nav_desktop:hidden ${bgColour} ${extendStyles}`}>
            <div className={`container flex items-center justify-between m-auto`}>
                {children}
            </div>
        </div>
    )
}

export default NavbarWeb;