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


const questions = [

  {
    question: "What grade is your child in?",
    inputType: "text",
    id: "childGrade",
  },
  {
    question: "What are your child's academic interests?",
    inputType: "text",
    id: "childInterests",
  },
  {
    question: "What extracurricular activities is your child involved in?",
    inputType: "text",
    id: "childActivities",
  },
  {
    question: "What are your child's university goals?",
    inputType: "text",
    id: "childGoals",
  },
  
];

const testimonials = [
  {
    text: "Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers."
  },
  // Add more testimonials here if needed
];

const ProfileBuilding = () => {
    const [activeTab, setActiveTab] = useState('Undergraduate');

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
      setErrors({
        ...errors,
        [e.target.id]: '',
      });
    };
  
    const validateField = (id, value) => {
      if (!value) {
        return 'This field is required';
      }
      return '';
    };
  
    const handleNext = (e) => {
      e.preventDefault();
  
      if (currentStep === 0) {
        const nameError = validateField('childName', formData.childName);
        const emailError = validateField('email', formData.email);
        if (nameError || emailError) {
          setErrors({
            childName: nameError,
            email: emailError,
          });
          return;
        }
      } else {
        const question = questions[currentStep - 1];
        const error = validateField(question.id, formData[question.id]);
        if (error) {
          setErrors({
            [question.id]: error,
          });
          return;
        }
      }
  
      if (currentStep < questions.length) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log('Form submitted', formData);
      }
    };
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };


 

  
    const content = {
      Undergraduate: [
        {
          grade: 'Grade 9',
          description: 'Discovering Your Interests and Setting Foundations In Grade 9, we work with students and their families to explore academic interests and extracurricular activities. Our team helps you identify passions, set initial goals, and choose classes that align with your long-term aspirations. We focus on building a strong foundation for high school success and future college admissions.'
        },
        {
          grade: 'Grade 10',
          description: 'Developing Core Skills and Gaining Experience During Grade 10, we guide you through the process of developing essential academic skills and gaining meaningful experiences. We help you choose advanced courses, engage in leadership roles, and participate in extracurricular activities that reflect your interests and strengths. Our goal is to prepare you for the challenges of higher education and help you build a compelling profile.'
        },
        {
          grade: 'Grade 11',
          description: 'Expanding Achievements and Preparing for the Future In Grade 11, our focus shifts to expanding your achievements and preparing for college applications. We work with you to take on significant projects, pursue internships, and deepen your involvement in extracurricular activities. We also begin preparing for standardized tests and assist in crafting your initial college application strategy.'
        },
        {
          grade: 'Grade 12',
          description: 'Finalizing Your Profile and Completing Applications Grade 12 is a pivotal time for finalizing your college applications. We offer comprehensive support in polishing your achievements, refining your personal statement, and securing strong letters of recommendation. Our team ensures that your application reflects your best self and helps you navigate the final steps of the admissions process.'
        }
      ],
      Graduate: [
        {
          grade: 'Bachelor’s Degree',
          description: 'Building a Strong Academic Foundation As you start your undergraduate journey, we help you establish a solid academic record and explore extracurricular activities that align with your career goals. Our team supports you in selecting relevant coursework, finding opportunities for involvement, and developing skills that will serve you throughout your academic and professional life.'
        },
        {
          grade: 'Research & Internships',
          description: 'Gaining Practical Experience and Building Connections We guide you through the process of securing research opportunities and internships that offer practical experience and professional growth. Our experts help you identify suitable programs, prepare application materials, and make the most of these experiences to build a robust resume and expand your professional network.'
        },
        {
          grade: 'Leadership & Initiatives',
          description: 'Demonstrating Commitment and Making an Impact In this stage, we help you take on leadership roles and start initiatives that showcase your dedication and impact in your field. We work with you to identify opportunities for leadership, develop innovative projects, and make significant contributions to your community or academic environment.'
        },
        {
          grade: 'Application Preparation',
          description: 'Crafting a Standout Graduate School Application We provide detailed guidance for preparing your graduate school applications. This includes crafting a compelling resume, writing persuasive personal statements, and securing strong letters of recommendation. Our goal is to help you present a well-rounded application that highlights your qualifications and readiness for advanced studies.'
        }
      ],
      'Post Graduate': [
        {
          grade: 'Early Career',
          description: 'Strengthening Your Professional Profile As you begin your professional career, we assist you in building a strong profile through relevant work experience and professional development opportunities. We help you set career goals, find job opportunities, and develop strategies for advancing in your chosen field.'
        },
        {
          grade: 'Specialization & Certifications',
          description: 'Advancing Your Expertise and Career Opportunities We guide you in pursuing certifications and specializations that enhance your expertise and open new career opportunities. Our team helps you identify valuable certifications, prepare for exams, and integrate these credentials into your professional profile.'
        },
        {
          grade: 'Networking & Growth',
          description: 'Expanding Your Professional Network We support you in expanding your professional network through industry events, seminars, and professional organizations. Our team helps you connect with mentors, peers, and industry leaders to foster relationships that will benefit your career growth.'
        },
        {
          grade: 'Advanced Applications',
          description: 'Preparing for Further Career Opportunities In this stage, we focus on preparing you for advanced career opportunities or further education. We offer guidance on applications for specialized roles, advanced degrees, or significant career moves, ensuring you are well-positioned for success in your future endeavors.'
        }
      ],
      MBA: [
        {
          grade: 'Pre-MBA Preparation',
          description: 'Building a Strong Foundation for MBA Success Before starting your MBA program, we help you strengthen your professional background with impactful work experiences and leadership roles. We work with you to set clear goals, build a compelling resume, and prepare for the challenges of advanced business education.'
        },
        {
          grade: 'GMAT/GRE & Application',
          description: 'Preparing for GMAT/GRE Exams and Crafting Your Application We offer comprehensive support for GMAT/GRE preparation and application development. Our team provides resources, practice materials, and strategies for acing the tests, and assists you in crafting a standout application with strong essays and recommendations.'
        },
        {
          grade: 'Professional Experience',
          description: 'Showcasing Your Achievements and Leadership Skills We help you highlight your professional achievements and leadership experiences in your MBA application. Our focus is on presenting your accomplishments in a way that demonstrates your readiness for advanced business studies and future leadership roles.'
        },
        {
          grade: 'Program & Career Goals',
          description: 'Aligning Your Goals with the MBA Program We work with you to articulate your career goals and how the MBA program aligns with your aspirations. Our team helps you define your objectives, connect your goals with the program’s strengths, and create a compelling vision for your future success.'
        }
      ]
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
                        <span className="block">From Elite Universities to top programs around the globe, Admit Achievers helps students build a standout profile for their top admission goals</span>
                    </div>
                    <button onClick={() => window.location.href='/book-a-session'} className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold">
                        SPEAK WITH AN ADVISOR
                    </button>
                </div>
            </div>

   
            <div className="relative bg-gray-200 overflow-hidden py-16 px-4 mt-8 w-full">
  <h2 className="text-5xl font-bold text-center text-gray-800">
    About <span className="text-orange-600">Profile Building</span>
  </h2>
  <div className="relative flex flex-row mt-8">
    <img src={Img2} alt="Profile 3" className="profile-image h-auto" />
  </div>
  <div className="text-gray-700 text-left section-textright max-w-2xl mx-auto  ">
    <p>
      At Admit Achievers, we provide focused profile-building services to help you excel in college admissions. Our expert team works with you to enhance your personal, academic, and extracurricular achievements for a standout application.
    </p>
    <br/>
    <p className="font-bold">Get an Extra Edge with Admit Achievers:</p>
    <ul className="list-none mt-2">
      <li className="mt-2">
        <span className="font-bold">Standout:</span> Catch the attention of admissions officers.
      </li>
      <li className="mt-2">
        <span className="font-bold">Showcase Abilities:</span> Highlight your academic and extracurricular strengths.
      </li>
      <li className="mt-2">
        <span className="font-bold">Demonstrate Personality:</span> Present yourself as a well-rounded individual.
      </li>
      <li className="mt-2">
        <span className="font-bold">Show Passion:</span> Display commitment to your interests.
      </li>
      <li className="mt-2">
        <span className="font-bold">Gain Growth:</span> Develop skills and experiences for college success.
      </li>
      <li className="mt-2">
        <span className="font-bold">Align with Values:</span> Tailor your profile to fit college values.
      </li>
      <li className="mt-2">
        <span className="font-bold">Access Scholarships:</span> Boost your chances for financial aid.
      </li>
    </ul>
  </div>
</div>

    </div>
  
  





    <div className="w-full overflow-hidden p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">
          What we <span className="text-orange-600">Do?</span>
        </h1>
      </div>

      {/* Accelerate Academics Section */}
      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 ml-24 p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Profile Assessment</h2>
          <p className="text-gray-700 text-2xl mb-4">
          We begin by assessing the student’s profile in detail. This involves understanding their interests, existing skills, academic achievements, and their desired program, countries, and universities for higher education. This assessment helps us gain insights into the student’s strengths, areas of improvement, and overall profile suitability for the desired educational path.  </p>
         
        </div>
        <div className="p-4 flex flex-wrap">
          <img src={Img3} alt="Image 1" className="images p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex bg-gray-400 backgrounds flex-col md:flex-row ">
        <div className=" p-4 flex flex-wrap relative">
    
          <img src={Img2} alt="Image 5" className="images p-2" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Quarterly Planning</h2>
          <p className="text-gray-700 text-2xl mb-4">
          Based on the profile assessment, we provide a quarterly plan of activities and milestones. This plan outlines specific goals and tasks for each quarter to help the student build a strong profile over time. It includes suggestions for academic, extracurricular, and personal development activities that align with the student’s interests and goals. </p>
          
        </div>
      </div>
    </div>




    <div className="flex flex-col md:flex-row mb-16 mt-4">
        <div className="md:w-1/2 ml-36 p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Progress Tracking</h2>
          <p className="text-gray-700 text-xl mb-4">
          We continuously track the student’s progress and performance. Regular monitoring allows us to evaluate the effectiveness of the profile building strategy and make necessary adjustments. We provide feedback and guidance to help the student stay on track and make improvements in areas that require attention.  </p>
         
        </div>
        <div className=" p-4 flex flex-wrap">
          <img src={Img4} alt="Image 1" className="images p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col bg-gray-400 md:flex-row mt-4">
        <div className=" p-4 flex flex-wrap relative">
    
          <img src={Img5} alt="Image 5" className="images p-2" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">High School Course Guidance</h2>
          <p className="text-gray-700 text-xl mb-4">
          We provide guidance to students on selecting appropriate high school courses that align with their interests and future aspirations. We consider the academic requirements and prerequisites of the desired colleges and universities to ensure that the student takes relevant courses that strengthen their profile for admission. </p>
          
        </div>
      </div>




      <div className="flex flex-col md:flex-row mb-16 mt-4">
        <div className="md:w-1/2 ml-24 p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Roadmap for College Applications</h2>
          <p className="text-gray-700 text-xl mb-4">
          We work with the student to create a roadmap for their college applications. This roadmap includes a detailed timeline that outlines key application milestones, such as researching universities, preparing application materials (essays, letters of recommendation, etc.), and submitting applications. The timeline ensures that the student stays organized and completes each application requirement within the specified time frame.</p>
         
        </div>
        <div className=" p-4 flex flex-wrap">
          <img src={Img6} alt="Image 1" className="images p-2" />
             </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      





      <div className="w-full overflow-hidden">
     
      <div className="text-center mb-8">
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

     
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-8 mb-16">
        {content[activeTab].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold text-orange-600 mb-2">{item.grade}</h2>
            <p className="text-gray-700 mb-4">
              {item.description}
            </p>
            </div>
        ))}
      </div>
    </div>
    




   

  <Testimonial/>


  

  <div className="ready-section w-full mx-auto text-white p-8 flex flex-col items-center text-center mb-10">
                <h2 className="text-2xl md:text-4xl mt-10 font-bold mb-4 z-10">Start Your <span className="text-orange-500">Journey</span></h2>
                <p className="mb-4 z-10 mt-5">Connect with India's leading study abroad counselors.</p>
                <button
                    onClick={() => window.location.href='/bookasession'}
                    className="bg-white mt-5 text-black px-6 py-3 rounded-lg font-bold z-10"
                >
                    Connect Now
                </button>
            </div>
    </>
  );
}

export default ProfileBuilding;
