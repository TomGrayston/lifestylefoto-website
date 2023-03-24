import Button from "../common/Button";
import LoginInput from "../common/LoginInput";
import { LoginDetails } from "../types/types";
import { SetState } from "../../../types/types";

type Props = {
    handleLogin: () => void,
    data: LoginDetails,
    setData: SetState<LoginDetails>
}

const LoginMobile: React.FC<Props> = ({handleLogin, data, setData}) => {

    return (
        <div className="top-0 left-0 right-0 flex justify-center h-screen pb-44 lg:hidden">
            <div className="flex flex-col items-center justify-center w-full my-auto">
                <label className="flex justify-center w-2/3 py-10 font-sans text-5xl text-center text-black">
                    LIFESTYLEFOTO LOGIN
                </label>

                <LoginInput
                    placeholder="Email address"
                    type="text"
                    value={data.email}
                    onChange={(e: any) => setData({ ...data, email: e.target.value })}
                />
                <LoginInput
                    placeholder="Password"
                    type="password"
                    value={data.pwd}
                    onChange={(e: any) => setData({ ...data, pwd: e.target.value })}
                />

                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
};

export default LoginMobile;
