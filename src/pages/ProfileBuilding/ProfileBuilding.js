import React,{useState} from 'react';
import './ProfileBuilding.css';
import BannerImg from "../../assets/Profile-building/Profile Building Banner 1.png"
import Img1 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_AboutProfileBuilding.PNG"

import Img2 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_CollegeRoadMap.PNG"

import Img3 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_HSCourseGuidance.PNG"

import Img4 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_ProfileAssessment.PNG"
import Img5 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_ProgressTracking.PNG"
import Img6 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_QaurterlyPlanning.PNG"
import Testimonial from '../../components/Testimonials/Testinomials';




const testimonials = [
  {
    text: "Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers."
  },
  // Add more testimonials here if needed
];

const ProfileBuilding = () => {
    const [activeTab, setActiveTab] = useState('Undergraduate');

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const content = {
        Undergraduate: [
          { grade: 'Grade 9', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
          { grade: 'Grade 10', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
          { grade: 'Grade 11', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
          { grade: 'Grade 12', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
        ],
        Graduate: [
          { grade: 'Graduate 1', description: 'Graduate program details for student and family.' },
          { grade: 'Graduate 2', description: 'Graduate program details for student and family.' },
          { grade: 'Graduate 3', description: 'Graduate program details for student and family.' },
          { grade: 'Graduate 4', description: 'Graduate program details for student and family.' },
        ],
        'Post Graduate': [
          { grade: 'Post Graduate 1', description: 'Post Graduate program details for student and family.' },
          { grade: 'Post Graduate 2', description: 'Post Graduate program details for student and family.' },
          { grade: 'Post Graduate 3', description: 'Post Graduate program details for student and family.' },
          { grade: 'Post Graduate 4', description: 'Post Graduate program details for student and family.' },
        ],
        MBA: [
          { grade: 'MBA 1', description: 'MBA program details for student and family.' },
          { grade: 'MBA 2', description: 'MBA program details for student and family.' },
          { grade: 'MBA 3', description: 'MBA program details for student and family.' },
          { grade: 'MBA 4', description: 'MBA program details for student and family.' },
        ],
      };
    
      
  return (
    <>
    <div className='overflow-hidden'>
     
    <div className="relative w-full  overflow-hidden z-0">
                <img src={BannerImg} alt="Hero Banner" className="absolute w-full  object-cover hero-image" />
                <div className="relative mx-auto py-24 px-6 text-center z-10 hero-content">
                    <h1 id="" className="text-5xl text-orange font-bold">
                    Profile Building
                    </h1>
                    
                    <div id='subheading' className="mt-6 text-xl w-1/2 ">
                        <span className="block">From the Ivy League to Stanford, MIT and many more... 
                        Crimson helps students reach their ultimate college admissions goals.</span>
                    </div>
                    <button
                        id=''
                        className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold"
                        onClick=""
                    >
                        SPEAK WITH AN ADVISOR
                    </button>
                </div>
            </div>

   
      <div className="relative bg-gray-200 py-16 px-4 mt-8 w-full">
        <h2 className="text-5xl font-bold text-center text-gray-800">About <span className="text-orange-600">Profile Building</span></h2>
        <div className="relative flex flex-row mt-8">
     
          <img src={Img2} alt="Profile 3" className=" section-imagesleft  h-auto" />
         </div>
        <p className=" text-gray-700 text-left section-textright max-w-2xl mx-auto">
          Rise is an intensive skills development and profile-building program for students aged 11-14, designed to cultivate the abilities and experiences your child needs to be successful in high school, university, and beyond.
          <br/><br/>
          We equip our students to discover their best-fit extracurriculars, define their passions, and develop academic and soft skills—all with an eye towards winning admission to a top university.
        </p>
      </div>
    </div>
  
  





    <div className="w-full p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">
          What we <span className="text-orange-600">Do?</span>
        </h1>
      </div>

      {/* Accelerate Academics Section */}
      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 p-4">
        <div className="black-square"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Accelerate Academics</h2>
          <p className="text-gray-700 text-md mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc profile-list list-inside  text-gray-700">
            <li>Your current grades/test scores – filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition – we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
        <div className="p-4 flex flex-wrap">
          <img src={Img3} alt="Image 1" className="images p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full p-4 flex flex-row relative">
        
          <img src={Img2} alt="Image 5" className="images  p-2" />
        </div>
        <div className=" p-4">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Drive Standout Extracurriculars</h2>
          <p className="text-gray-700 text-md mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc profile-list  list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
      </div>
    </div>




    <div className="flex flex-col md:flex-row mb-16 mt-4">
        <div className="md:w-1/2 p-4">
        <div className="black-square"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Accelerate Academics</h2>
          <p className="text-gray-700 text-md mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc  profile-list  list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
        <div className=" p-4 flex flex-wrap">
          <img src={Img4} alt="Image 1" className="images p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col md:flex-row mt-4">
        <div className=" p-4 flex flex-wrap relative">
    
          <img src={Img5} alt="Image 5" className="images p-2" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Drive Standout Extracurriculars</h2>
          <p className="text-gray-700 text-md mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc profile-list  list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
      </div>




      <div className="flex flex-col md:flex-row mb-16 mt-4">
        <div className="md:w-1/2 p-4">
        <div className="black-square"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Accelerate Academics</h2>
          <p className="text-gray-700 text-md mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc profile-list list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
        <div className=" p-4 flex flex-wrap">
          <img src={Img6} alt="Image 1" className="images p-2" />
             </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col md:flex-row mt-4">
        <div className=" p-4 flex flex-wrap relative">

          <img src={Img1} alt="Profile 2" className="images h-auto" />
  
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Drive Standout Extracurriculars</h2>
          <p className="text-gray-700 text-md mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc profile-list  list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
      </div>





      <div className="w-full p-8">
     
      <div className="text-center mb-8">
        <button className="bg-orange-600 text-white py-2 px-4 rounded-full mb-4">Chat With US</button>
        <h1 className="text-3xl font-bold text-gray-800">
          Discover <span className="text-orange-600">Profile Building</span>
        </h1>
      </div>

     
      <div className="flex justify-center mb-8">
        {['Undergraduate', 'Graduate', 'Post Graduate', 'MBA'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-4 ${
              activeTab === tab ? 'border-orange-600 text-orange-600' : 'border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {content[activeTab].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold text-orange-600 mb-2">{item.grade}</h2>
            <p className="text-gray-700 mb-4">
              {item.description}
            </p>
            <a href="#" className="text-orange-600 font-bold">Learn More</a>
          </div>
        ))}
      </div>
    </div>
    
  <Testimonial/>


  <div className="relative w-full max-w-xl mx-auto text-center">
    <div className='flex flex-row'>
      <h2 className="text-5xl font-bold mb-8">
        What <span className="text-orange-500 ">Parents</span> Say
      </h2>
    <div className=''>
      <button onClick={prevSlide} className="arrows w-11 h-11 p-2 ml-4 shadow-sm hover:bg-gray-200">
        <span className="text-orange-500 text-xl">&lt;</span>
      </button>
      <button onClick={nextSlide} className="arrows w-11 h-11 p-2 ml-4 shadow-sm hover:bg-gray-200">
        <span className="text-orange-500 text-xl">&gt;</span>
      </button>
      </div>
      </div>
      <div className="text-lg text-gray-700 text-center mb-8">
        {testimonials[currentIndex].text}
      </div>
      <div className="flex justify-center space-x-2 mb-8">
        {testimonials.map((_, index) => (
          <div key={index} className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}></div>
        ))}
      </div>
     
    </div>

  <div className="ready-section md:w-3/4 mx-auto text-white p-8 rounded-lg flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl md:text-4xl mt-10 font-bold mb-4 z-10">
            Start Your <span className="text-orange-500">Journey</span>
          </h2>
          <p className="mb-4 z-10 mt-5">
            Connect with India's leading study abroad counselors.
          </p>
          <button
            onClick={() => window.location.href = '/book-a-session'}
            className="bg-white mt-5 text-black px-6 py-3 rounded-lg font-bold z-10"
          >
            Connect Now
          </button>
        </div>
    </>
  );
}

export default ProfileBuilding;
