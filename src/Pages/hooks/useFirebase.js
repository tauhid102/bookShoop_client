import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile} from "firebase/auth";
import userAuthentication from "../Login/Firebase/firebase.init";
import userPic from "../../images/defaultPic.png";

userAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const massage='Invalid Username or Password';
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: userPic
                }).then(() => {
                }).catch((error) => {
                    setError(massage);
                });

                history.replace('/');
            })
            .catch((error) => {
                setError(massage);
                // ..
            }).finally(() => {
                setIsLoading(false)
            });
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(massage);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {                        
                const user = result.user;
                console.log(user);
                const destination = location?.state.from || '/';
                setError('');
                history.replace(destination);
                
            }).catch((error) => {
                setError(massage);
            })
            .finally(() => {
                // setIsLoading(false)
            });           
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem("state");
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            });
    }
    return{
        user,error,isLoading,logout,googleSignIn,loginUser,registerUser
    }
}
export default useFirebase;