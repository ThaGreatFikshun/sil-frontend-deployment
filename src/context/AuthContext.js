// src/context/AuthContext.js

import React, { createContext, useEffect, useState } from 'react';
import { auth, providerGoogle, providerFacebook, providerGithub } from '../firebase';
import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Demo login credentials
    const demoCredentials = {
        email: "demo@example.com",
        password: "password123"
    };

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, providerGoogle);
            setCurrentUser(result.user);
        } catch (error) {
            console.error("Google login failed:", error.message);
            alert("Google login failed: " + error.message); // User feedback
        }
    };

    const loginWithFacebook = async () => {
        try {
            const result = await signInWithPopup(auth, providerFacebook);
            setCurrentUser(result.user);
        } catch (error) {
            console.error("Facebook login failed:", error.message);
            alert("Facebook login failed: " + error.message); // User feedback
        }
    };

    const loginWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, providerGithub);
            setCurrentUser(result.user);
        } catch (error) {
            console.error("GitHub login failed:", error.message);
            alert("GitHub login failed: " + error.message); // User feedback
        }
    };

    const demoLogin = async () => {
        try {
            const { email, password } = demoCredentials;
            await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser({ email }); // Set full user object if needed
        } catch (error) {
            console.error("Demo login failed:", error.message);
            alert("Demo login failed: " + error.message); // User feedback
        }
    };

    const signupWithEmail = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setCurrentUser(result.user);
        } catch (error) {
            console.error("Signup failed:", error.message);
            alert("Signup failed: " + error.message); // User feedback
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null); // Reset the current user state
        } catch (error) {
            console.error("Logout failed:", error.message);
            alert("Logout failed: " + error.message); // User feedback
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{
            currentUser,
            loading,
            loginWithGoogle,
            loginWithFacebook,
            loginWithGithub,
            demoLogin,
            signupWithEmail,
            logout // Add logout to the context
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
