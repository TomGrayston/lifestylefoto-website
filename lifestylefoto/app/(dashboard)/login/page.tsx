"use client"

import LoginMobile from "../../../components/login/mobile/LoginMobile";
import LoginWeb from "../../../components/login/web/LoginWeb";

import { initFirebase } from "../../../firebase/firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    initFirebase();

    const router = useRouter();

    const [data, setData] = useState({
        email: "",
        pwd: "",
    });

    const auth = getAuth();

    const handleLogin = ()  => {
        signInWithEmailAndPassword(auth, data.email, data.pwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                router.push("/dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert("Wrong Details");
            });
    };

    return (
        <>
            <LoginMobile handleLogin={handleLogin} data={data} setData={setData}/>
            <LoginWeb handleLogin={handleLogin} data={data} setData={setData}/>
        </>
    );
}
