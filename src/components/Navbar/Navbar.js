import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation, Link } from 'react-router-dom';
import Logo from "../../assets/Logos/AA_Header_Logo_1080_Horizontal.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleDestinationsDropdown = () => {
    setIsDestinationsOpen(!isDestinationsOpen);
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
          <Link to="/">
            <img src={Logo} alt="Admit Achievers" className="h-16 w-auto" />
          </Link>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="lg:flex lg:space-x-6">
            <div className="relative">
              <button onClick={toggleServicesDropdown} className={`block lg:inline-block p-2 `}>Our Services</button>
              {isServicesOpen && (
                <div className="absolute bg-white shadow-md rounded mt-2 w-48 dropdown-menu">
                  <Link to="/ug-pg-admissions" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UG & PG Admissions</Link>
                  <Link to="/profile-building" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile Building</Link>
                  <Link to="/essay-review" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Essay Review</Link>
                  <Link to="/visas" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Visas</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={toggleDestinationsDropdown} className={`block lg:inline-block p-2 `}>Destinations</button>
              {isDestinationsOpen && (
                <div className="absolute bg-white shadow-md rounded mt-2 w-48 dropdown-menu">
                  <Link to="/usa" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in USA</Link>
                  <Link to="/uk" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in UK</Link>
                  <Link to="/australia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Australia</Link>
                  <Link to="/canada" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Canada</Link>
                  <Link to="/singapore" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Singapore</Link>
                  <Link to="/new-zealand" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in New Zealand</Link>
                  <Link to="/europe" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Europe</Link>
                </div>
              )}
            </div>
            <Link to="/blog-listing" className={`block lg:inline-block p-2 ${getLinkClass('/blog-listing')}`}>Blog</Link>
            <Link to="/about-us" className={`block lg:inline-block p-2  ${getLinkClass('/about-us')}`}>About Us</Link>
          </div>
          <div className="lg:flex lg:space-x-4 lg:ml-auto mt-4 ml-4 lg:mt-0">
            <Link to="/book-a-session" className={`bg-orange-500 ml-8 text-white px-4 py-2 rounded mb-2 lg:mb-0 ${getLinkClass('/book-a-session')}`}>Book a Session</Link>
            <Link to="/find-a-course" className="bg-gray-100 text-gray-800 px-4 py-2 rounded mb-2 lg:mb-0">Find a Course</Link>
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
