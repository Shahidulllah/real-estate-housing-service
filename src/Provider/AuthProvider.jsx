import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import Auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // creatRegisterUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    // UpdateUser profile
    const updateUserProfile = (name, image) =>{
       return updateProfile(Auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
          
    }

    //LoginUser
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    // GoogleLoginUser
    const googleLogin = ()=>{
        setLoading(true);
       return signInWithPopup(Auth, googleProvider);
    }

    // GitHub loginUser
    const gitHubLogin= ()=>{
        setLoading(true);
        return signInWithPopup(Auth, githubProvider)
    }

    // LogoutUser
    const logOut = () => {
        setLoading(true);
        return signOut(Auth);
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = { user, createUser, loginUser, logOut, loading, googleLogin, updateUserProfile, gitHubLogin }
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