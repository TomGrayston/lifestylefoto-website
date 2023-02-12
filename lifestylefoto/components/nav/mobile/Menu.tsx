import { ReactNode } from "react";

import { BsXLg as Icon }  from "react-icons/bs";

interface Props {
    children?: ReactNode,
    open: boolean,
    setOpen : any
}

const Menu = ({children, open, setOpen}: Props) => {
    return(
        <div className={`absolute top-0 right-0 bottom-0 h-screen bg-black transition-all w-full ${!open ? '-left-full opacity-0' : 'left-0 opacity-100'}`}>
            <div className="flex items-center justify-end px-2 py-2 m-auto">
                <button className="px-1 py-1 text-3xl text-white bg-inherit hover:text-stone-200" onClick={() => setOpen(false)}>
                    <Icon/>
                </button>
            </div>
            {children}
        </div>
    );
}

export default Menu;