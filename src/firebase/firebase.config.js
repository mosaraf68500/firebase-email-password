// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1qJsbc0yo8-FSZZGSnqJI06904ZbmkY",
  authDomain: "fir-email-password-114aa.firebaseapp.com",
  projectId: "fir-email-password-114aa",
  storageBucket: "fir-email-password-114aa.firebasestorage.app",
  messagingSenderId: "602957975579",
  appId: "1:602957975579:web:5f7057fe0a47f118f028be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);