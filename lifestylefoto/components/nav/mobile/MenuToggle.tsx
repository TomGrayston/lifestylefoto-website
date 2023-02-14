"use client";

import IconButton from "../common/IconButton";
import Menu from "../mobile/Menu";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
    children?: ReactNode,
    bgColour: string,
    textColour: string
}

const MenuToggle = ({ children, bgColour, textColour}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton onClick={() => setOpen(true)} icon={<AiOutlineMenu />} />
            <Menu open={open} setOpen={setOpen} bgColour={bgColour} textColour={textColour}>
                {children}
            </Menu>
        </>
    );
};

export default MenuToggle;
