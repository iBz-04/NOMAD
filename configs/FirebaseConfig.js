// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy4hNLFPtpaodvHwG8deet6PFvqnIpg70",
  authDomain: "my-apps-410e7.firebaseapp.com",
  projectId: "my-apps-410e7",
  storageBucket: "my-apps-410e7.appspot.com",
  messagingSenderId: "851917476667",
  appId: "1:851917476667:web:9ad7f8ec1b4bc577d3dd1e",
  measurementId: "G-4186JP0XGB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
