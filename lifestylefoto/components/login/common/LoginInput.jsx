const LoginInput = ({...props}) => {
    return(
        <input
        {...props}
        className="w-2/3 px-4 py-2 m-0 mb-6 text-lg text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:outline-none"
        />
    )
}

export default LoginInput