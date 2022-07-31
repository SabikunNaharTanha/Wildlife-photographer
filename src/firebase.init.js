// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIbI_bi-68HrWcvn2ugkwrqVGhDwIQM60",
    authDomain: "wildlife-photographer.firebaseapp.com",
    projectId: "wildlife-photographer",
    storageBucket: "wildlife-photographer.appspot.com",
    messagingSenderId: "377616024069",
    appId: "1:377616024069:web:7e942c4a1e80023310926c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
