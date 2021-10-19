import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

   

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])



   



    return {
        user,
        setUser,
        error,
        setError,
       
        signInUsingGoogle,
        logOut,
       
        auth
    }

};

export default useFirebase;