import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="bg-white flex items-center justify-center py-20 lg:py-32 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Your Digital Album, Redefined</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Easily manage, edit, and share photos with our user-friendly platform.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            onClick={() => navigate('/home')}
          >
            Get Started
          </button>
          <button
            className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition transform hover:scale-105"
            onClick={() => navigate('#features')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
