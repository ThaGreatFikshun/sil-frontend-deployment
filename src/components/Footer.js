// src/components/Footer.js

import React from 'react';

const Footer = () => (
  <footer id="footer" className="bg-gray-900 text-gray-300 py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0">
        
        {/* Footer Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Savannah Informatics</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-2">Features</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/manage-albums" className="hover:text-white transition-colors duration-200">Manage Your Albums</a></li>
              <li><a href="/photo-sharing" className="hover:text-white transition-colors duration-200">Share Photos</a></li>
              <li><a href="/automatic-backup" className="hover:text-white transition-colors duration-200">Automatic Backup</a></li>
              <li><a href="/photo-editing" className="hover:text-white transition-colors duration-200">Edit Your Photos</a></li>
              <li><a href="/organize-photos" className="hover:text-white transition-colors duration-200">Organize Easily</a></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-2">About Us</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/our-mission" className="hover:text-white transition-colors duration-200">Our Mission</a></li>
              <li><a href="/team" className="hover:text-white transition-colors duration-200">Meet the Team</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="/community" className="hover:text-white transition-colors duration-200">Our Community</a></li>
              <li><a href="/press" className="hover:text-white transition-colors duration-200">Press Releases</a></li>
            </ul>
          </div>
          
          {/* Help Center */}
          <div>
            <h3 className="text-white font-semibold mb-2">Help Center</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/faq" className="hover:text-white transition-colors duration-200">FAQs</a></li>
              <li><a href="/support" className="hover:text-white transition-colors duration-200">Customer Support</a></li>
              <li><a href="/tips" className="hover:text-white transition-colors duration-200">Photo Tips</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="/feedback" className="hover:text-white transition-colors duration-200">Send Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Policies Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        <a href="/cookie-policy" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
        <a href="/customer-service-charter" className="hover:text-white transition-colors duration-200">Customer Charter</a>
      </div>
      
      {/* Regulation Notice */}
      <p className="text-center text-sm mt-6">Regulated by relevant authorities.</p>
    </div>
  </footer>
);

export default Footer;
