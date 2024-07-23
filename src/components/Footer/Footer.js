import React from 'react';
import './Footer.css';
import footerIcon from "../../assets/Logos/AA_Footer_Logo_1080_Square.png"

const Footer = () => {
  return (
    <footer className="main-footer text-left text-white py-8 mt-2">
      <div className="container text-left mx-auto px-4">
        <div className="flex flex-col text-left items-start md:flex-row md:justify-between">
          <div className="flex flex-col text-left items-start mb-8 md:mb-0">
            <div className="footer-logo mb-4">
              <img src={footerIcon} alt="Logo" className="logo-main" />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/admitachievers/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-orange-500 text-2xl hover:cursor-pointer"></i>
              </a>
              <a href="https://www.linkedin.com/company/admit-achievers/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-orange-500 text-2xl hover:cursor-pointer"></i>
              </a>
              <a href="https://www.youtube.com/@admitachievers" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-orange-500 text-2xl hover:cursor-pointer"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col text-left md:flex-row md:space-x-36">
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="list-none space-y-2">
                <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Full Stack Admissions</a></li>
                <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Essay Review</a></li>
                <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Profile Building</a></li>
                <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Visas</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="list-none space-y-2">
                <li><a href="/about-us" className="hover:underline hover:cursor-pointer">About Us</a></li>
                <li><a href="/contact-us" className="hover:underline hover:cursor-pointer">Contact Us</a></li>
                <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Blogs</a></li>
              </ul>
            </div>
            <div className="flex flex-col mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Destination</h3>
              <div className="grid grid-cols-2 gap-x-20">
                <ul className="list-none space-y-2">
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">United States</a></li>
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">United Kingdom</a></li>
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Canada</a></li>
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Germany</a></li>
                </ul>
                <ul className="list-none space-y-2">
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Australia</a></li>
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Ireland</a></li>
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">New Zealand</a></li>
                  <li><a href="/coming-soon" className="hover:underline hover:cursor-pointer">Singapore</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start md:flex-row md:justify-between mt-8">
          <p className="text-left text-white">&copy; 2024 Admit Achievers</p>
          <p className="text-left text-white">All rights reserved. Registration or use of this site constitutes acceptance of our <a href="#terms" className="hover:underline hover:cursor-pointer">Terms and Conditions</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
