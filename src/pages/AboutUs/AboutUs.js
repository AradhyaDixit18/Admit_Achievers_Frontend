import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import AA_Home_UniversityAdmits_FIT from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_FIT.png';
import AA_Home_UniversityAdmits_HEC from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_HEC.png';
import AA_Home_UniversityAdmits_LBS from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_LBS.png';
import AA_Home_UniversityAdmits_Mehnheim from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_Mehnheim.png';
import AA_Home_UniversityAdmits_MelbourneUniversity from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_MelbourneUniversity.png';
import WhoWeAre from "../../assets/about-us/AA_AboutUs.jpg";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const universities = [
    { name: 'FIT University', image: AA_Home_UniversityAdmits_FIT },
    { name: 'HEC University', image: AA_Home_UniversityAdmits_HEC },
    { name: 'LBS University', image: AA_Home_UniversityAdmits_LBS },
    { name: 'Mehnheim University', image: AA_Home_UniversityAdmits_Mehnheim },
    { name: 'Melbourne University', image: AA_Home_UniversityAdmits_MelbourneUniversity }
  ];

  const cards = [
    <>
      QUALITY <span className="text-333333">&amp;</span> UNIQUENESS<br />
      <span className="text-333333">over</span><br />QUANTITY
    </>,
    <>
      PASSION<br /><span className="text-333333">&amp;</span><br />CURIOSITY
    </>,
    <>
      PERSISTENCE<br /><span className="text-333333">&amp;</span><br />PERSEVERANCE
    </>,
    <span className="text-333333">
    <>INNOVATION</></span>,
    <>
      TRUST<br /><span className="text-333333">TEAMWORK</span><br /><span className="">TRANSPARENCY</span>
    </>
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <div className="about-us-container">
        <section className="top-section bg-white text-left flex justify-center items-center h-64">
          <div className="text-container">
            <h1 className="text-orange-500 md:text-5xl  font-bold leading-snug">
            We believe to realize education<br />
            aspirations through the alchemy<br />
            of empathy and holistic approach.
            </h1>
          </div>
        </section>
        <section className="top-section bg-grey text-left flex justify-center items-center h-64">
          <div className="text-container">
            <h1 className="text-white md:text-5xl font-bold leading-snug">
            We believe value-driven outcomes<br />
            for quality engagement,<br />
            less distraction, and zero time-leak.
            </h1>
          </div>
        </section>
        <section className="bg-white text-center py-12 px-4">
          <h2 className="text-333333 md:text-4xl font-bold leading-tight">
            We are <span className="text-orange-500">Admit Achievers</span>
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            We, at Admit Achievers, are passionate about <span className="font-bold">POSITIVE REALISM</span> where we develop a <span className="font-bold">FOCUSED BLUEPRINT</span> to realize your study abroad aspirations.
          </p>
          <div className="video-container w-full mt-8">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/_HDi9Ek7UfI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <div className="p-6 bg-white">
        <div className="bg-white p-6">
          <div className="flex flex-col md:flex-row ml-36">
            <div className="md:w-1/2 flex justify-center items-center">
              <img
                src={WhoWeAre}
                alt="Person with books"
                className="rounded-lg object-cover max-h-[500px] w-full"
              />
            </div>
            <div className="md:w-3/4 md:pl-6 mt-6 ml-16 md:mt-0">
              <div className="mb-4 md:w-3/4">
                <h1 className="text-xl font-bold">WHO WE <span className="text-orange-600">ARE</span></h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Born in 2020, we are a bespoke study abroad overseas education consultants offering customized services and solutions tailored to the specific needs and requirements of each student.
                  We provide personalized advice and guidance to students who are looking to study overseas, taking into account their academic background, career aspirations, financial situation, and other individual factors be it macro or micro.
                </p>
              </div>
              <div className="mb-4 md:w-3/4">
                <h2 className="text-xl font-bold text-orange-600">OUR <span className="text-333333">STUDENTS</span> COME FIRST</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We identify aspirations as a journey that begins with creating a Document Twin of the aspirant and focusing on the Profile Building thereby resulting in a Dynamic Self Managed Process distinctive to each aspirant. Our services target at achieving successful admissions to global universities for the aspirants.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <h2 className="text-3xl card-heading1 font-bold">
              At <span className="text-orange-600">Admit Achievers</span> our core values
            </h2>
            
            <h2 className="text-3xl card-heading2 font-bold">
              guide our 
              <span className="text-orange-600"> vision to realize your aspirations</span>
            </h2>
            <div className="flex w-3/4 ml-36 flex-wrap items-center justify-center mt-8 space-y-4 md:space-y-0">
              {cards.map((card, index) => (
                <div key={index} className="w-full md:w-1/3 p-4 box-border">
                  <div className="bg-white shadow-lg text-md p-6 rounded-lg text-center h-48 flex items-center justify-center">
                    <p className="text-lg font-semibold text-orange-500">{card}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <section className="accreditations-section overflow-hidden bg-white text-center py-12">
          <h2 className="text-black text-3xl font-bold leading-tight mb-4">
            Placement<span className="text-orange-500"> Highlights</span>
          </h2>
          <p className="text-gray-700 uppercase text-lg mb-8">
            Our students have received offers from the globally recognized and reputed universities
          </p>
          <div className="university-container mt-8">
            <div className="university-slider flex space-x-8">
              {universities.map((university, index) => (
                <div key={index} className="university-item flex-shrink-0">
                  <img src={university.image} alt={university.name} className="university-logo mx-auto" />
                  <p className="university-text">{university.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="ready-section w-full md:w-3/4 mx-auto text-white p-8 rounded-lg flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl md:text-4xl mt-10 font-bold mb-4 z-10">Ready to take the <span className="text-orange-500">Leap</span>?</h2>
        <p className="mb-4 z-10 mt-5">Connect with India's finest counsellors and biggest study abroad community.</p>
        <button className="bg-white mt-5 text-333333 px-6 py-3 rounded-lg font-bold z-10">
          Connect Now
        </button>
      </div>
    </>
  );
};

export default AboutUs;
