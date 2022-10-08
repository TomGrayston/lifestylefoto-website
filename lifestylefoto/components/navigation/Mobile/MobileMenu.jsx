import MobileButton from "./MobileButton";
import { BsXLg as Icon }  from "react-icons/bs";
const MobileMenu = () => {
    return(
        <div className="absolute top-0 w-screen h-screen transition-all bg-black opacity-0 -left-full group-focus:left-0 group-focus:opacity-100">
            <div className="flex items-center justify-end px-2 py-2 m-auto">
                <button className="px-1 py-1 text-white bg-inherit hover:text-stone-200">
                    <Icon/>
                </button>
            </div>
            <ul className="flex flex-col w-full text-xl text-white cursor-pointer bg-inherit nav place-items-start">
                <MobileButton>Portfolio »</MobileButton>
                <MobileButton>Pricing »</MobileButton>
                <MobileButton>Testimonials »</MobileButton>
                <MobileButton>About Me »</MobileButton>
                <MobileButton>Contact Me »</MobileButton>
            </ul>
        </div>
    )
}

export default MobileMenu;