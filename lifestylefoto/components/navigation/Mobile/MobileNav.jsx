import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";
import { BurgerMenu } from './BurgerMenu';

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const props = "bg-red-500"

    return(
        <div className='flex items-center justify-between px-2 py-1 bg-stone-100 lg:hidden'>
            <h1 className="items-center pt-1 text-4xl text-black nav ">
                    LifestyleFoto
            </h1>
            <BurgerMenu/>
        </div>
    )
}

export default MobileNav;