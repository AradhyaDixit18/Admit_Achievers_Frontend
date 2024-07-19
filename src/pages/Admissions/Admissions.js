import React from 'react';
import './Admissions.css';
import FAQSection from '../../components/FaqSection/FaqSection';
import banner from '../../assets/UniversityAdmissions/University Admissions Banner 1.png'
import DocumentEditing from '../../assets/UniversityAdmissions/AA_Admissions_DocumentEditing.svg'
import HowWeWork from '../../assets/UniversityAdmissions/AA_Admissions_HowWeWork.svg'
import AdmissionInterview from '../../assets/UniversityAdmissions/AA_Admissions_Interview.png'
import ProfileEvaluation from '../../assets/UniversityAdmissions/AA_Admissions_ProfileEvaluation.svg'
import UniversitySelection from '../../assets/UniversityAdmissions/AA_Admissions_UniversitySelection.svg'
import AdmissionsVisa from '../../assets/UniversityAdmissions/AA_Admissions_Visa.png'



const Admissions = () => {
    const videos = [
        {
          id: 1,
          title: "Piyush Patyal",
          university: "Delhi University - CVS",
          videoUrl: "https://www.youtube.com/embed/your-video-id" // Replace with actual video URL
        },
        {
          id: 2,
          title: "Piyush Patyal",
          university: "Delhi University - CVS",
          videoUrl: "https://www.youtube.com/embed/your-video-id" // Replace with actual video URL
        },
        {
          id: 3,
          title: "Piyush Patyal",
          university: "Delhi University - CVS",
          videoUrl: "https://www.youtube.com/embed/your-video-id" // Replace with actual video URL
        }
      ];
    return (
        <>
         <div className="relative text-black main">
        <div className="relative w-full h-96 overflow-hidden z-0">
          <img src={banner} alt="Background" className="absolute w-full h-full object-cover hero-image" />
          <div className="relative text-black container mx-auto py-24 px-6 text-center hero-content z-10">
            <h1 className="text-5xl font-bold">Universities Admissions Support</h1>
            <p className="mt-4 text-xl">From the Ivy League to Stanford, MIT and many more...<br />Crimson helps students reach their ultimate college admissions goals.</p>
            <button onClick={() => console.log('Button Clicked')} className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold">
              SPEAK WITH AN ADVISOR
            </button>
          </div>
        </div>
        <div className="relative container mx-auto cards-section z-20 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 stats">
            <div className="flex flex-col items-center stat-item">
              <img src={HowWeWork} alt="How We Work" className="h-20" />
              <p className="mt-4 text-md font-semibold">How we work</p>
            </div>
            <div className="flex flex-col items-center stat-item">
              <img src={UniversitySelection} alt="University Selection" className="h-20" />
              <p className="mt-4 text-md font-semibold">University Selection</p>
            </div>
            <div className="flex flex-col items-center stat-item">
              <img src={ProfileEvaluation} alt="Profile Evaluation" className="h-20" />
              <p className="mt-4 text-md font-semibold">Profile Evaluation</p>
            </div>
            <div className="flex flex-col items-center stat-item">
              <img src={DocumentEditing} alt="Document Editing" className="h-20" />
              <p className="mt-4 text-md font-semibold">Document Editing</p>
            </div>
            <div className="flex flex-col items-center stat-item">
              <img src={AdmissionInterview} alt="Interview Preparation" className="h-20" />
              <p className="mt-4 text-md flex  font-semibold w-48 text-center">Interview Preparation</p>
            </div>
            <div className="flex flex-col items-center stat-item">
              <img src={AdmissionsVisa} alt="Visa Assistance" className="h-20" />
              <p className="mt-4 text-md font-semibold">Visa Assistance</p>
            </div>
          </div>
        </div>
            <div className="section-container">
        <div className="text-section">
          <h2 className="section-title text-5xl ml-4 text-left ">How we work </h2>
          <p className="section-description ">As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:</p>
          <ul className="list-disc aligned-list text-left list-inside mt-4">
            <li>Your current grades/test scores — filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition — we consider your admissions chances and encourage you to aim high.</li>
          </ul>
          <button className="custom-button bg-orange-500 text-white   py-2 px-4 rounded mt-4">Custom title</button>
        </div>
        <div className="image-collage">
          <div className="image-bg">
            <img src="/path-to-image-9.jpg" alt="Image 9" className="w-full h-auto" />
            <img src="/path-to-image-10.jpg" alt="Image 10" className="w-full h-auto" />
            <img src="/path-to-image-11.jpg" alt="Image 11" className="w-full h-auto" />
            <img src="/path-to-image-12.jpg" alt="Image 12" className="w-full h-auto" />
          </div>
        </div>
      </div>
        </div>




        <div className="admissions-container">
      <div className="section-container ">
        <div className="image-collage">
          <div className="image-bg">
            <img src="/path-to-image-5.jpg" alt="Image 5" className="w-full h-auto" />
            <img src="/path-to-image-6.jpg" alt="Image 6" className="w-full h-auto" />
            <img src="/path-to-image-7.jpg" alt="Image 7" className="w-full h-auto" />
            <img src="/path-to-image-8.jpg" alt="Image 8" className="w-full h-auto" />
          </div>
        </div>
        <div className="text-section">
          <h2 className="section-title ml-4 text-left text-5xl">University Selection</h2>
          <p className="section-description">As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:</p>
          <ul className="list-disc aligned-list list-inside text-left  mt-4">
            <li>Your current grades/test scores — filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition — we consider your admissions chances and encourage you to aim high.</li>
          </ul>
          <button className="custom-button bg-orange-500 text-white py-2 px-4 rounded mt-4">Custom title</button>
        </div>
      </div>

      <div className="section-container">
        <div className="text-section">
          <h2 className="section-title ml-4 text-left text-5xl">Profile Evaluation</h2>
          <p className="section-description">As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:</p>
          <ul className="list-disc list-inside aligned-list  text-left mb-4">
            <li>Your current grades/test scores — filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition — we consider your admissions chances and encourage you to aim high.</li>
          </ul>
          <button className="custom-button bg-orange-500 text-white py-2 px-4 rounded mt-4">Custom title</button>
        </div>
        <div className="image-collage">
          <div className="image-bg">
            <img src="/path-to-image-9.jpg" alt="Image 9" className="w-full h-auto" />
            <img src="/path-to-image-10.jpg" alt="Image 10" className="w-full h-auto" />
            <img src="/path-to-image-11.jpg" alt="Image 11" className="w-full h-auto" />
            <img src="/path-to-image-12.jpg" alt="Image 12" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
    <div className="section-container">
        <div className="image-collage">
          <div className="image-bg">
            <img src="/path-to-image-5.jpg" alt="Image 5" className="w-full h-auto" />
            <img src="/path-to-image-6.jpg" alt="Image 6" className="w-full h-auto" />
            <img src="/path-to-image-7.jpg" alt="Image 7" className="w-full h-auto" />
            <img src="/path-to-image-8.jpg" alt="Image 8" className="w-full h-auto" />
          </div>
        </div>
        <div className="text-section">
          <h2 className="section-title  ml-4 text-left text-5xl">Document Editing</h2>
          <p className="section-description">As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:</p>
          <ul className="list-disc aligned-list list-inside text-left mt-4">
            <li>Your current grades/test scores — filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition — we consider your admissions chances and encourage you to aim high.</li>
          </ul>
          <button className="custom-button bg-orange-500 text-white py-2 px-4 rounded mt-4">Custom title</button>
        </div>
      </div>

      <div className="section-container ">
        <div className="text-section">
          <h2 className="section-title   ml-4 text-left text-5xl">Interview Preparation</h2>
          <p className="section-description">As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:</p>
          <ul className="list-disc aligned-list list-inside text-left mt-4">
            <li>Your current grades/test scores — filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition — we consider your admissions chances and encourage you to aim high.</li>
          </ul>
          <button className="custom-button bg-orange-500 text-white py-2 px-4 rounded mt-4">Custom title</button>
        </div>
        <div className="image-collage">
          <div className="image-bg">
            <img src="/path-to-image-9.jpg" alt="Image 9" className="w-full h-auto" />
            <img src="/path-to-image-10.jpg" alt="Image 10" className="w-full h-auto" />
            <img src="/path-to-image-11.jpg" alt="Image 11" className="w-full h-auto" />
            <img src="/path-to-image-12.jpg" alt="Image 12" className="w-full h-auto" />
          </div>
        </div>
      </div>





      <div className="custom-container ml-48   text-left">
      <h2 className="text-5xl font-bold mb-4 ml-4 mt-16 ">Visa</h2>
      <p className="mb-4 ml-8 ">
        As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
      </p>
      <ul className="list-disc   aligned-list  text-left mb-4">
        <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
        <li>Your preferred area of study</li>
        <li>Your extracurricular preferences</li>
        <li>Location! Where you want to live and study!</li>
        <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
        <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
        <li>Your current grades/test scores - filling out our will give you a good indication of your.</li>
      </ul>
      <button className="custom-button ml-12">Custom title</button>
    </div>




    <div className="relative text-black mt-8 mb-2">
      <div className="black-background"></div>
      <div className="flex justify-center space-x-4 relative z-10">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-wrapper">
              <iframe 
                src={video.videoUrl} 
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-frame"
              ></iframe>
            </div>
            <div className="text-center text-white bg-gray-800 py-2">
              <p className="text-lg font-semibold">{video.title}</p>
              <p className="text-sm">{video.university}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="pagination-dot active"></div>
        <div className="pagination-dot"></div>
        <div className="pagination-dot"></div>
      </div>
    </div>
    



    <div className="flex flex-col items-center py-12 bg-gray-100">
      <h2 className="text-5xl font-bold mb-8">Explore More <span className="text-orange-500">Services</span></h2>
      <div className="flex space-x-8 text-center w-3/4 ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-orange-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v16m8-16v16M3 8h18m-2-4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Eassy Review</h3>
          <p className="text-gray-600 mb-4">Know about how you can study at your dream university almost for free</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded">Know More</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-orange-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m-8-8h16m-5-5v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m-8-4v16m-5-5h16" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Profile Building</h3>
          <p className="text-gray-600 mb-4">Plan of action curated by an expert based on your profile and interests</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded">Know More</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-orange-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h6zm-7 3h2v6H8V8zm5 0h2v6h-2V8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold  mb-2">Visa</h3>
          <p className="text-gray-600 mb-4">Know how to crack the Visa interview and also what you need on D-Day</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded">Know More</button>
        </div>
      </div>
    </div>

    

    <div className="ready-section  md:w-3/4 mx-auto text-white p-8 rounded-lg flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl md:text-4xl mt-10 font-bold mb-4 z-10">Start Your 
          <span className="text-orange-500"> Journey</span></h2>
          <p className="mb-4 z-10 mt-5">Connect with India's leading study abroad counselors.
          </p>
          <button
            onClick={() => window.location.href='/book-a-session'}
            className="bg-white mt-5 text-black px-6 py-3 rounded-lg font-bold z-10"
          >
            Connect Now
          </button>
        </div>



      <FAQSection/>
        </>
    );
};

export default Admissions;
