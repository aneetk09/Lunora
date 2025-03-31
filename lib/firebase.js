// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl1g3b-qaWKC6WfOCWZS9Wp1fRpXug70c",
  authDomain: "lunora-login.firebaseapp.com",
  projectId: "lunora-login",
  storageBucket: "lunora-login.firebasestorage.app",
  messagingSenderId: "961404426347",
  appId: "1:961404426347:web:2c0f76fd375a344057792e",
  measurementId: "G-CSPCK3DRYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };