import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-orange-600' : 'text-gray-800';
  };

  return (
    <nav className="bg-white shadow p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="flex-1 flex justify-start lg:justify-start">
          <a href="/">
            <img src="logo.png" alt="Admit Achievers" className="h-12 w-auto" />
          </a>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="lg:flex lg:space-x-6">
            <a href="#services" className={`block lg:inline-block p-2 ${getLinkClass('#services')}`}>Our Services</a>
            <a href="#destinations" className={`block lg:inline-block p-2 ${getLinkClass('#destinations')}`}>Destinations</a>
            <a href="#blog" className={`block lg:inline-block p-2 ${getLinkClass('#blog')}`}>Blog</a>
            <a href="/about-us" className={`block lg:inline-block p-2 ${getLinkClass('/about-us')}`}>About Us</a>
          </div>
          <div className="lg:flex lg:space-x-4 lg:ml-auto mt-4 lg:mt-0">
            <button className="bg-orange-500 text-white px-4 py-2 rounded mb-2 lg:mb-0">Book a Session</button>
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded mb-2 lg:mb-0">Find a Course</button>
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
