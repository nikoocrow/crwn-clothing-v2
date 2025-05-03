// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from "firebase/auth";


 import{
   getFirestore,
   doc,
   getDoc,
   setDoc,
  } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAviGejEzYYeK49F3SKPTgQ4qQVYOF82jU",
  authDomain: "crown-clothing-db-60cad.firebaseapp.com",
  projectId: "crown-clothing-db-60cad",
  storageBucket: "crown-clothing-db-60cad.firebasestorage.app",
  messagingSenderId: "699398254728",
  appId: "1:699398254728:web:c8549e65b320f9144def3d"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ 
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();



export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);
      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot);
      console.log(userSnapshot.exists());

      // if user data does not exist
      if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }
        catch (error){
            console.log('error creating the user', error.message);
        }
       }
      
      // if user data does  exist
      return userDocRef;
};