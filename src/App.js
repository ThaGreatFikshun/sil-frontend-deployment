// src/App.js

import React, { useContext } from 'react'; // Import useContext from React
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from './context/AuthContext'; // Ensure AuthContext is imported
import LandingPage from './pages/LandingPage';
import LoginPage from './components/Auth/Login';
import SignupPage from './components/Auth/Signup'; // Add SignupPage
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AlbumPage from './pages/AlbumPage';
import PhotoPage from './pages/PhotoPage';
import './styles/App.css';

// Wrapper component to protect authenticated routes
const PrivateRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext); // Use useContext to access AuthContext
    return currentUser ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider> 
            <Router>
                <div className="App">
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} /> 

                        {/* Protected Routes */}
                        <Route 
                            path="/home" 
                            element={
                                <PrivateRoute>
                                    <HomePage />
                                </PrivateRoute>
                            } 
                        />
                        <Route 
                            path="/users/:id" 
                            element={
                                <PrivateRoute>
                                    <UserPage />
                                </PrivateRoute>
                            } 
                        />
                        <Route 
                            path="/albums/:id" 
                            element={
                                <PrivateRoute>
                                    <AlbumPage />
                                </PrivateRoute>
                            } 
                        />
                        <Route 
                            path="/photos/:id" 
                            element={
                                <PrivateRoute>
                                    <PhotoPage />
                                </PrivateRoute>
                            } 
                        />

                        {/* Fallback Route */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
