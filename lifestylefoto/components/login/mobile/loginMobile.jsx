const LoginMobile = () => {
    return(
        <div className="container top-0 left-0 right-0 flex justify-center h-screen pb-44 lg:hidden">
            <form className="flex flex-col items-center justify-center w-full my-auto">

                <label className="flex justify-center w-2/3 py-10 font-sans text-5xl text-center text-black">
                    LIFESTYLE LOGIN
                </label>

                <input type="text" placeholder="Email address" className="w-2/3 px-4 py-2 m-0 mb-6 text-lg text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:outline-none"/>

                <input type="password" placeholder="Password" className="w-2/3 px-4 py-2 m-0 mb-6 text-lg text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:outline-none"/>

                <button
                type="submit"
                className="inline-block w-2/3 py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-black shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-gray-700"
                >
                    Sign in
                </button>

            </form>
        </div>
    )
}

export default LoginMobile;