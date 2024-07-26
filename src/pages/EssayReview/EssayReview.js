import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll
import './EssayReview.css';
import FAQSection from '../../components/FaqSection/FaqSection';
import banner from '../../assets/essay-review/Essays Banner 1.png';
import DocumentEditing from '../../assets/UniversityAdmissions/AA_Admissions_DocumentEditing.svg';
import HowWeWork from '../../assets/UniversityAdmissions/AA_Admissions_HowWeWork.svg';
import AdmissionInterview from '../../assets/UniversityAdmissions/AA_Admissions_Interview.png';
import ProfileEvaluation from '../../assets/UniversityAdmissions/AA_Admissions_ProfileEvaluation.svg';
import UniversitySelection from '../../assets/UniversityAdmissions/AA_Admissions_UniversitySelection.svg';
import AdmissionsVisa from '../../assets/UniversityAdmissions/AA_Admissions_Visa.png';
import Img1 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_AboutProfileBuilding.PNG";
import Img2 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_CollegeRoadMap.PNG";
import Img3 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_HSCourseGuidance.PNG";
import Img4 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_ProfileAssessment.PNG";
import Img5 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_ProgressTracking.PNG";
import Img6 from "../../assets/Profile-building/Profile Building Section Image - AA_ProfileBuilding_QaurterlyPlanning.PNG";
import AdmissionsFaq from '../../components/AdmissionsFaq/AdmissionsFaq';

const EssayReview = () => {
    return(
        <div className="relative text-black main">
            <div className="relative w-full h-96 overflow-hidden z-0">
                <img src={banner} alt="Background" className="absolute w-full h-full object-cover hero-image" />
                <div className="relative text-black container mx-auto py-24 px-6 text-center hero-content z-10">
                    <h1 className="text-5xl font-bold">Essay Review</h1>
                    <p className="mt-4 text-2xl">From structure to style, Admit Achievers refines every aspect of your essays to help you achieve your academic goals.</p>
                    <button onClick={() => window.location.href='/book-a-session'} className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold">
                        SPEAK WITH AN ADVISOR
                    </button>
                </div>
            </div>

            <div className="relative container mx-auto z-20 -mt-16">
                <div className="flex flex-wrap justify-center rounded-md gap-0 bg-white shadow-md h-36 main-icons">
                    <Link to="common-app-essay" smooth={true} duration={500} className="link-item flex flex-col items-center h-40 w-40 mt-4 cursor-pointer">
                        <img src={UniversitySelection} alt="University Selection" className="h-16 w-16 mt-2" />
                        <p className="mt-2 text-sm font-semibold text-center">Common App Essay</p>
                    </Link>
                    <Link to="university-sop" smooth={true} duration={500} className="link-item flex flex-col items-center h-40 w-40 mt-4 cursor-pointer">
                        <img src={ProfileEvaluation} alt="Profile Evaluation" className="h-16 w-16 mt-2" />
                        <p className="mt-2 text-sm font-semibold text-center">University SOP</p>
                    </Link>
                    <Link to="visa-sop" smooth={true} duration={500} className="link-item flex flex-col items-center h-40 w-40 mt-4 cursor-pointer">
                        <img src={DocumentEditing} alt="Document Editing" className="h-16 w-16 mt-2" />
                        <p className="mt-2 text-sm font-semibold text-center">Visa SOP</p>
                    </Link>
                    <Link to="personal-statement" smooth={true} duration={500} className="link-item flex flex-col items-center h-40 w-40 mt-4 cursor-pointer">
                        <img src={AdmissionInterview} alt="Interview Preparation" className="h-16 w-16 mt-2" />
                        <p className="mt-2 text-sm font-semibold text-center">Personal Statement</p>
                    </Link>
                    <Link to="scholarship-essay" smooth={true} duration={500} className="link-item flex flex-col items-center h-40 w-40 mt-4 cursor-pointer">
                        <img src={AdmissionsVisa} alt="Visa Assistance" className="h-16 w-16 mt-2" />
                        <p className="mt-2 text-sm font-semibold text-center">Scholarship Essay</p>
                    </Link>
                    <Link to="supplement-essay" smooth={true} duration={500} className="link-item flex flex-col items-center h-40 w-40 mt-4 cursor-pointer">
                        <img src={AdmissionsVisa} alt="Visa Assistance" className="h-16 w-16 mt-2" />
                        <p className="mt-2 text-sm font-semibold text-center">Supplement Essay</p>
                    </Link>
                </div>
            </div>

            {/* Your section components go here */}
            <div id="common-app-essay" className="section-container">
                <div className="text-section1 ml-24 mt-16">
                    <h2 className="section-title-left text-3xl text-left">Common App Essay</h2>
                    <ul className="section-description aligned-list text-xl list-disc list-inside">
                        <li>Topic Selection: Guiding you in choosing a topic that best reflects your experiences and strengths.</li>
                        <li>Content Structuring: Helping you organize your essay for maximum impact.</li>
                        <li>Editing and Feedback: Providing detailed feedback on content, clarity, and style.</li>
                        <li>Polishing: Ensuring your essay is error-free and ready for submission.</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="p-4 flex flex-wrap relative">
                        <img src={Img1} alt="Image 1" className="images p-2" />
                    </div>
                </div>
            </div>

            <div id="university-sop" className="section-container bg-gray-400">
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="p-4 flex flex-wrap relative">
                        <img src={Img2} alt="Image 2" className="images p-2" />
                    </div>
                </div>
                <div className="text-section2 ml-24 mt-16">
                    <h2 className="section-title text-3xl text-left">University SOP</h2>
                    <ul className="section-description aligned-list text-xl list-disc list-inside">
                        <li>Customization: Adapting your SOP to fit the unique requirements of each university.</li>
                        <li>Highlighting Fit: Emphasizing how your goals align with the university’s programs and values.</li>
                        <li>Detailed Feedback: Offering comprehensive reviews to refine your SOP.</li>
                        <li>Final Edits: Ensuring your SOP is polished and tailored for each application.</li>
                    </ul>
                </div>
            </div>

            <div id="visa-sop" className="section-container">
                <div className="text-section1 ml-24 mt-16">
                    <h2 className="section-title-left text-3xl text-left">Visa SOP</h2>
                    <ul className="section-description aligned-list text-xl list-disc list-inside">
                        <li>Purpose Articulation: Clearly explaining your reasons for studying abroad and your plans post-study.</li>
                        <li>Consistency: Ensuring your Visa SOP aligns with your university applications and supporting documents.</li>
                        <li>Professional Tone: Crafting a professional and convincing narrative.</li>
                        <li>Proofreading: Polishing your Visa SOP for clarity, coherence, and correctness.</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="p-4 flex flex-wrap relative">
                        <img src={Img3} alt="Image 3" className="images p-2" />
                    </div>
                </div>
            </div>

            <div id="personal-statement" className="section-container bg-gray-400">
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="p-4 flex flex-wrap relative">
                        <img src={Img4} alt="Image 4" className="images p-2" />
                    </div>
                </div>
                <div className="text-section2 ml-24 mt-16">
                    <h2 className="section-title text-3xl text-left">Personal Statement</h2>
                    <ul className="section-description text-xl aligned-list list-disc list-inside">
                        <li>Storytelling: Assisting you in telling your personal story in a compelling way.</li>
                        <li>Highlighting Achievements: Emphasizing your key accomplishments and experiences.</li>
                        <li>Editing for Impact: Providing feedback to enhance the clarity and impact of your statement.</li>
                        <li>Final Review: Ensuring your personal statement is polished and ready for submission.</li>
                    </ul>
                </div>
            </div>

            <div id="scholarship-essay" className="section-container">
                <div className="text-section1 ml-24 mt-16">
                    <h2 className="section-title-left text-3xl text-left">Scholarship Essay</h2>
                    <ul className="section-description text-xl aligned-list list-disc list-inside">
                        <li>Understanding Criteria: Tailoring your essay to meet the specific criteria of each scholarship.</li>
                        <li>Showcasing Need: Effectively communicating your financial need and personal circumstances.</li>
                        <li>Emphasizing Merit: Highlighting your achievements and qualifications.</li>
                        <li>Final Edits: Ensuring your scholarship essay is compelling and error-free.</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="p-4 flex flex-wrap relative">
                        <img src={Img5} alt="Image 5" className="images p-2" />
                    </div>
                </div>
            </div>

            <div id="supplement-essay" className="section-container bg-gray-400">
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="p-4 flex flex-wrap relative">
                        <img src={Img6} alt="Image 6" className="images p-2" />
                    </div>
                </div>
                <div className="text-section2 ml-24 mt-16">
                    <h2 className="section-title text-3xl text-left">Supplement Essay</h2>
                    <ul className="section-description text-xl list-disc aligned-list list-inside">
                        <li>Answering Prompts: Helping you understand and effectively respond to each prompt.</li>
                        <li>Customization: Tailoring each essay to align with the specific university’s values and programs.</li>
                        <li>Feedback and Edits: Providing detailed feedback and edits to improve your essays.</li>
                        <li>Final Review: Ensuring each supplement essay is polished and ready for submission.</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center py-12 bg-gray-100">
                <h2 className="text-3xl font-bold mb-8">Explore More <span className="text-orange-500">Services</span></h2>
                <div className="flex space-x-8 text-center w-3/4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-orange-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v16m8-16v16M3 8h18m-2-4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Admissions</h3>
                        <p className="text-gray-600 mb-4">Know about how you can study at your dream university almost for free</p>
                        <button onClick={() => window.location.href='/admissions'} className="bg-orange-500 text-white py-2 px-4 rounded">Know More</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-orange-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m-8-8h16m-5-5v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m-8-4v16m-5-5h16" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Profile Building</h3>
                        <p className="text-gray-600 mb-4">Plan of action curated by an expert based on your profile and interests</p>
                        <button onClick={() => window.location.href='/profile-building'} className="bg-orange-500 text-white py-2 px-4 rounded">Know More</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-orange-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h6zm-7 3h2v6H8V8zm5 0h2v6h-2V8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Visa</h3>
                        <p className="text-gray-600 mb-4">Know how to crack the Visa interview and also what you need on D-Day</p>
                        <button onClick={() => window.location.href='/coming-soon'} className="bg-orange-500 text-white py-2 px-4 rounded">Know More</button>
                    </div>
                </div>
            </div>

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

            <AdmissionsFaq />
        </div>
    )
};

export default EssayReview;
