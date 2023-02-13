import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    font?: string,
    colour?: string
}

const MenuButton = ({children, font, colour}: Props) => {
    return(
        <li className={`justify-start py-2 my-2 ml-10 tracking-widest ${font} ${colour}`}>
            {children}
        </li>
    );
}

export default MenuButton;