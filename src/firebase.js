// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChiehZ9BovbmVzQq4h0JnVLpDEcsB_1AE",
    authDomain: "sil-frontend-project.firebaseapp.com",
    projectId: "sil-frontend-project",
    storageBucket: "sil-frontend-project.appspot.com",
    messagingSenderId: "751919575908",
    appId: "1:751919575908:web:37eeff485cdc45a3e10071",
    measurementId: "G-MJ7ZV5B4L9"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize providers for third-party auth
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();

export { app, auth, providerGoogle, providerFacebook, providerGithub };
