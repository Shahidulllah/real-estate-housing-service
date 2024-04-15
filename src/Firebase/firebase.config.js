// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Tgnn8eNpgYJCo8o3JxwM-3wwT0FXy0w",
  authDomain: "real-estate-housing-service.firebaseapp.com",
  projectId: "real-estate-housing-service",
  storageBucket: "real-estate-housing-service.appspot.com",
  messagingSenderId: "800128432699",
  appId: "1:800128432699:web:5ecf0be71816d41c183a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const Auth = getAuth(app);
 export default Auth;