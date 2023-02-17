"use client";

import IconButton from "../common/IconButton";
import Menu from "../mobile/Menu";
import { ReactNode, useState } from "react";

interface Props {
    children?: ReactNode,
    bgColour: string,
    textColour: string,
    icon: ReactNode,
    menuIcon: ReactNode,
    extendStyles?: string
}

const MenuToggle = ({ children, bgColour, textColour, icon, menuIcon, extendStyles}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton onClick={() => setOpen(true)} icon={icon} />
            <Menu open={open} setOpen={setOpen} bgColour={bgColour} textColour={textColour} menuIcon={menuIcon} extendStyles={extendStyles}>
                {children}
            </Menu>
        </>
    );
};

export default MenuToggle;
