import React, { useState } from 'react';
import './TestimonialSlider.css';
import { FaGooglePlay, FaYoutube, FaInstagram, FaUsers } from 'react-icons/fa';


const testimonials = [
  {
    name: 'PRAYAS GOYALM.S',
    course: 'Civil Engineering, Construction Management',
    university: 'University of Illinois at Urbana-Champaign, USA',
    message: 'Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers.',
    image: '/path/to/image', // Use the correct path for the image
  },
  {
    name: 'acas GOYALM.S',
    course: 'Civil Engineering, Construction Management',
    university: 'University of Illinois at Urbana-Champaign, USA',
    message: 'Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers.',
    image: '/path/to/image', // Use the correct path for the image
  }
  // Add more testimonials if needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 rounded-md mb-8">
        <h2 className="text-3xl font-bold mb-4">Binge watch everything study abroad</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">Watch Videos</button>
      </div>
      <div className="mx-auto py-8 shadow-inner">
        <div>
          <h2 className="text-2xl font-bold mb-4 test-head inline">What Students are saying about <span className="text-orange-500">Admit Achievers</span></h2>
          <div className="ml-36 mb-4 inline">
            <button
              onClick={handlePrev}
              className="arrows w-11 h-11 p-2 ml-4 shadow-sm hover:bg-gray-200"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="arrows w-11 h-11 p-2 ml-4 shadow-lg hover:bg-gray-200"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="testimonial flex ml-md space-x-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-40 h-40 mr-16 object-cover rounded-full"
            />
            <div className="image-bottom-text"></div>
            <div className="image-side-text">
              <p className="text-gray-600 mb-4">{testimonials[currentIndex].message}</p>
              <p className="text-gray-500">{testimonials[currentIndex].name} - {testimonials[currentIndex].course} {testimonials[currentIndex].university}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-600 animate-pulse' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>




      <div className="min-h-screen bg-gray-100 p-8">
      {/* Section 1 */}
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center mb-8 relative">
        <h2 className="text-4xl font-bold mb-4">Ready to take the <span className="text-orange-500">Leap</span>?</h2>
        <p className="mb-4">Connect with India's finest counsellors and biggest study abroad community.</p>
        <button className="bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200 animate-pulse">Talk To Counsellor</button>
        <div className="absolute mt-4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/path/to/image1.png" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-white" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/path/to/image2.png" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-white" />
        </div>
        <div className="absolute mt-4  right-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/path/to/image3.png" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-white" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="community-container bg-white p-8 rounded-lg shadow-lg text-center mb-8">
      <h3 className="text-2xl font-bold mb-4">
        Join India's <span className="text-orange-500">largest</span> communities
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="community-card bg-light-green p-4 flex items-center rounded-lg shadow-md">
          <FaGooglePlay className="community-icon text-4xl mr-4 text-multicolor" />
          <p className="community-text text-multicolor">1M+<br/>Downloads</p>
        </div>
        <div className="community-card bg-light-red p-4 flex items-center rounded-lg shadow-md">
          <FaYoutube className="community-icon text-4xl mr-4 text-dark-red" />
          <p className="community-text text-dark-red">100k+<br/>Subscribers</p>
        </div>
        <div className="community-card bg-light-purple p-4 flex items-center rounded-lg shadow-md">
          <FaInstagram className="community-icon text-4xl mr-4 text-multicolor" />
          <p className="community-text text-multicolor">200k+<br/>Instagram</p>
        </div>
        <div className="community-card bg-light-orange p-4 flex items-center rounded-lg shadow-md">
          <FaUsers className="community-icon text-4xl mr-4 text-dark-orange" />
          <p className="community-text text-dark-orange">100k+<br/>Community</p>
        </div>
      </div>
    </div>

      {/* Section 3 */}
      <div className="relative mb-8">
        <div className="bg-white p-8 rounded-t-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Latest in <span className="text-orange-500">Study Abroad</span></h3>
         
        </div>
        <div className="half-black-container p-8 text-center rounded-b-lg">
        <div className="flex justify-between items-start relative z-10">
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden w-1/3 m-2 relative">
              <img src="/path/to/blog-image1.png" alt="Blog 1" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white relative z-10">
                <div className="absolute top-0 left-0 h-1 w-full bg-red-500"></div>
                <h4 className="font-bold">Blog Title</h4>
                <p>DD/MMMM/YYYY</p>
                <div className="absolute bottom-0 right-0 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden w-1/3 m-2 relative">
              <img src="/path/to/blog-image2.png" alt="Blog 2" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white relative z-10">
                <div className="absolute top-0 left-0 h-1 w-full bg-red-500"></div>
                <h4 className="font-bold">Blog Title</h4>
                <p>DD/MMMM/YYYY</p>
                <div className="absolute bottom-0 right-0 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden w-1/3 m-2 relative">
              <img src="/path/to/blog-image3.png" alt="Blog 3" className="w-full h-40 object-cover" />
              <div className="p-4 bg-white relative z-10">
                <div className="absolute top-0 left-0 h-1 w-full bg-red-500"></div>
                <h4 className="font-bold">Blog Title</h4>
                <p>DD/MMMM/YYYY</p>
                <div className="absolute bottom-0 right-0 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600">View All Blogs</button>
        </div>
      </div>
    </div>







    </>
  );
};

export default TestimonialSlider;
