"use client";

import IconButton from "../common/IconButton";
import Menu from "../mobile/Menu";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
    children?: ReactNode;
}

const MenuToggle = ({ children }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton onClick={() => setOpen(true)} icon={<AiOutlineMenu />} />
            <Menu open={open} setOpen={setOpen}>
                {children}
            </Menu>
        </>
    );
};

export default MenuToggle;
