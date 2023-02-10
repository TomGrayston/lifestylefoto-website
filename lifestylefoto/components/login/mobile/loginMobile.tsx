import Button from "../common/Button"
import LoginInput from "../common/LoginInput"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const LoginMobile = () => {

    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        pwd: ''
    });

    const auth = getAuth();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, data.email, data.pwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                router.push('/dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert("Wrong Details");
            });
    }

    return(
        <div className="top-0 left-0 right-0 flex justify-center h-screen pb-44 lg:hidden">
            <div className="flex flex-col items-center justify-center w-full my-auto">

                <label className="flex justify-center w-2/3 py-10 font-sans text-5xl text-center text-black">
                    LIFESTYLEFOTO LOGIN yes
                </label>

                <LoginInput placeholder="Email address" type="text" value={data.email} onChange={(e: any) => setData({...data, email: e.target.value})} />
                <LoginInput placeholder="Password" type="password" value={data.pwd} onChange={(e: any) => setData({...data, pwd: e.target.value})} />

                <Button onClick={handleLogin}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default LoginMobile;
