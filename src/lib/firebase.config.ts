// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCniWTWbDHjQFS3G_dgOmQNEOHrscsqxrI",
  authDomain: "to-dos-5f9fa.firebaseapp.com",
  projectId: "to-dos-5f9fa",
  storageBucket: "to-dos-5f9fa.appspot.com",
  messagingSenderId: "20313614699",
  appId: "1:20313614699:web:6855cd0d2e7be3fed3842e",
  measurementId: "G-QXTPQTN7L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);