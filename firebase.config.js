// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLcCUw8NLNE7-iOM7IIgQhaDqrcWKo_tU",
  authDomain: "expo-firebase-794f2.firebaseapp.com",
  projectId: "expo-firebase-794f2",
  storageBucket: "expo-firebase-794f2.firebasestorage.app",
  messagingSenderId: "789324690056",
  appId: "1:789324690056:web:0b6e58529cea69d401a53d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);