"use client"

const Button = ({children, ...props}) => {
    return(
        <button
        className="inline-block w-2/3 py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-black shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-gray-700"
        {...props}
        >
            {children}
        </button>
    )
}

export default Button;