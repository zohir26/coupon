import { useEffect, useState } from "react";
import { createContext } from "react";
import app from './../Firebase/firebase.cofig';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email,password) => {
        return createUserWithEmailAndPassword (auth,email,password)
    };
    const logOut = () =>{
        return signOut(auth);
    }
    const userLogin =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const auth = getAuth(app);
    const authInfo = {
        user, setUser, auth , createNewUser , logOut ,userLogin
    };          
    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return () =>{
            unsubscribe ();
        }
    },[]);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;