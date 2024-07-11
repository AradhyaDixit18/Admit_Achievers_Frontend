import React from 'react';
import './TestimonialSlider.css';
import { FaGooglePlay, FaYoutube, FaInstagram, FaUsers, FaLinkedin, FaPinterest } from 'react-icons/fa';
import Blog1 from '../../assets/Blogs/ChatGPT for Study Abroad (2400 × 1200 px).png'
import Blog2 from '../../assets/Blogs/WHY PROFILE BUILDING IS IMPORTANT.png'
import Blog3 from '../../assets/Blogs/WHY PROFILE BUILDING IS IMPORTANT.png'
import VideoBanner from "../../assets/Homepage/OtherServices/AA_Home_VideoSectionBanner.png"
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
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="bg-gray-100 p-8">
        {/* Section 1 */}
        <div className="ready-section w-full md:w-3/4 mx-auto text-white p-8 rounded-lg flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl md:text-4xl mt-10 font-bold mb-4 z-10">Ready to take the <span className="text-orange-500">Leap</span>?</h2>
          <p className="mb-4 z-10 mt-5">Connect with India's finest counsellors and biggest study abroad community.</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <a href="https://www.linkedin.com/company/admit-achievers/" target="_blank" rel="noopener noreferrer" className="community-card bg-light-green p-4 flex items-center rounded-lg shadow-md">
              <FaLinkedin className="community-icon text-4xl mr-4 text-multicolor" />
              <p className="community-text text-multicolor">Connect with us<br />for Insights</p>
            </a>
            <a href="https://www.instagram.com/admitachievers" target="_blank" rel="noopener noreferrer" className="community-card bg-light-red p-4 flex items-center rounded-lg shadow-md">
              <FaInstagram className="community-icon text-4xl mr-4 text-dark-red" />
              <p className="community-text text-dark-red">Follow us<br />for updates</p>
            </a>
            <a href="https://youtube.com/@admitachievers" target="_blank" rel="noopener noreferrer" className="community-card bg-light-purple p-4 flex items-center rounded-lg shadow-md">
              <FaYoutube className="community-icon text-4xl mr-4 text-multicolor" />
              <p className="community-text text-multicolor">Explore &<br />Subscribe</p>
            </a>
            <a href="https://www.pinterest.com/admitachievers" target="_blank" rel="noopener noreferrer" className="community-card bg-light-orange p-4 flex items-center rounded-lg shadow-md">
              <FaPinterest className="community-icon text-4xl mr-4 text-dark-orange" />
              <p className="community-text text-dark-orange">Discover<br />Inspiration</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
