import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // registerUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //LoginUser
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    // LogoutUser
    const logOut = () => {
        setLoading(true);
        return signOut(Auth);
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log('I am observing the whole thing', currentUser)
            setUser(currentUser);
            setLoading(false);

        })

        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = { user, createUser, loginUser, logOut, loading }
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