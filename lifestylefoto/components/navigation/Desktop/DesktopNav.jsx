import NavButton from "./NavButton";
import NavSocialsButton from "./NavSocialsButton";
import { CgInstagram } from 'react-icons/cg'
import { BsYoutube } from 'react-icons/bs'

const DesktopNav = () => {
    return(
        <div className="container flex items-center justify-between px-2 py-2 m-auto nav_desktop:hidden">
            <h1 className="items-center pt-1 text-4xl text-stone-100 nav ">
                    LifestyleFoto
            </h1>
            <ul className="items-center hidden text-base cursor-pointer lg:flex ">
                <NavButton>Portfolio</NavButton>
                <NavButton>Pricing</NavButton>
                <NavButton>Testimonials</NavButton>
                <NavButton>About Me</NavButton>
                <NavButton>Contact Me</NavButton>
                <NavSocialsButton props="hover:text-rose-500"><CgInstagram/></NavSocialsButton>
                <NavSocialsButton props="hover:text-red-500"><BsYoutube/></NavSocialsButton>
            </ul>
        </div>
    )
}

export default DesktopNav;