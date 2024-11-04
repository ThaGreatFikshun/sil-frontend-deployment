// src/pages/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-100">
      <Navbar />
      
      <Slideshow />

      <header className="bg-green-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Savannah Informatics</h1>
        <p className="mt-4 text-lg">Your one-stop solution for managing albums and photos!</p>
        <nav className="mt-6">
          <Link to="/login" className="inline-block px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded transition duration-200">
            Get Started
          </Link>
        </nav>
      </header>

      <main className="flex-grow p-8">
        <Features />
        
        <section>
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            At Savannah Informatics, we provide a seamless experience for managing your photos and albums. Our platform is designed to be intuitive and easy to use, ensuring that you can focus on what matters most—your memories.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
