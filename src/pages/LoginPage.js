import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section id="login" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Login to Access</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white font-semibold py-3 rounded-md w-full transition hover:bg-blue-700"
              onClick={onLogin}
            >
              Login
            </button>
          </div>
          <div className="mt-6 text-center text-gray-500">
            Or login with:
            <div className="flex justify-center mt-3 space-x-4">
              <FaGoogle className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600" />
              <FaFacebook className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600" />
              <FaGithub className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
