// src/components/Features.js

import React from 'react';
import { FaRegCalendarAlt, FaShareAlt, FaPaintBrush, FaLock, FaCloudUploadAlt, FaUsers } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">App Features</h2>
        
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {[
            {
              icon: FaRegCalendarAlt,
              title: 'Seamless Organization',
              description: 'Automatically organizes your photos by date, location, and themes, making it easy to find your memories.'
            },
            {
              icon: FaShareAlt,
              title: 'Effortless Sharing',
              description: 'Share your favorite moments with friends and family through various social platforms in just a click.'
            },
            {
              icon: FaPaintBrush,
              title: 'Professional Editing',
              description: 'Enhance your photos with powerful, user-friendly editing tools that allow you to adjust, crop, and filter with ease.'
            },
            {
              icon: FaLock,
              title: 'Secure Storage',
              description: 'Your photos are stored securely in the cloud, ensuring they are safe and accessible anytime, anywhere.'
            },
            {
              icon: FaCloudUploadAlt,
              title: 'Easy Upload',
              description: 'Upload photos and albums effortlessly from your device or directly from social media platforms.'
            },
            {
              icon: FaUsers,
              title: 'Collaborative Albums',
              description: 'Create shared albums with friends and family, allowing everyone to contribute and relive memories together.'
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What Our Users Say</h3>
          <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
            {[
              {
                name: "John Doe",
                feedback: "This app has changed the way I manage my photos. It's so easy to use!",
              },
              {
                name: "Jane Smith",
                feedback: "I love the collaboration feature! Sharing memories with family has never been easier.",
              },
              {
                name: "Alice Johnson",
                feedback: "The editing tools are fantastic. I can make my photos look professional in no time.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                <p className="font-semibold text-gray-800 mt-2">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
          <p className="mb-4 text-gray-600">Join our community and experience seamless photo management today!</p>
          <a href="/signup" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200">
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
