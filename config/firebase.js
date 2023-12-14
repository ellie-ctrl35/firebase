// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwRuZ8F4tkbweISSD86DsYlUdXNn9rJ1A",
  authDomain: "crudeauth-61035.firebaseapp.com",
  projectId: "crudeauth-61035",
  storageBucket: "crudeauth-61035.appspot.com",
  messagingSenderId: "272884653372",
  appId: "1:272884653372:web:20648aaf27cefb823a5239",
  measurementId: "G-GVL249V6B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);