// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9lb-BPErbrLXJCUI3R6xlAFRQcPnTe4",
  authDomain: "prepwise-new.firebaseapp.com",
  projectId: "prepwise-new",
  storageBucket: "prepwise-new.firebasestorage.app",
  messagingSenderId: "587946224852",
  appId: "1:587946224852:web:6b3a7fa5d6b280a19e1f41",
  measurementId: "G-QCZ47QKY8W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);