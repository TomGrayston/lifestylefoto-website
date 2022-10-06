import NavButton from "./NavButton";
import NavSocialsButton from "./NavSocialsButton";
import { CgInstagram } from 'react-icons/cg'
import { BsYoutube } from 'react-icons/bs'

const DesktopNav = () => {
    return(
        <ul className="items-center hidden text-base cursor-pointer lg:flex ">
            <NavButton>Portfolio</NavButton>
            <NavButton>Pricing</NavButton>
            <NavButton>Testimonials</NavButton>
            <NavButton>About Me</NavButton>
            <NavButton>Contact Me</NavButton>
            <NavSocialsButton props="hover:text-rose-500"><CgInstagram/></NavSocialsButton>
            <NavSocialsButton props="hover:text-red-500"><BsYoutube/></NavSocialsButton>
        </ul>
    )
}

export default DesktopNav;