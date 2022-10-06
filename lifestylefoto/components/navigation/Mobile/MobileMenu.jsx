import MobileButton from "./MobileButton";
const MobileMenu = () => {
    return(
        <div className="absolute top-0 w-8/12 h-screen transition-all bg-black opacity-0 -right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center w-full my-1 text-xl cursor-pointer nav">
                <MobileButton>Portfolio</MobileButton>
                <MobileButton>Pricing</MobileButton>
                <MobileButton>Testimonials</MobileButton>
                <MobileButton>About Me</MobileButton>
                <MobileButton>Contact Me</MobileButton>
            </ul>
        </div>
    )
}

export default MobileMenu;