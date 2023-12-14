import { createUserWithEmailAndPassword ,signOut} from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase";

export const Auth = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    console.log(auth?.currentUser?.email)
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth,email,password)   
        } catch (error) {
            console.error(error);
        }
    };
    const logout = async () => {
        try {
            await signOut(auth)   
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
         <input placeholder="Email.."
         onChange={(e)=>setEmail(e.target.value)}/>
         <input placeholder="Password.."
         onChange={(e)=>setPassword(e.target.value)}/>
         <button onClick={signIn}>Sign In</button>
         <button onClick={logout}>Logout</button>
        </div>
    );
};