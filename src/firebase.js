// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt-NnZritnzY4-rAIOyQgVhKi2bSSfwUM",
  authDomain: "therepist-3619e.firebaseapp.com",
  projectId: "therepist-3619e",
  storageBucket: "therepist-3619e.firebasestorage.app",
  messagingSenderId: "249752083889",
  appId: "1:249752083889:web:c810c77973834966bdb190",
  measurementId: "G-68XGJV4SYN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
