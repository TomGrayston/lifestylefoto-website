// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMQzXafL_jBSbsoWIsy3TiTOw4Aeamk9Q",
    authDomain: "lifestylefoto-abd3d.firebaseapp.com",
    projectId: "lifestylefoto-abd3d",
    storageBucket: "lifestylefoto-abd3d.appspot.com",
    messagingSenderId: "221249014819",
    appId: "1:221249014819:web:88d8c69e810f00dfcb7596",
    measurementId: "G-31FCYT7RXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const initFirebase = () => {
    return app;
}

export {app, initFirebase}