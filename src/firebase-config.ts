// /* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASQdadE9_YHR60xBrCrtZpcR75nTWzqNU",
  authDomain: "snapdocs-7777.firebaseapp.com",
  projectId: "snapdocs-7777",
  storageBucket: "snapdocs-7777.firebasestorage.app",
  messagingSenderId: "520397190992",
  appId: "1:520397190992:web:0cb50caf443bfad3249e55",
  measurementId: "G-PR9YM9QFBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);