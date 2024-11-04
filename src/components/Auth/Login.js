// src/components/Auth/Login.js

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { auth, providerGoogle, providerFacebook, providerGithub } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa'; // Importing home icon

const Login = () => {
    const { demoLogin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            navigate('/home');
        } catch (error) {
            handleLoginError(error);
            console.error("Email login failed:", error.message);
        }
    };

    const handleLoginError = (error) => {
        switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/wrong-password':
                setError("Invalid email or password.");
                break;
            case 'auth/user-not-found':
                setError("No user found with this email.");
                break;
            default:
                setError("An error occurred. Please try again.");
                break;
        }
    };

    const handleSocialLogin = async (provider) => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/home');
        } catch (error) {
            setError(`${provider.providerId} login failed. Please try again.`);
            console.error(`${provider.providerId} login failed:`, error.message);
        }
    };

    const handleDemoLogin = async () => {
        try {
            await demoLogin(); // Trigger the demo login function from AuthContext
            navigate('/home'); // Navigate to home after demo login
        } catch (error) {
            setError("Demo login failed. Please try again.");
            console.error("Demo login failed:", error.message);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center">Login</h2>
                {error && <div className="alert alert-danger mt-3">{error}</div>}

                {/* Email and Password Form */}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Login</button>
                </form>

                <p className="text-center mt-3">Or log in with:</p>

                {/* Social Login Buttons */}
                <div className="mt-4">
                    <button className="btn btn-danger w-100 mb-2" onClick={() => handleSocialLogin(providerGoogle)}>
                        Login with Google
                    </button>
                    <button className="btn btn-primary w-100 mb-2" onClick={() => handleSocialLogin(providerFacebook)}>
                        Login with Facebook
                    </button>
                    <button className="btn btn-dark w-100 mb-2" onClick={() => handleSocialLogin(providerGithub)}>
                        Login with GitHub
                    </button>
                    <button className="btn btn-secondary w-100 mb-2" onClick={handleDemoLogin}>
                        Demo Login
                    </button>
                </div>

                <p className="text-center mt-3">
                    Don't have an account? 
                    <button 
                        className="text-blue-600 hover:underline focus:outline-none no-underline ml-2" // Added margin-left for spacing
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </button>
                </p>

                {/* Navigation to landing page */}
                <div className="text-center mt-3">
                    <button 
                        className="btn text-blue-600 d-flex align-items-center" // Removed btn-link to eliminate text decoration
                        onClick={() => navigate('/')} // Navigate to the landing page
                    >
                        <FaHome className="me-2" /> {/* Home icon */}
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
