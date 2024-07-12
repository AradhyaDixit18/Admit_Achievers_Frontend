import React, { useState } from 'react';
import './FAQSection.css';
import Faq1 from '../../assets/Homepage/AA_Home_FAQ1.png';
import Faq2 from '../../assets/Homepage/AA_Home_FAQ2.png';
import Faq3 from '../../assets/Homepage/AA_Home_FAQ3.png';

const FAQSection = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: 'What is the Riipen experiential learning platform?',
      answer: 'Riipen is a platform that connects educators, students, and employers to facilitate experiential learning opportunities such as internships, co-op programs, and projects.'
    },
    {
      question: 'What makes Riipen the #1 experiential learning platform?',
      answer: 'Riipen is considered the #1 platform due to its extensive network, ease of use, and the high-quality experiential learning opportunities it offers to students and institutions.'
    },
    {
      question: 'What are the benefits of using an experiential learning platform?',
      answer: 'Benefits include hands-on experience, improved employability, enhanced learning outcomes, and stronger connections between students and industry professionals.'
    },
    {
      question: 'What are the benefits of using an experiential admit learning platform?',
      answer: 'An experiential admit learning platform provides students with real-world experiences that can enhance their admissions prospects by demonstrating practical skills and experience.'
    },
    {
      question: 'What are the benefits of using an admit achievers experiential admit learning platform?',
      answer: 'Using this platform helps students achieve better outcomes in their admissions process by providing them with opportunities to gain relevant experience and skills that are highly valued by institutions.'
    }
  ];

  return (
    <div className="main font-sans antialiased bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Got Questions? Find <span className="text-red-500">Answers</span> Here
        </h2>
        <div className="flex ml-32 flex-col md:flex-row mt-4 justify-center items-start">
          <div className="w-full md:w-1/2">
            <ul className="list-none">
              {questionsAndAnswers.map((item, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="question-text">{item.question}</span>
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="text-red-500 ml-8 font-bold text-6xl"
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
          <div className="w-full ml-8 md:w-1/2 md:pl-8 flex flex-col -space-y-4">
            <img
              src={Faq1}
              alt="Image 1"
              className="w-80 h-36 object-cover rounded-md transition-transform transform x"
            />
            <img
              src={Faq2}
              alt="Image 2"
              className="w-80 ml-16 z-10  h-36 object-cover rounded-md transition-transform transform "
            />
            <img
              src={Faq3}
              alt="Image 3"
              className="w-80 h-36 object-cover rounded-md transition-transform transform "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
