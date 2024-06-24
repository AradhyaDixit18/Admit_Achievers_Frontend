import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: 'What is the Riipen experiential learning platform?',
      answer: 'Riipen is an experiential learning platform that connects students, educators, and employers through real-world projects. It provides opportunities for students to gain practical experience and for employers to benefit from fresh ideas and perspectives.'
    },
    {
      question: 'What makes Riipen the #1 experiential learning platform?',
      answer: 'Riipen is considered the #1 experiential learning platform due to its extensive network, user-friendly interface, and the variety of projects it offers. It is trusted by many institutions and companies for providing high-quality, practical learning experiences.'
    },
    {
      question: 'What are the benefits of using an experiential learning platform?',
      answer: 'Experiential learning platforms provide numerous benefits including enhanced student engagement, improved job readiness, and the ability to apply theoretical knowledge in practical settings. They also help in building a professional network and gaining real-world experience.'
    },
    {
      question: 'What are the benefits of using an experiential admit learning platform?',
      answer: 'Using an experiential admit learning platform helps students better prepare for their careers by providing hands-on experience and real-world projects. It bridges the gap between academic learning and professional requirements, making students more competitive in the job market.'
    },
    {
      question: 'What are the benefits of using an admit achievers experiential admit learning platform?',
      answer: 'Admit Achievers experiential admit learning platform offers personalized guidance, curated projects, and a supportive community. It ensures students not only gain practical skills but also receive mentorship and networking opportunities to advance their careers.'
    }
  ];

  return (
    <div className="main font-sans antialiased bg-white">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Got Questions? Find <span className="text-red-500">Answers</span> Here
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2">
              <ul className="list-none">
                {questionsAndAnswers.map((item, index) => (
                  <li key={index} className="mb-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="question-text">{item.question}</span>
                      <button onClick={() => toggleQuestion(index)} className="text-red-500 font-bold text-xl">
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
            <div className="hidden md:flex md:w-1/2 flex-col pl-8 space-y-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Image 1"
                className="w-full h-32 object-cover rounded-md transition-transform transform hover:scale-105"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Image 2"
                className="w-full h-32 object-cover rounded-md transition-transform transform hover:scale-105"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Image 3"
                className="w-full h-32 object-cover rounded-md transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
