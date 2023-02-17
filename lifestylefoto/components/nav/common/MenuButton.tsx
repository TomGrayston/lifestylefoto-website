import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
}

const MenuButton = ({children}: Props) => {
    return(
        <li className={`justify-start py-2 my-2 ml-10 tracking-widest`}>
            {children}
        </li>
    );
}

export default MenuButton;