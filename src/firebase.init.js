import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };
console.log(process.env)
const firebaseConfig = {
    apiKey: "AIzaSyAfOHS-rSIt9knqsiJwMJHf3pEgcREcl0g",
    authDomain: "assignment12-685d7.firebaseapp.com",
    projectId: "assignment12-685d7",
    storageBucket: "assignment12-685d7.appspot.com",
    messagingSenderId: "715303974290",
    appId: "1:715303974290:web:0670771cd02b263aa9fd4b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;