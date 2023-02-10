"use client"

import LoginMobile from "../../../components/login/mobile/loginMobile";
import LoginWeb from "../../../components/login/web/loginWeb";

import { initFirebase } from "../../../firebase/firebase";

export default function Login() {

    const app = initFirebase();

    return (
        <>
            <LoginMobile/>
            <LoginWeb/>
        </>
    );
}
