import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwRuZ8F4tkbweISSD86DsYlUdXNn9rJ1A",
  authDomain: "crudeauth-61035.firebaseapp.com",
  projectId: "crudeauth-61035",
  storageBucket: "crudeauth-61035.appspot.com",
  messagingSenderId: "272884653372",
  appId: "1:272884653372:web:20648aaf27cefb823a5239",
  measurementId: "G-GVL249V6B7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
