// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "career-selector-58888.firebaseapp.com",
  projectId: "career-selector-58888",
  storageBucket: "career-selector-58888.appspot.com",
  messagingSenderId: "355205465840",
  appId: "1:355205465840:web:04e1a392776a2881d86435",
  measurementId: "G-NJKMWEXPWB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
