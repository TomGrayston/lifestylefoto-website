import BurgerMenu from './BurgerMenu';
const MobileNav = () => {
    return(
        <div className='flex items-center justify-between px-2 py-1 bg-stone-100 lg:hidden'>
            <h1 className="items-center pt-1 text-4xl text-black">
                    LifestyleFoto
            </h1>
            <BurgerMenu/>
        </div>
    )
}

export default MobileNav;