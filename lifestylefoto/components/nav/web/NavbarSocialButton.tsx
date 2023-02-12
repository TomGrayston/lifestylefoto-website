import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    hoverColour?: string
}
const NavbarSocialButton = ({children, hoverColour} : Props) => {
    return(
    <li className="px-2">
        <button className={`px-2 py-2 text-xl text-black uppercase bg-stone-100 hover:bg-gray-200 ${hoverColour}`}>
            {children}
        </button>
    </li>
    )
}

export default NavbarSocialButton;
