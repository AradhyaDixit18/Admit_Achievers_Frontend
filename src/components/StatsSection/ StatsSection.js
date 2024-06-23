// StatsSection.js
import React from 'react';
import './ StatsSection.css'
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

const StatsSection = () => {
  return (
    <div className="bg-white py-12 stats">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Why Admit Achievers?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
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

export default StatsSection;
