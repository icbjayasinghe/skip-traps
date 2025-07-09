// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_5TDcCPH21it2QExNG16enUEHDZqJ-1k",
  authDomain: "skip-traps.firebaseapp.com",
  projectId: "skip-traps",
  storageBucket: "skip-traps.firebasestorage.app",
  messagingSenderId: "26792026776",
  appId: "1:26792026776:web:6acb1b6b9e0aeadaab66ed",
  measurementId: "G-4FP72NS3K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export { db }; // Make the Firestore instance available