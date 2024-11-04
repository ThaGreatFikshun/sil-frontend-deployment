// Authenticated User navbar view

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const AuthenticatedNavbar = () => {
    const { logout } = useContext(AuthContext); // Get logout function from AuthContext

    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">SIL Booth</Link>
                <div className="flex space-x-6">
                    <Link to="/home" className="text-gray-600 hover:text-blue-600">Home</Link>
                    <button 
                        onClick={logout} 
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AuthenticatedNavbar;
