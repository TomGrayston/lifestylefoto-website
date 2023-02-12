"use client"

import LoginMobile from "../../../components/login/mobile/LoginMobile";
import LoginWeb from "../../../components/login/web/LoginWeb";

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
