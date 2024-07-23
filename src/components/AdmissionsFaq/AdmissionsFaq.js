import React, { useState } from 'react';
import Faq1 from '../../assets/Homepage/AA_Home_FAQ1.png';
import Faq2 from '../../assets/Homepage/AA_Home_FAQ2.png';
import Faq3 from '../../assets/Homepage/AA_Home_FAQ3.png';

const AdmissionsFaq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: 'How do I choose the right study abroad destination?',
      answer: 'Consider factors such as academic reputation, cost of living, safety, cultural fit, language requirements, available scholarships, and career prospects in different countries to determine the right study abroad destination for you.'
    },
    {
      question: 'How do I finance my studies abroad?',
      answer: 'Financing options include scholarships, grants, part-time jobs, student loans, and financial assistance from family. Research and apply for scholarships specifically designed for international students and explore funding options provided by universities and government agencies.'
    },
    {
      question: 'How do I find suitable accommodation while studying abroad?',
      answer: "Universities often provide on-campus accommodation options, including dormitories or student apartments. Alternatively, you can explore private rentals or shared accommodations. It's advisable to research housing options in advance and consider factors such as cost, location, and safety."
    },
    {
      question: 'How can I ensure the safety and well-being of studying abroad?',
      answer: 'Popular study abroad destinations for Indian students include the United States, United Kingdom, Canada, Australia, Germany, and Singapore. However, the choice of destination depends on individual preferences and career goals.'
    },
    {
      question: 'How do I finance my studies abroad?',
      answer: "Research the safety reputation of your chosen destination and follow any guidelines or recommendations provided by the university or relevant authorities. Stay in touch with the university's international student support services and be aware of emergency procedures."
    },
    {
      question: 'Can I work while studying abroad?',
      answer: " Many countries allow international students to work part-time during their studies, subject to certain restrictions. Check the work regulations of your study destination to determine the opportunities available for international students."
    },
    {
      question: 'How do I apply for a student visa?',
      answer: " Each country has its own student visa application process. Contact the embassy or consulate of your chosen study destination to understand the specific requirements, documents needed, and application procedures for obtaining a student visa."
    }
  ];

  return (
    <div className="main font-sans antialiased bg-white py-8">
      <div className="container questions mx-auto px-4">
        <h2 className="text-5xl main-text font-bold text-center mb-4">
          Got Questions? Find <span className="text-orange">Answers</span> Here
        </h2>
        <div className="flex flex-col md:flex-row mt-4 justify-center z-10 items-start">
          <div className="w-full main-quesns text-xl mt-4 z-10 md:w-1/2">
            <ul className="list-none z-10">
              {questionsAndAnswers.map((item, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="question-text">{item.question}</span>
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="text-red-500 symbol ml-8 font-bold text-lg"
                    >
                      {openQuestionIndex === index ? '-' : '+'}
                    </button>
                  </div>
                  {openQuestionIndex === index && (
                    <p className="mt-2 text-gray-600 answer-text">{item.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="z-0 images md:w-1/2 flex flex-col items-center  md:mt-0">
            <img
              src={Faq1}
              alt="Image 1"
              className="md:w-80 md:mt-16 h-36 object-cover sm:w-4 images1 rounded-md transition-transform transform"
            />
            <img
              src={Faq2}
              alt="Image 2"
              className="w-80 z-10 md:-mt-8 h-36 images2 object-cover rounded-md transition-transform transform"
            />
            <img
              src={Faq3}
              alt="Image 3"
              className="w-80 md:-mt-8 h-36 images3 object-cover rounded-md transition-transform transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsFaq;
