interface Props {
    children: string,
    font?: string,
    colour?: string,
    extendStyles?: string
}

const NavbarTitle = ({children, font, colour, extendStyles}: Props) => {
    return(
        <h1 className={`items-center text-4xl top-0 left-0 right-0 ${font} ${colour} ${extendStyles}`}>
            {children}
        </h1>
    );
}

export default NavbarTitle;