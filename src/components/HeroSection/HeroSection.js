// HeroSection.js
import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className="relative bg-orange-600 text-white">
      <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
      <img
        src="hero-image.jpg"
        alt="Global Education"
        className="w-full h-full object-cover"
      />
      <div className="relative container mx-auto py-24 px-6 text-center">
        <h1  id='hero-text' className="text-4xl font-bold ">Powering your GLOBAL EDUCATION dream</h1>
        <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold">
          Start Your Journey
        </button>
        <div className="mt-6 text-lg">
          <span className="block">1,00,000+ Success Stories</span>
          <span className="block">10,000+ Preferred Courses</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
