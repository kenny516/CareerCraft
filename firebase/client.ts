import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAp7In14vlmE8vm-VBVTWOHg7R0dMk7kL4",
    authDomain: "careercraft-2d112.firebaseapp.com",
    projectId: "careercraft-2d112",
    storageBucket: "careercraft-2d112.firebasestorage.app",
    messagingSenderId: "24022936593",
    appId: "1:24022936593:web:f6a04ea12966f5cbf755b0",
    measurementId: "G-799HB0FQ0P"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
