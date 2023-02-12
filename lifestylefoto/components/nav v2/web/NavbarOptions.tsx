import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    font?: string
}

const NavbarOptions = ({children, font}: Props) => {
    return(
        <ul className={`items-center hidden text-base cursor-pointer lg:flex ${font}`}>
            {children}
        </ul>
    )
}

export default NavbarOptions;