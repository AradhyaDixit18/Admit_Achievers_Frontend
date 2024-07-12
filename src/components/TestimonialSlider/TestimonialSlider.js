import React from 'react';
import './TestimonialSlider.css';
import { FaGooglePlay, FaYoutube, FaInstagram, FaUsers, FaLinkedin, FaPinterest } from 'react-icons/fa';

import VideoBanner from "../../assets/Homepage/OtherServices/AA_Home_VideoSectionBanner.png";
import Testimonial from '../Testimonials/Testinomials';

const TestimonialSlider = () => {
  return (
    <>
      <div className="relative text-white main">
        <div className="relative w-full h-78 overflow-hidden z-0">
          <img src={VideoBanner} alt="" className="absolute w-full h-full object-cover" />
          <div className="relative -ml-80 container py-24 z-10">
            <h1 className="text-4xl text-white font-bold">STUDY ABROAD ESSENTIALS</h1>
            <h2 className="text-lg text-white font-bold">Video Resources for study abroad tips, guides, and inspiration</h2>
            <button
              onClick={() => window.open('https://youtube.com/@admitachievers', '_blank')}
              className="mt-4  text-white px-6 py-2 rounded-md background-clr shadow-md hover:bg-orange-600"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="bg-gray-100 p-8">
        {/* Section 1 */}
        <div className="ready-section  md:w-3/4 mx-auto text-white p-8 rounded-lg flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl md:text-4xl mt-10 font-bold mb-4 z-10">Start Your 
          <span className="text-orange-500"> Journey</span></h2>
          <p className="mb-4 z-10 mt-5">Connect with India's leading study abroad counselors.
          </p>
          <button
            onClick={() => window.location.href='/book-a-session'}
            className="bg-white mt-5 text-black px-6 py-3 rounded-lg font-bold z-10"
          >
            Connect Now
          </button>
        </div>

        {/* Section 2 */}
        <div className="community-container bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold">Join Our <span className="text-orange-500">Community</span></h3>
          <div className="grid ml-16 grid-cols-2 md:grid-cols-4 gap-2 mt-8">
            <a href="https://www.linkedin.com/company/admit-achievers/" target="_blank" rel="noopener noreferrer" className="community-card bg-light-green p-4 flex items-center rounded-lg shadow-md">
              <p className="community-text w-36 text-black">Connect with us<br />for Insights</p>
              <FaLinkedin className="community-icon -mt-12 text-5xl ml-4 text-blue-600" />
            </a>
            <a href="https://www.instagram.com/admitachievers" target="_blank" rel="noopener noreferrer" className="community-card bg-light-red p-4 flex items-center rounded-lg shadow-md">
              <p className="community-text w-64 text-black">Follow us<br />for updates</p>
              <FaInstagram className="community-icon -mt-12 text-8xl ml-4 text-pink-500" />
            </a>
            <a href="https://youtube.com/@admitachievers" target="_blank" rel="noopener noreferrer" className="community-card bg-light-purple p-4 flex items-center rounded-lg shadow-md">
              <p className="community-text text-black">Explore &<br />Subscribe</p>
              <FaYoutube className="community-icon -mt-12 text-5xl ml-4 text-red-600" />
            </a>
            <a href="https://www.pinterest.com/admitachievers" target="_blank" rel="noopener noreferrer" className="community-card bg-light-orange p-4 flex items-center rounded-lg shadow-md">
              <p className="community-text text-black">Discover<br />Inspiration</p>
              <FaPinterest className="community-icon -mt-12 text-5xl ml-4 text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
