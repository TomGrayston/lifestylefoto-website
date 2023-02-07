import DesktopNavbar from './web/DesktopNavbar';
import MobileNavbar from './mobile/MobileNavbar';


export default function Navbar() {
    return (
        <nav className="top-0 left-0 z-10 w-full font-sans ">
            <DesktopNavbar/>
            <MobileNavbar/>
        </nav>
    )
}