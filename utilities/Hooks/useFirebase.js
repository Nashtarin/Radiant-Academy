
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, getIdToken, updateProfile, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import toast from 'react-hot-toast';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const allUser = useSelector((state) => state.users.usersList);
    const dispatch = useDispatch();

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

                const { displayName, email, photoURL, accessToken } = user;
                saveUser(email, displayName, photoURL, accessToken, 'POST');

                setAuthError('');
                localStorage.setItem('token', accessToken);

                const signedInUser = {
                    isSignedIn: true,
                    email: email,
                    photo: photoURL,
                    success: true,
                    name: displayName
                };

                setUser(signedInUser);
                dispatch(fetchUsers());
                router.replace(`/profile/${signedInUser.email}`);
                toast.success("Successfully signed in!", {
                    position: "top-center"
                });
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const registerUser = (name, username, email, password) => {
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

    const loginUser = (email, password) => {
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
            const token = localStorage.getItem('token');
            if (token) {
                const { name, email, picture } = jwt_decode(token);
                const decodedUser = {
                    isSignedIn: true,
                    email: email,
                    photo: picture,
                    success: true,
                    name: name
                }
                setUser(decodedUser);
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
        signOut(auth).then((res) => {
            localStorage.removeItem('token');
            setUser({});
            router.push('/');
            toast.success("Successfully signed out!", {
                position: "top-center"
            });

        })
            .catch((error) => {
                // An error happened.
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    //database uploading
    const saveUser = (email, displayName, photoURL, accessToken, method) => {
        const alreadyUser = allUser.find(user => user.email === email && user.displayName === displayName);
        if (alreadyUser) {
            console.log('already user!');
        } else {
            const role = 'user';
            const user = { email, displayName, photoURL, accessToken, role };
            fetch('http://localhost:3000/api/users', {
                method: method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then()
        }
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