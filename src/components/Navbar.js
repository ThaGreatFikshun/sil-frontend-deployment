import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, logout } = useContext(AuthContext); // Get currentUser and logout from context

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">SIL Booth</Link>
                <div className="hidden md:flex space-x-4">
                    <Link 
                        to="#features" 
                        className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 focus:outline-none no-underline">
                        Features
                    </Link>
                    {currentUser ? ( // Check if user is logged in
                        <>
                            <Link 
                                to="/home" 
                                className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 no-underline">
                                Home
                            </Link>
                            <button 
                                onClick={logout} 
                                className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 focus:outline-none">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/login" 
                                className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 no-underline">
                                Login
                            </Link>
                            <Link 
                                to="/signup" 
                                className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 no-underline">
                                Register
                            </Link>
                        </>
                    )}
                    <Link 
                        to="#footer" 
                        className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 focus:outline-none no-underline">
                        Contact
                    </Link>
                </div>
                <button 
                    className="md:hidden text-gray-600 focus:outline-none" 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md py-2">
                    <div className="flex flex-col space-y-2 px-4">
                        <Link 
                            to="#features" 
                            className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 focus:outline-none no-underline">
                            Features
                        </Link>
                        {currentUser ? (
                            <>
                                <Link 
                                    to="/home" 
                                    className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 no-underline">
                                    Home
                                </Link>
                                <button 
                                    onClick={logout} 
                                    className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 focus:outline-none">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login" 
                                    className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 no-underline">
                                    Login
                                </Link>
                                <Link 
                                    to="/register" 
                                    className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 no-underline">
                                    Register
                                </Link>
                            </>
                        )}
                        <Link 
                            to="#footer" 
                            className="text-gray-600 hover:text-blue-600 border-b-0 hover:bg-gray-100 rounded px-4 py-2 transition duration-300 focus:outline-none no-underline">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
