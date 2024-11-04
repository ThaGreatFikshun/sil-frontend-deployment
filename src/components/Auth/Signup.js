// src/components/Auth/Signup.js

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, providerGoogle, providerFacebook, providerGithub } from '../../firebase';
import { FaHome } from 'react-icons/fa'; // Importing home icon

const Signup = () => {
    const { signupWithEmail } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        try {
            await signupWithEmail(email, password);
            // Redirect to login page on successful signup
            navigate('/login');
        } catch (error) {
            setError(error.message); // Set error message if signup fails
            console.error("Signup failed:", error.message);
        }
    };

    const handleSocialSignup = async (provider) => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/login'); // Redirect on successful signup
        } catch (error) {
            setError(error.message); // Set error message if signup fails
            console.error(`${provider.providerId} signup failed:`, error.message);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center">Signup</h2>
                {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}

                {/* Email and Password Form */}
                <form onSubmit={handleSignup}>
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
                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                </form>

                <p className="text-center mt-3">Or sign up with:</p>

                {/* Social Signup Buttons */}
                <div className="mt-3">
                    <button className="btn btn-danger w-100 mb-2" onClick={() => handleSocialSignup(providerGoogle)}>
                        Sign Up with Google
                    </button>
                    <button className="btn btn-primary w-100 mb-2" onClick={() => handleSocialSignup(providerFacebook)}>
                        Sign Up with Facebook
                    </button>
                    <button className="btn btn-dark w-100 mb-2" onClick={() => handleSocialSignup(providerGithub)}>
                        Sign Up with GitHub
                    </button>
                </div>

                <p className="text-center mt-3">
                    Already have an account? 
                    <button 
                        className="text-blue-600 hover:underline focus:outline-none no-underline ml-2" // Added margin-left for spacing
                        onClick={() => navigate('/login')}
                    >
                        Login
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

export default Signup;
