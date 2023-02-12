interface Props {
    children?: string,
    font?: string,
    colour?: string
}

const NavbarTitle = ({children, font, colour}: Props) => {
    return(
        <h1 className={`items-center pt-1 text-4xl ${font} ${colour}`}>
            {children}
        </h1>
    );
}

export default NavbarTitle;