import React, { useState } from 'react';
import './FAQSection.css';
import Faq1  from '../../assets/Homepage/AA_Home_FAQ1.png'
import Faq2 from '../../assets/Homepage/AA_Home_FAQ2.png'
import Faq3  from '../../assets/Homepage/AA_Home_FAQ3.png'


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
      answer: 'Language requirements vary depending on the country and the language of instruction. Some countries may require proficiency in the local language, while others offer programs taught in English. It\'s important to check the language requirements of the specific university or program you are interested in.'
    },
    {
      question: 'What are the popular study abroad destinations for Indian students?',
      answer: 'Popular study abroad destinations for Indian students include the United States, United Kingdom, Canada, Australia, Germany, and Singapore. However, the choice of destination depends on individual preferences and career goals.'
    },
    {
      question: 'How do I finance my studies abroad?',
      answer: 'Financing options include scholarships, grants, part-time jobs, student loans, and financial assistance from family. Research and apply for scholarships specifically designed for international students and explore funding options provided by universities and government agencies.'
    },
    {
      question: 'What are the entry requirements for studying abroad?',
      answer: 'Entry requirements vary depending on the country and the university. Generally, you need to provide academic transcripts, standardized test scores (such as the TOEFL or IELTS for English proficiency), letters of recommendation, a statement of purpose, and a valid passport.'
    },
    {
      question: 'How do I find suitable accommodation while studying abroad?',
      answer: 'Universities often provide on-campus accommodation options, including dormitories or student apartments. Alternatively, you can explore private rentals or shared accommodations. It\'s advisable to research housing options in advance and consider factors such as cost, location, and safety.'
    },
    {
      question: 'How can I ensure the safety and well-being of studying abroad?',
      answer: 'Research the safety reputation of your chosen destination and follow any guidelines or recommendations provided by the university or relevant authorities. Stay in touch with the university\'s international student support services and be aware of emergency procedures.'
    },
    {
      question: 'Can I work while studying abroad?',
      answer: 'Many countries allow international students to work part-time during their studies, subject to certain restrictions. Check the work regulations of your study destination to determine the opportunities available for international students.'
    },
    {
      question: 'How do I apply for a student visa?',
      answer: 'Each country has its own student visa application process. Contact the embassy or consulate of your chosen study destination to understand the specific requirements, documents needed, and application procedures for obtaining a student visa.'
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
                src={Faq1}
                alt="Image 1"
                className="w-full h-32 object-cover rounded-md transition-transform transform hover:scale-105"
              />
              <img
                src={Faq2}
                alt="Image 2"
                className="w-full h-32 object-cover rounded-md transition-transform transform hover:scale-105"
              />
              <img
                src={Faq3}
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
