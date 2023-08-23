import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_FB_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "carrentals-7dd5e.firebaseapp.com",
  projectId: "carrentals-7dd5e",
  storageBucket: "carrentals-7dd5e.appspot.com",
  messagingSenderId: "505197555921",
  appId: "1:505197555921:web:16fb11f6cf177cc61b15f0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
