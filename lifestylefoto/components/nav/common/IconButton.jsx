const IconButton = ({children, ...props}) => {
    return(
        <button className="block px-1 py-1 text-3xl text-black bg-inherit focus:outline-none hover:bg-gray-200 " {...props}>
            {children}
        </button>
    );
}

export default IconButton;