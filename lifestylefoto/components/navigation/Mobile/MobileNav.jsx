import { AiOutlineMenu } from 'react-icons/ai';
import MobileMenu from './MobileMenu';

const MobileNav = () => {
    return(
        <div className='flex items-center justify-between px-2 py-1 bg-stone-100 lg:hidden'>
            <h1 className="items-center pt-1 text-4xl text-black nav ">
                    LifestyleFoto
            </h1>
            <button className="block px-1 py-1 text-3xl text-black bg-inherit focus:outline-none hover:bg-gray-200 group">
                <AiOutlineMenu/>
                <MobileMenu/>
            </button>
        </div>
    )
}

export default MobileNav;