// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsFyM-hez55bCC2GKank-EP2jRARb-Z2Q",
  authDomain: "evidai.firebaseapp.com",
  projectId: "evidai",
  storageBucket: "evidai.appspot.com",
  messagingSenderId: "293626544065",
  appId: "1:293626544065:web:0fb4463212f1e9537eb940",
  measurementId: "G-122TDWLG36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics;

if (typeof window !== "undefined") {
  // Ensure that the window object is available before initializing Firebase Analytics
  analytics = getAnalytics(app);
}

export { auth, analytics }; 