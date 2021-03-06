import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();

  const auth = getAuth();


  const googleProvider = new GoogleAuthProvider();



  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }
  // observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [])



  return {
    user,
    signInUsingGoogle,
    logOut,
    setUser,
    setError,
    error



  }
}

export default useFirebase;