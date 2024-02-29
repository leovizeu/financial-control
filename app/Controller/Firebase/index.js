// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAihgEGlOMswNlTmk-4vJmmetlj2pkXPeY",
  authDomain: "finance-tracker-ac895.firebaseapp.com",
  projectId: "finance-tracker-ac895",
  storageBucket: "finance-tracker-ac895.appspot.com",
  messagingSenderId: "793102313596",
  appId: "1:793102313596:web:7a542b346517c48310c1f9",
  measurementId: "G-RLZ7HE2VM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}