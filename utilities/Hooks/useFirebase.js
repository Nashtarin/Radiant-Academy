
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, getIdToken, updateProfile, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const router = useRouter();

    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                router.replace('/profile');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const registerUser = (name,username,email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                // saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const githubSignIn = () => {
        setIsLoading(true);

        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                router.replace('/profile');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })

            .finally(() => setIsLoading(false))
    }

    const facebookSignIn = () => {
        setIsLoading(true);

        signInWithPopup(auth, facebookProvider)
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                setUser(user);
                router.replace('/profile');
                setAuthError('');

            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


        

    const loginUser = (email,password) => {
        setIsLoading(true);
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);
                //     })
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [auth])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        admin,

        isLoading,
        authError,
        registerUser,
        loginUser,

        logout,
        googleSignIn,
        githubSignIn,
        facebookSignIn
    }

}
export default useFirebase;