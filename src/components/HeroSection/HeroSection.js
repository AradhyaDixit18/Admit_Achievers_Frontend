import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import HeroBanner from "../../assets/Homepage/AA_Home_HeroBanner.png";

const stats = [
    { icon: 'fas fa-chart-line', value: '95%+', label: 'Success Rate' },
    { icon: 'fas fa-globe', value: '10+', label: 'Countries Covered' },
    { icon: 'fas fa-user-graduate', value: '100+', label: 'Students Placed' },
    { icon: 'fas fa-check-circle', value: '98%', label: 'Visa Approval Rate' },
    { icon: 'fas fa-briefcase', value: '15 Years', label: 'Avg. Advisor Experience' },
    { icon: 'fas fa-dollar-sign', value: '$100,000+', label: 'Scholarships' },
    { icon: 'fas fa-user-cog', value: '100+', label: 'Students Profile Building' },
    { icon: 'fas fa-clock', value: '10,000+', label: 'Counseling Hours' },
];

const HeroSection = () => {
    const navigate = useNavigate();

    const handleStartHereClick = () => {
        navigate('/book-a-session');
    };

    return (
        <div className="relative text-white main">
            <div className="relative w-full  overflow-hidden z-0">
                <img src={HeroBanner} alt="Hero Banner" className="absolute w-full  object-cover hero-image" />
                <div className="relative mx-auto py-24 px-6 text-center z-10 hero-content">
                    <h1 id="hero-text" className="text-5xl text-white font-bold">
                        Unlock Your Academic Potential
                    </h1>
                    <button
                        id='hero-button'
                        className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold"
                        onClick={handleStartHereClick}
                    >
                        Start Here
                    </button>
                    <div id='hero-subtext' className="mt-6 text-2xl">
                        <span className="block">Expert Guidance For Your Study Abroad Journey</span>
                    </div>
                </div>
            </div>
        
            <div className="cards-section text-center z-20 ">
                <div className="pattern-dots  top-right"></div>
                <h2 className="md:text-5xl sm:text-2xl font-bold mb-8 text-black">Why Admit Achievers?</h2>
                <div className="pattern-dots bottom-left"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center stat-item">
                            <div className="text-orange-500 text-6xl">
                                <i className={stat.icon}></i>
                            </div>
                            <p className="mt-2 text-2xl text-gray-500 font-semibold">{stat.value}</p>
                            <p className="text-gray-500 text-center">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
