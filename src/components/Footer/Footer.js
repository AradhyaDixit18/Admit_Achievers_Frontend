import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center">
            <div className="footer-logo mb-4">
              <img src="your-logo-url-here" alt="Logo" className="w-20" />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-orange-500 text-2xl hover:cursor-pointer"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-orange-500 text-2xl hover:cursor-pointer"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-orange-500 text-2xl hover:cursor-pointer"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 mt-8 md:mt-0">
            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="list-none space-y-2">
                <li><a href="#fullstack-admissions" className="hover:underline hover:cursor-pointer">Full Stack Admissions</a></li>
                <li><a href="#essay-review" className="hover:underline hover:cursor-pointer">Essay Review</a></li>
                <li><a href="#profile-building" className="hover:underline hover:cursor-pointer">Profile Building</a></li>
                <li><a href="#visas" className="hover:underline hover:cursor-pointer">Visas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="list-none space-y-2">
                <li><a href="#about-us" className="hover:underline hover:cursor-pointer">About Us</a></li>
                <li><a href="#contact-us" className="hover:underline hover:cursor-pointer">Contact Us</a></li>
                <li><a href="#blogs" className="hover:underline hover:cursor-pointer">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Destination</h3>
              <ul className="list-none space-y-2">
                <li><a href="#america" className="hover:underline hover:cursor-pointer">America</a></li>
                <li><a href="#uk" className="hover:underline hover:cursor-pointer">United Kingdom</a></li>
                <li><a href="#canada" className="hover:underline hover:cursor-pointer">Canada</a></li>
                <li><a href="#germany" className="hover:underline hover:cursor-pointer">Germany</a></li>
                <li><a href="#australia" className="hover:underline hover:cursor-pointer">Australia</a></li>
                <li><a href="#ireland" className="hover:underline hover:cursor-pointer">Ireland</a></li>
                <li><a href="#new-zealand" className="hover:underline hover:cursor-pointer">New Zealand</a></li>
                <li><a href="#singapore" className="hover:underline hover:cursor-pointer">Singapore</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between mt-8">
          <p className="text-center text-gray-500">&copy; 2023 Admit Achievers</p>
          <p className="text-center text-gray-500">All rights reserved. Registration or use of this site constitutes acceptance of our <a href="#terms" className="hover:underline hover:cursor-pointer">Terms and Conditions</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
