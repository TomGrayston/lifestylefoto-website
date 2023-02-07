import BurgerMenu from './BurgerMenu';
const MobileNav = () => {
    return(
        <div className='fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-2 py-1 bg-stone-100 lg:hidden'>
            <h1 className="items-center pt-1 text-4xl text-black">
                    LifestyleFoto
            </h1>
            <BurgerMenu/>
        </div>
    )
}

export default MobileNav;