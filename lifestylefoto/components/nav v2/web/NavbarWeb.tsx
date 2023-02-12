import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const NavbarWeb = ({children}: Props) => {
    return(
        <div className="container absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-2 py-2 m-auto nav_desktop:hidden">
            {children}
        </div>
    )
}

export default NavbarWeb;