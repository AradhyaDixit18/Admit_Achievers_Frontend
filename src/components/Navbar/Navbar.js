import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation, Link } from 'react-router-dom';
import Logo from "../../assets/Logos/AA_Header_Logo_1080_Horizontal.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 3000); // 3 seconds
    setDropdownTimeout(timeout);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.dropdown-menu')) {
      return;
    }
    setOpenDropdown(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-orange-600' : 'text-gray-800';
  };

  return (
    <nav className="bg-white shadow p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button onClick={() => setOpenDropdown(openDropdown === 'menu' ? null : 'menu')} className="text-gray-800 focus:outline-none">
            <i className={`fas ${openDropdown === 'menu' ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link to="/">
            <img src={Logo} alt="Admit Achievers" className="h-16 logo w-auto" />
          </Link>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${openDropdown === 'menu' ? 'block' : 'hidden'} lg:block`}>
          <div className="lg:flex -ml-4 lg:space-x-6">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="block lg:inline-block p-2">Our Services</button>
              {openDropdown === 'services' && (
                <div
                  className="absolute bg-white shadow-md rounded mt-2 w-52 dropdown-menu z-50 open"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/admissions" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UG & PG Admissions</Link>
                  <Link to="/profile-building" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile Building</Link>
                  <Link to="/essay-review" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Essay Review</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Visas</Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('destinations')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="block lg:inline-block p-2">Destinations</button>
              {openDropdown === 'destinations' && (
                <div
                  className="absolute bg-white shadow-md rounded mt-2 w-48 dropdown-menu z-50 open"
                  onMouseEnter={() => handleMouseEnter('destinations')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in USA</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in UK</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Australia</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Canada</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Singapore</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in New Zealand</Link>
                  <Link to="/coming-soon" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Study in Europe</Link>
                </div>
              )}
            </div>
            <Link to="/blog-lists" className={`block lg:inline-block p-2 ${getLinkClass('/blog-listing')}`}>Blog</Link>
            <Link to="/about-us" className={`block lg:inline-block p-2 ${getLinkClass('/about-us')}`}>About Us</Link>
          </div>
          <div className="lg:flex lg:space-x-4 lg:ml-4 mt-4 lg:mt-0">
            <Link to="/book-a-session" className={`bg-orange-500 text-white px-4 py-2 rounded mb-2 lg:mb-0 ${getLinkClass('/book-a-session')}`}>Book a Session</Link>
            <Link to="/coming-soon" className="bg-gray-100 text-gray-800 px-4 py-2 rounded mb-2 lg:mb-0">Find a Course</Link>
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
