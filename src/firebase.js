// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" 
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyYAwCOKsEKBh7pQAteR48DNFqSyTpURo",
  authDomain: "react-portfolio-fcc.firebaseapp.com",
  projectId: "react-portfolio-fcc",
  storageBucket: "react-portfolio-fcc.appspot.com",
  messagingSenderId: "284621682486",
  appId: "1:284621682486:web:09d54210036bf0b0776597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const database = getFirestore(); //We'll use this database to store the collection of portfolios that we'll create
export const storage = getStorage(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
};


// What we want to do now is 
// 1. Create a method to Login using google,
// 2. Creating a method to store image into the firebase storage and 
// 3. Then upload a create new document in firebase database