import { createContext, useEffect, useState, ReactNode } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext<{ user: User | null; loading: boolean; createUser: (email: string, password: string) => Promise<void>; signInUser: (email: string, password: string) => Promise<void>; updateUserProfile: (name: string) => Promise<void>; logOut: () => void }>({ user: null, loading: true, createUser: () => Promise.resolve(), signInUser: () => Promise.resolve(), updateUserProfile: () => Promise.resolve(), logOut: () => {} });

const auth = getAuth(app);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email: string, password: string): Promise<any> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};

    const signInUser = async (email: string, password: string): Promise<any> => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

    // const updateUserProfile = (name: string): Promise<void> => {
    //     return updateProfile(auth.currentUser, { displayName: name });
    // };

    const updateUserProfile = async (name: string): Promise<void> => {
        const currentUser = auth.currentUser;
    
        if (currentUser) {
            try {
                await updateProfile(currentUser, { displayName: name });
            } catch (error: any) {
                console.error('Error updating user profile:', error?.message || 'Unknown error');
                // Handle the error as needed
            }
        } else {
            console.error('User is not authenticated.');
            // Handle the situation where the user is not authenticated
        }
    };
    
    

    const logOut = (): void => {
        signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                axios
                    .post('https://gadget-flow-server.vercel.app/jwt', { email: currentUser.email })
                    .then((data) => {
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        logOut,
    };

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
