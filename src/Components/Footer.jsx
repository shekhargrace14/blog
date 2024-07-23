// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h5 className="text-xl font-bold">[Website Name]</h5>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="w-full sm:w-auto">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
