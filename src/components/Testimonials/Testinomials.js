import React, { useState } from 'react';


const testimonials = [
  {
    name: 'Vasudha Gupta',
    course: 'Bachelors in Economics',
    university: 'Michigan State University',
    message: 'I have always dreamed of completing my undergrad degree in the USA. Ruchika Ma’am has been a great help in this journey. She helped me in every step. Starting from selecting which degree to choose to help me to get to the college of my dream. Firstly she shortlisted the colleges according to my requirements and then help me fill the requirements, including the essays. Its been a great help and I’m thankful to her for helping me.',
    image: require('../../assets/Homepage/Testimonials/Vasudha Gupta.jpeg'),
  },
  {
    name: "Saurabh Arora",
    course: "Masters in Business Analytics",
    university: "University of Texas, Austin",
    message: "Admit Achievers is focused on helping students like me reach their dream universities at the minimum possible cost. They know the exact recipe to get you admitted to the best universities for your profile. The counsellors have a ton of experience working in the field, and I've learned not to second guess their ideas. They'll go out of their way to help you out, conduct mock interviews, and prepare you for every plausible scenario. They even have the best editors who are more than proficient at shaping your raw SOPs into winners. Don't think twice before getting them as your consultant.",
    image: require("../../assets/Homepage/Testimonials/Saurabh Arora.jpg")
  },
  {
    name: "Prayas Goyal",
    course: "MS in Civil Engineering (Construction Management)",
    university: "University of Illinois, USA",
    message: "Thank you to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless service I was provided during the entire admission process. They took care of everything right from the beginning, curated specific profiles based on my background, and the university research was impeccable which garnered me multiple offers.",
    image: require("../../assets/Homepage/Testimonials/prayasGoyal.jpg")
  },
  {
    name: "Ashish Batra",
    course: "MBA",
    university: "Schulich School of Business - York University, Canada",
    message: "Admit Achievers provided great service! They led my application towards my Master’s Degree in Canada. They always kept me motivated, shared knowledge, and guided me in every aspect. I believe they are one of the best study abroad consultants available as their skills are highly developed.",
    image: require("../../assets/Homepage/Testimonials/AshishBatra.jpg")
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className='my-16'>
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
  )
}

export default Testimonials;
