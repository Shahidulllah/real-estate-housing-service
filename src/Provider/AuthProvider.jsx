import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Auth from "../Firebase/firebase.config";

export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // registerUser
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //LoginUser
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
    }

    // LogoutUser
    const logOut = ()=>{
       return signOut(Auth);
    }

    // Observer
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(Auth, currentUser =>{
            setUser(currentUser);
            console.log('I am observing the whole thing', currentUser)
        })

        return () =>{
            unSubscribe();
        }

    } ,[])
    
    const authInfo = {user, createUser, loginUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}