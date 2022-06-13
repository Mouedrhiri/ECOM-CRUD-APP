// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyVjZtqgQ76hKEZAm8kK2tblPH3vyWMyg",
  authDomain: "electro-phone-d58ae.firebaseapp.com",
  projectId: "electro-phone-d58ae",
  storageBucket: "electro-phone-d58ae.appspot.com",
  messagingSenderId: "1002139972477",
  appId: "1:1002139972477:web:ac8324f66dcc7aa0381214",
  measurementId: "G-PBESHQC4ZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
