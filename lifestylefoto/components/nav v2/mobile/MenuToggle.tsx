"use client"

import IconButton from '../common/IconButton'
import Menu from '../mobile/Menu';
import MenuOptions from '../common/MenuOptions';
import { ReactNode, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
    children?: ReactNode,
    menuOptionsFont?: string
}

const MenuToggle = ({children, menuOptionsFont}: Props) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <AiOutlineMenu/>
            </IconButton>
            <Menu open={open} setOpen={setOpen}>
                <MenuOptions font={menuOptionsFont}>
                    {children}
                </MenuOptions>
            </Menu>
        </>
    )
}

export default MenuToggle;