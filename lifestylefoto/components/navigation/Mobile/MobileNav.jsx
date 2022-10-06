import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenu from './MobileMenu';

const MobileNav = () => {
    return(
        <button className="block px-3 py-3 text-lg text-black bg-white lg:hidden focus:outline-none hover:bg-gray-200 group">
            <GiHamburgerMenu/>
            <MobileMenu/>
        </button>
    )
}

export default MobileNav;