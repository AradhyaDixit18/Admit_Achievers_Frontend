import React, { useState } from 'react';

const ResultSection = () => {
  const [activeSection, setActiveSection] = useState('Profile Building');

  const sections = {
    'Profile Building': (
      <div>
        <h3 className="text-2xl font-bold">Profile Building</h3>
        <p className="mt-4">
          Thank You to the counselor at Admit Achievers for making my admission possible in the
          United States of America with the university of my choice. I would like to take this
          opportunity to emphasize the flawless service they provided. They took care of everything
          right from the beginning, curated specific profiles based on my background, and the
          university research was impeccable, which garnered me multiple offers.
        </p>
      </div>
    ),
    'University Selection': (
      <div>
        <h3 className="text-2xl font-bold">University Selection</h3>
        <p className="mt-4">
          Our experts help you select the best universities that match your profile and aspirations.
          We take into account various factors including your academic background, career goals, and
          personal preferences.
        </p>
      </div>
    ),
    'Document Editing': (
      <div>
        <h3 className="text-2xl font-bold">Document Editing</h3>
        <p className="mt-4">
          We provide comprehensive document editing services to ensure your application documents,
          including essays and resumes, are polished and professional. Our editors offer valuable
          feedback and suggestions.
        </p>
      </div>
    ),
    'Applications Assist': (
      <div>
        <h3 className="text-2xl font-bold">Applications Assist</h3>
        <p className="mt-4">
          Our team assists you with the entire application process, from filling out forms to
          preparing for interviews. We ensure that every part of your application is complete and
          accurately represents your achievements.
        </p>
      </div>
    ),
    'Scholarship': (
      <div>
        <h3 className="text-2xl font-bold">Scholarship</h3>
        <p className="mt-4">
          We help you find and apply for scholarships that can reduce the financial burden of
          studying abroad. Our counselors guide you through the process to maximize your chances of
          receiving financial aid.
        </p>
      </div>
    ),
  };

  return (
    <div>
      {/* Crimson Student Results Section */}
      <div className="bg-gray-800 text-white p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Crimson <span className="text-orange-500">Student</span> Results
          </h1>
          <p className="mt-2">OUR STUDENTS HAVE RECEIVED 3500+ OFFERS TO THE WORLD'S BEST UNIVERSITIES.</p>
        </div>

        <div className="flex justify-around items-center mt-8">
          <div className="text-center">
            <img src="/path/to/columbia_logo.png" alt="Columbia University" className="h-16 mx-auto" />
            <p className="mt-2">Columbia University</p>
            <p className="font-bold">13</p>
          </div>
          <div className="text-center">
            <img src="/path/to/yale_logo.png" alt="Yale University" className="h-16 mx-auto" />
            <p className="mt-2">Yale University</p>
            <p className="font-bold">23</p>
          </div>
          <div className="text-center">
            <img src="/path/to/brown_logo.png" alt="Brown University" className="h-16 mx-auto" />
            <p className="mt-2">Brown University</p>
            <p className="font-bold">65</p>
          </div>
          <div className="text-center">
            <img src="/path/to/stanford_logo.png" alt="Stanford University" className="h-16 mx-auto" />
            <p className="mt-2">Stanford University</p>
            <p className="font-bold">27</p>
          </div>
          <div className="text-center">
            <img src="/path/to/mit_logo.png" alt="MIT" className="h-16 mx-auto" />
            <p className="mt-2">MIT</p>
            <p className="font-bold">12</p>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-white text-gray-800 p-8">
        <h2 className="text-center text-2xl font-bold mb-8">How does <span className="text-orange-500">Admit Achievers</span> work?</h2>
        <div className="flex justify-around items-center">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`text-center ${activeSection === section ? 'text-orange-500' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              <img src={`/path/to/${section.toLowerCase().replace(' ', '_')}_icon.png`} alt={section} className="h-16 mx-auto" />
              <p className="mt-2">{section}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="bg-white text-gray-800 p-8">
        <div className="flex items-center">
          <img src="/path/to/profile_picture.png" alt="Profile" className="h-32 w-32 rounded-full mr-8" />
          <div>
            {sections[activeSection]}
            <div className="mt-4 flex space-x-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md">Book A Demo</button>
              <button className="bg-transparent border border-gray-800 text-gray-800 px-6 py-2 rounded-md shadow-md">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
