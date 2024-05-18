// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3fb4e.firebaseapp.com",
  projectId: "real-estate-3fb4e",
  storageBucket: "real-estate-3fb4e.appspot.com",
  messagingSenderId: "939222953312",
  appId: "1:939222953312:web:759b6744af2b942f5a0205"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);