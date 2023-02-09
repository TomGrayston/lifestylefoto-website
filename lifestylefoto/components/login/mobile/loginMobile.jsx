import Button from "../common/Button"
import LoginInput from "../common/LoginInput"

const LoginMobile = () => {
    return(
        <div className="top-0 left-0 right-0 flex justify-center h-screen pb-44 lg:hidden">
            <form className="flex flex-col items-center justify-center w-full my-auto">

                <label className="flex justify-center w-2/3 py-10 font-sans text-5xl text-center text-black">
                    LIFESTYLE LOGIN
                </label>

                <LoginInput placeholder="Email address" type="text"/>
                <LoginInput placeholder="Password" type="password"/>

                <Button>
                    Sign In
                </Button>

            </form>
        </div>
    )
}

export default LoginMobile;
