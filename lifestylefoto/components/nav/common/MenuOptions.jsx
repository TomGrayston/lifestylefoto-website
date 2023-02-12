const MenuOptions = ({children, font}) => {
    return(
        <ul className={`flex flex-col w-full text-2xl text-white cursor-pointer bg-inherit place-items-start ${font}`}>
            {children}
        </ul>
    );
}

export default MenuOptions;