// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTw_lANGxUggmWM1mZNKywO3HIqCvgFzo",
  authDomain: "couponpro-fd6de.firebaseapp.com",
  projectId: "couponpro-fd6de",
  storageBucket: "couponpro-fd6de.firebasestorage.app",
  messagingSenderId: "1089881979010",
  appId: "1:1089881979010:web:8c82ccf8e9c2d499fb1c9b",
  measurementId: "G-PFKYT3591N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;