// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-9d463.firebaseapp.com",
  projectId: "blog-9d463",
  storageBucket: "blog-9d463.appspot.com",
  messagingSenderId: "283726914959",
  appId: "1:283726914959:web:c6835bdfe38597067697fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);