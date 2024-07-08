import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import HeroBanner from "../../assets/Homepage/AA_Home_HeroBanner.png"

const stats = [
    { icon: 'fas fa-clock', value: '250000+', label: 'Hours of counseling experience' },
    { icon: 'fas fa-calendar-alt', value: '17', label: 'Years of experience' },
    { icon: 'fas fa-check-circle', value: '99%', label: 'Visa success rate' },
    { icon: 'fas fa-graduation-cap', value: '24000+', label: 'Students placed abroad' },
    { icon: 'fas fa-building', value: '6', label: 'Branch offices with more on the way' },
    { icon: 'fas fa-dollar-sign', value: 'US $18.5', label: 'Scholarships worth US $18.5 million won for our students' },
    { icon: 'fas fa-user-friends', value: '1-1', label: 'One-on-one in-depth counseling' },
    { icon: 'fas fa-university', value: '38', label: 'Universities have exclusive scholarships for AEC\'s students' },
    { icon: 'fas fa-trophy', value: 'Most awarded', label: 'Most awarded consultant by the universities' },
    { icon: 'fas fa-thumbs-up', value: 'Priority offer', label: 'Priority offer from the university' },
];

const HeroSection = () => {
 
  

    return (
        <div className="relative text-white main">
            <div className="relative w-full h-96 overflow-hidden z-0">
                <img src={HeroBanner} alt="" className="absolute w-full h-full object-cover" />
                <div className="relative container mx-auto py-24 px-6 text-center z-10">
                    <h1 id="hero-text" className="text-4xl text-white font-bold">
                      
                    </h1>
                    <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold">
                        
                    </button>
                    <div className="mt-6 text-lg">
                        <span className="block">1,00,000+ Success Stories</span>
                        <span className="block">10,000+ Preferred Courses</span>
                    </div>
                </div>
            </div>
            <div className="relative container mx-auto text-center cards-section z-20 -mt-24">
                <div className="pattern-dots top-right"></div>
                <h2 className="text-4xl font-bold mb-8 text-black">Why Admit Achievers?</h2>
                <div className="pattern-dots bottom-left"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center stat-item">
                            <div className="text-orange-500 text-4xl">
                                <i className={stat.icon}></i>
                            </div>
                            <p className="mt-2 text-xl font-semibold">{stat.value}</p>
                            <p className="text-gray-500 text-center">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
