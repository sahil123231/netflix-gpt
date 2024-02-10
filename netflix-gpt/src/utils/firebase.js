// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjjNTrbWOQeXAMFu2sKlnQmRCTiz6Wijg",
  authDomain: "netflixgpt-c6a2b.firebaseapp.com",
  projectId: "netflixgpt-c6a2b",
  storageBucket: "netflixgpt-c6a2b.appspot.com",
  messagingSenderId: "452018684921",
  appId: "1:452018684921:web:f6951b0542c169b31e7328",
  measurementId: "G-PDCHY15T0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);