// Navbar.js
import React from 'react';
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Admit Achievers" className="h-12 w-auto" />
        </div>
        <div className="flex space-x-6">
          <a href="#services" className="text-orange-600">Our Services</a>
          <a href="#destinations" className="text-gray-800">Destinations</a>
          <a href="#blog" className="text-gray-800">Blog</a>
          <a href="#about" className="text-gray-800">About Us</a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-orange-500 text-white px-4 py-2 mr-4 rounded">Book a Session</button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 mr-4 rounded">Find a Course</button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
