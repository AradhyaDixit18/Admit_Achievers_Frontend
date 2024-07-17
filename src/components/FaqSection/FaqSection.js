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
      question: 'Why should I consider studying abroad?',
      answer: 'Studying abroad offers numerous benefits, including exposure to different cultures, a chance to enhance language skills, global networking opportunities, access to high-quality education, and personal growth.'
    },
    {
      question: 'How do I choose the right study abroad destination?',
      answer: 'Consider factors such as academic reputation, cost of living, safety, cultural fit, language requirements, available scholarships, and career prospects in different countries to determine the right study abroad destination for you.'
    },
    {
      question: 'What are the language requirements for studying abroad?',
      answer: "Language requirements vary depending on the country and the language of instruction. Some countries may require proficiency in the local language, while others offer programs taught in English. It's important to check the language requirements of the specific university or program you are interested in."
    },
    {
      question: 'What are the popular study abroad destinations for Indian students?',
      answer: 'Popular study abroad destinations for Indian students include the United States, United Kingdom, Canada, Australia, Germany, and Singapore. However, the choice of destination depends on individual preferences and career goals.'
    },
    {
      question: 'How do I finance my studies abroad?',
      answer: 'Financing options include scholarships, grants, part-time jobs, student loans, and financial assistance from family. Research and apply for scholarships specifically designed for international students and explore funding options provided by universities and government agencies'
    }
  ];

  return (
    <div className="main font-sans antialiased bg-white py-8">
      <div className="container questions mx-auto px-4">
        <h2 className="text-5xl main-text font-bold text-center mb-4">
          Got Questions? Find <span className="text-orange">Answers</span> Here
        </h2>
        <div className="flex flex-col md:flex-row mt-4 justify-center items-start">
          <div className="w-full main-quesns md:w-1/2">
            <ul className="list-none">
              {questionsAndAnswers.map((item, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="question-text">{item.question}</span>
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="text-red-500 symbol ml-8 font-bold text-6xl"
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
          <div className="w-full images md:w-1/2 md:pl-8 flex flex-col items-center">
            <img
              src={Faq1}
              alt="Image 1"
              className="md:w-80 h-36 object-cover sm:w-4 images1 rounded-md transition-transform transform"
            />
            <img
              src={Faq2}
              alt="Image 2"
              className="w-80 mt-4 h-36 images2 object-cover rounded-md transition-transform transform"
            />
            <img
              src={Faq3}
              alt="Image 3"
              className="w-80 mt-4 h-36 images3 object-cover rounded-md transition-transform transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
