export default function Login() {
    return (
        <div className="container top-0 left-0 right-0 mx-auto h-screen items-center justify-center flex">
            <form>

                <label
                className="font-sans mb-6 w-full px-4 py-2 text-3xl"
                >
                    LIFESTYLE LOGIN
                </label>

                <div className="mb-6">
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                        placeholder="Email address"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                        placeholder="Password"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full hover:bg-gray-700"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}