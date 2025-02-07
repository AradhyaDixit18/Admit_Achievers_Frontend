import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './ResultSection.css';
import { StudentsResult } from '../StudentsResult/StudentsResult';

// Importing images
import ProfileBuildingImage from '../../assets/Homepage/OtherServices/AA_HomepageServices_ProfileBuilding.jpg';
import DocumentationImage from '../../assets/Homepage/OtherServices/AA_HomePageService_Documentation.jpg';
import ApplicationsAssistImage from '../../assets/Homepage/OtherServices/AA_HomepageServices_ApplicationAssist.jpg';
import UniversitySelectionImage from '../../assets/Homepage/OtherServices/AA_HomepageServices_UniversityShortlisting.jpg';
import ScholarshipAssistanceImage from '../../assets/Homepage/OtherServices/AA_HomepageServices_ScholarShipAssistance.jpg';
// Importing icons
import ProfileBuildingActiveIcon from '../../assets/Homepage/Icons/aa_profile_hm_active.png';
import UniversitySelectionActiveIcon from '../../assets/Homepage/Icons/aa_university_hm_active.png';
import DocumentationActiveIcon from '../../assets/Homepage/Icons/aa_document_hm_active.png';
import ApplicationsAssistActiveIcon from '../../assets/Homepage/Icons/aa_application_hm_active.png';
import ScholarshipAssistanceActiveIcon from '../../assets/Homepage/Icons/AA_HomepageService_ScholarshipAssist_Active.png';

import ProfileBuildingDefaultIcon from '../../assets/Homepage/Icons/aa_profile_hm_default.png';
import UniversitySelectionDefaultIcon from '../../assets/Homepage/Icons/aa_university_hm_default.png';
import DocumentationDefaultIcon from '../../assets/Homepage/Icons/aa_document_hm_default.png';
import ApplicationsAssistDefaultIcon from '../../assets/Homepage/Icons/aa_application_hm_default.png';
import ScholarshipAssistanceDefaultIcon from '../../assets/Homepage/Icons/AA_HomepageService_ScholarshipAssist_Default.png';

const ResultSection = () => {
  const [activeSection, setActiveSection] = useState('Profile Building');
  const navigate = useNavigate();  // Create navigate function

  const sections = {
    'Profile Building': (
      <div>
        <h3 className="text-2xl font-bold">Profile Building</h3>
        <p className="mt-4">
          Our Profile Building Service helps students craft a compelling academic and extracurricular profile for university admissions.
          Our team makes the quarterly arrangement for the students to build their profile by doing the exercises which will intrigue school affirmation officials.
          Here’s how we do it:
        </p>
        <ul className="aligned-list mt-4">
          <li>Profile Assessment: We evaluate the student’s skills, achievements, and goals to identify strengths and areas for improvement.</li>
          <li>Quarterly Planning: We create a customized quarterly plan with specific activities and milestones for academic and personal growth.</li>
          <li>Progress Tracking: We regularly monitor progress, offering feedback and adjustments to ensure effective profile development.</li>
          <li>High School Course Guidance: We advise on course selection to meet academic requirements and align with future goals.</li>
          <li>Application Roadmap: We develop a detailed timeline for college applications, covering research, preparation, and submission.</li>
        </ul>
      </div>
    ),
    'University Selection': (
      <div>
        <h3 className="text-2xl font-bold">University Selection</h3>
        <p className="mt-4">
          Choosing the right university is crucial for your academic journey and the selection begins with self-research.
          Our step-by-step process ensures you find the best fit for your goals:
        </p>
        <ul className="aligned-list mt-4">
          <li>Profile Evaluation: We will assess your academic background, test scores, extracurricular activities, and experience.</li>
          <li>Course Preferences: We will discuss your course interests and recommend popular programs that align with your career plans.</li>
          <li>Preference Considerations: We will consider your preferences for location, scholarships, and internships to refine your options.</li>
          <li>University List Creation: We will provide a comprehensive list of universities categorized into Ambitious, Reach, and Safety options.</li>
        </ul>
        <p className="mt-4">It’s never too early or too late to start building your college list.</p>
      </div>
    ),
    'Document Editing': (
      <div>
        <h3 className="text-2xl font-bold">Document Editing</h3>
        <p className="mt-4">
          With increasing university applications, a strong personal statement, SOP, and essays are crucial for standing out. Our experienced editors help you create impactful documents through a structured process:
        </p>
        <ul className="aligned-list mt-4">
          <li>Brainstorming: We will work with you to identify and list experiences that will captivate admissions officers.</li>
          <li>Guided Writing: We will provide activities and prompts to help you develop content for your essays.</li>
          <li>Editing: We will refine and edit your documents based on university requirements and share the final version with you.</li>
        </ul>
        <p className="mt-4">Submit compelling applications with our expert support.</p>
      </div>
    ),
    'Applications Assist': (
      <div>
        <h3 className="text-2xl font-bold">Applications Assist</h3>
        <p className="mt-4">
          Application assistance plays a vital role in helping students navigate the complex college admissions process. It provides support, guidance, and expertise, ultimately increasing students’ chances of admission to their desired colleges and universities.
          Our Application Assistance service supports you through every step of the college admissions process to boost your chances of acceptance:
        </p>
        <ul className="aligned-list mt-4">
          <li>Create a Timeline: We will develop a detailed timeline aligned with your university deadlines to keep you organized and on track.</li>
          <li>Application Checklists: We will provide tailored checklists outlining all necessary documents and requirements for each university application.</li>
          <li>Application Guidance: We will assist you in filling out applications accurately, offering insights and suggestions to enhance your submissions.</li>
          <li>Application Review: We will thoroughly review your applications, ensuring all information is accurate, complete, and meets university standards.</li>
          <li>Post-Application Support: We will help with sending test scores, updating applications, and addressing any follow-up requirements from universities.</li>
        </ul>
        <p className="mt-4">We understand the importance of each step and strive to help you submit strong and well-prepared applications.</p>
      </div>
    ),
    'Scholarship Assistance': (
      <div>
        <h3 className="text-2xl font-bold">Scholarship Assistance</h3>
        <p className="mt-4">
          There are many scholarship opportunities available for the students to minimize their education costs but they are highly competitive. There are so many things students can do to improve their chances of getting scholarships. It is essential to clearly communicate your motivation for studying and gaining the scholarships to support your financials.
          Our team will help you to achieve maximum scholarships to minimize your education cost.
        </p>
        <ul className="aligned-list mt-4">
          <li>Identify Opportunities: Creating the list of the scholarships you may apply.</li>
          <li>Document Preparation: Assist you to create the required documents.</li>
          <li>Scholarship Essays: Guide you to write a strong scholarship essay to present your case.</li>
          <li>Application Submission: Help you in timely submission of the scholarship applications.</li>
        </ul>
        <p className="mt-4">We aim to maximize your scholarship opportunities to reduce your educational expenses.</p>
      </div>
    ),
  };

  const imagePaths = {
    'Profile Building': ProfileBuildingImage,
    'University Selection': UniversitySelectionImage,
    'Document Editing': DocumentationImage,
    'Applications Assist': ApplicationsAssistImage,
    'Scholarship Assistance': ScholarshipAssistanceImage,
  };

  const iconPaths = {
    'Profile Building': {
      active: ProfileBuildingActiveIcon,
      default: ProfileBuildingDefaultIcon,
    },
    'University Selection': {
      active: UniversitySelectionActiveIcon,
      default: UniversitySelectionDefaultIcon,
    },
    'Document Editing': {
      active: DocumentationActiveIcon,
      default: DocumentationDefaultIcon,
    },
    'Applications Assist': {
      active: ApplicationsAssistActiveIcon,
      default: ApplicationsAssistDefaultIcon,
    },
    'Scholarship Assistance': {
      active: ScholarshipAssistanceActiveIcon,
      default: ScholarshipAssistanceDefaultIcon,
    },
  };

  useEffect(() => {
    // Preload images when the component mounts
    const preloadImages = () => {
      Object.values(imagePaths).forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();
  }, []); 

  return (
    <div className='w-full'>
      <StudentsResult />

      <div className="bg-white text-gray-800 p-8">
        <h2 className="text-center md:text-5xl mt-4 font-bold work-text mb-8">
          How <span className="text-orange-500">We</span> Work?
        </h2>
        <div className="flex icons justify-around items-center border-b border-gray-300 pb-4">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`text-center p-4 ${activeSection === section ? 'border-b-4 border-orange-500' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              <img
                src={activeSection === section ? iconPaths[section].active : iconPaths[section].default}
                alt={section}
                className="h-12 w-12 mx-auto"
              />
              <p className="mt-2">{section}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white text-gray-800 image-content p-8 flex mx-8">
        <img
          src={imagePaths[activeSection]}
          alt={activeSection}
          className="h-86 w-96 mr-8 section-image" // Increased size of the image
        />
        <div className='section-content'>
          {sections[activeSection]}
          <div className="mt-4 flex space-x-4">
            <button 
              className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md flex items-center"
              onClick={() => navigate('/book-a-session')}  // Use navigate instead of history.push
            >
              Book A Session
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
