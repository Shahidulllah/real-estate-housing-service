import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../Firebase/firebase.config";

export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // register
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //Login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }

    // Observer
    useEffect(() => {
        onAuthStateChanged(Auth, currentUser =>{
            setUser(currentUser);
            console.log('I am observing the whole thing', currentUser)
        })
    } ,[])
    
    const authInfo = {user, createUser, loginUser}
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