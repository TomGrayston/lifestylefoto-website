import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    open: boolean,
    setOpen : any,
    bgColour: string,
    textColour: string,
    menuIcon: ReactNode,
    extendStyles?: string
}

const Menu = ({children, open, setOpen, bgColour, textColour, menuIcon, extendStyles}: Props) => {
    return(
        <div className={`absolute top-0 right-0 bottom-0 h-screen transition-all w-full ${!open ? '-left-full opacity-0' : 'left-0 opacity-100'} shadow-xl ${bgColour} ${textColour} ${extendStyles}`}>
            <div className="flex items-center justify-end px-2 py-2 m-auto">
                <button className="px-1 py-1 text-3xl bg-inherit hover:text-stone-200 text-inherit" onClick={() => setOpen(false)}>
                    {menuIcon}
                </button>
            </div>
            {children}
        </div>
    );
}

export default Menu;