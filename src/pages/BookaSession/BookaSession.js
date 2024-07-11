import React from 'react';
import './BookaSession.css';
import HeroBanner from "../../assets/Book-a-session/AA_BookASession_PageBanner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StudentsResult } from '../../components/StudentsResult/StudentsResult';
import ApplicationVisa from "../../assets/Book-a-session/AA_BookASession_Doubts_ApplicationsVisa.png";
import CountrySelection from "../../assets/Book-a-session/AA_BookASession_Doubts_CountrySelection.png";
import DoubtsPreparation from "../../assets/Book-a-session/AA_BookASession_Doubts_Preparation.png";
import DoubtsVisa from "../../assets/Book-a-session/AA_BookASession_Doubts_Visa.png";
import SessionBenefits from "../../assets/Book-a-session/AA_BookASession_SessionBenefits.jpeg";
import Testimonial from '../../components/Testimonials/Testinomials';

const Card = ({ title, description, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
    <div className="mb-4">
      <img src={icon} alt={title} className="h-40 w-40"/> 
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </div>
);

const BookaSession = () => {
  return (
    <>
      <div className=' overflow-hidden'>
        <div className="text-white main">
          <div className="z-0">
            <img src={HeroBanner} alt="" className="absolute w-full lg:h-96 object-cover" />
            <div className="relative container mx-auto py-24 px-6 text-center z-10">
              <h1 className="md:text-5xl  md:mt-8 mt-4  sm:text-3xl font-extrabold text-white">
                Want to Study in the Best School of the World?
              </h1>
              <h2 className=" md:text-2xl mt-4 md:mt-8 sm:text-xs text-white px-6 py-3 text-md ">
                Learn how we can increase your admit chances by 300%
              </h2>
              <div className="flex mt-4 lg:mt-4 justify-center items-center z-2">
                <div className="bg-white shadow-md text-black text-md p-8 z-2  shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 md:pr-8">
                    <p className="mb-4 font-semibold">Book a Strategy Session to Discuss:</p>
                    <p className="mb-4">1. Strategies to Increase your chances of admission.</p>
                    <p className="mb-4">2. Realistic Score Expectations</p>
                    <p className="mb-4">3. Evaluation of Your Profile's Strengths and Areas for Improvement</p>
                    <p className="mb-4">4. Overview of Best-fit Schools you can Target</p>
                  </div>
                  <div className="hidden md:block w-px bg-gray-300"></div>
                  <div className="w-full md:w-3/4 md:pl-8 mt-8 md:mt-0">
                    <h2 className="text-orange-500 text-xl font-semibold mb-4">Schedule Virtual Counseling by Appointment</h2>
                    <form>
                      <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                      </div>
                      <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone No" />
                      </div>
                      <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preference">Counseling Preference*</label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="preference">
                          <option>Phone Call</option>
                          <option>Video Call</option>
                        </select>
                      </div>
                      <div className="mb-4 flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Preferred Date*</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Preferred Time*</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="time" type="time" />
                        </div>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Book a Free Session
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <h2 className="  text-black font-bold mt-16 md:text-4xl   mb-8">
                What to expect <span className="text-orange-500">from our advisory</span> services? 
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center ml-24 mt-16">
                <div className="w-full md:w-2/3">
                  <ul className="list-none space-y-4 text-black text-left">
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="tick w-5 h-5 mr-2" />
                      <span className="font-semibold">Stay Updated on University Admissions with Expert Help</span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="tick w-5 h-5 mr-2" />
                      <span className="font-semibold"> Receive guidance from seasoned professionals</span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="tick w-5 h-5 mr-2" />
                      <span className="font-semibold">Benefit from our expert counselors' services</span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className=" w-5 h-5 mr-2" />
                      <span className="font-semibold">Connect with our international education experts from home</span>
                    </li>
                  </ul>
                </div>
                <div className=" md:w-1/3  -ml-48 flex justify-center items-center mt-8 md:mt-0">
                  <img className="rounded-lg  " src={SessionBenefits} alt="Counselling session" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50 py-12">
          <div className="absolute inset-0 bg-pattern bg-cover bg-center opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className=" font-extrabold text-center md:text-4xl -ml-8 mb-16">
              Get Your <span className="text-orange-500">Questions</span> Answered by Our <span className="text-orange-500">Expert Counselors</span>
            </h2>
            <div className="grid grid-cols-1 cards ml-32 md:grid-cols-2 gap-8">
              <Card 
                title="Country course and university selection" 
                description="" 
                icon={CountrySelection}
              />
              <Card 
                title="International admissions and test preparation" 
                description="" 
                icon={DoubtsPreparation}
              />
              <Card 
                title="University Application and Documents Editing" 
                description="" 
                icon={ApplicationVisa}
              />
              <Card 
                title="Student Visa Application and Scholarships" 
                description="" 
                icon={DoubtsVisa}
              />
            </div>
          </div>
        </div>

        <StudentsResult />
        <Testimonial/>
      </div>
    </>
  );
}

export default BookaSession;
