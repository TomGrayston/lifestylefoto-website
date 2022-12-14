"use client"

import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsXLg as Icon }  from "react-icons/bs";

const BurgerMenu = () => {

    const [open, setOpen] = useState(false);

    return(
        <>
            <button className="block px-1 py-1 text-3xl text-black bg-inherit focus:outline-none hover:bg-gray-200 " onClick={() => setOpen(true)}>
                <AiOutlineMenu/>
            </button>
            <Menu open={open} setOpen={setOpen}/>
        </>
    )
}

function Menu({ open, setOpen }) {
    return(
        <div className={`absolute top-0 right-0 bottom-0 h-screen bg-black transition-all w-full ${!open ? '-left-full opacity-0' : 'left-0 opacity-100'}`} >
            <div className="flex items-center justify-end px-2 py-2 m-auto">
                <button className="px-1 py-1 text-3xl text-white bg-inherit hover:text-stone-200" onClick={() => setOpen(false)}>
                    <Icon/>
                </button>
            </div>
            <ul className="flex flex-col w-full text-2xl text-white cursor-pointer bg-inherit place-items-start">
                <MobileButton>Portfolio »</MobileButton>
                <MobileButton>Pricing »</MobileButton>
                <MobileButton>Testimonials »</MobileButton>
                <MobileButton>About Me »</MobileButton>
                <MobileButton>Contact Me »</MobileButton>
            </ul>
        </div>
    )
}

function MobileButton({children}) {
    return(
        <li className="justify-start py-2 my-2 ml-10 tracking-widest text-white hover:text-stone-200">
            {children}
        </li>
    )
}

export default BurgerMenu;
