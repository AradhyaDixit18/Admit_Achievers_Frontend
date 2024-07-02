import React,{useState} from 'react';
import './ProfileBuilding.css';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';

const ProfileBuilding = () => {
    const [activeTab, setActiveTab] = useState('Undergraduate');



    const testimonials = [
      {
        name: 'PRAYAS GOYALM.S',
        course: 'Civil Engineering, Construction Management',
        university: 'University of Illinois at Urbana-Champaign, USA',
        message: 'Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers.',
        image: '/path/to/image', 
      },
      {
        name: 'acas GOYALM.S',
        course: 'Civil Engineering, Construction Management',
        university: 'University of Illinois at Urbana-Champaign, USA',
        message: 'Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers.',
        image: '/path/to/image', 
      }
   ];

    const Parenttestimonials = [
      {
        message: 'Ye wali baat parents ki hai',
      },
      {
        message: 'Thank You to the counselor at Admit Achievers for making my admission possible in the United States of America with the university of my choice. I would like to take this opportunity to emphasize the flawless serviceThey took care of everything right from the beginning, curated specific profiles based on my background and the university research was impeccable which garnered me multiple offers.',
   }
    
    ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      };
    


    const content = {
        Undergraduate: [
          { grade: 'Grade 9', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
          { grade: 'Grade 10', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
          { grade: 'Grade 11', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
          { grade: 'Grade 12', description: 'A strategist works 1:1 with a student and their family to design a customized education pathway, including an extracurriculars assessment. Our strategists prepare students for all aspects of their education, working with them to maximize their performance in high school, college, and their future career.' },
        ],
        Graduate: [
          { grade: 'Graduate 1', description: 'Graduate program details for student and family.' },
          { grade: 'Graduate 2', description: 'Graduate program details for student and family.' },
          { grade: 'Graduate 3', description: 'Graduate program details for student and family.' },
          { grade: 'Graduate 4', description: 'Graduate program details for student and family.' },
        ],
        'Post Graduate': [
          { grade: 'Post Graduate 1', description: 'Post Graduate program details for student and family.' },
          { grade: 'Post Graduate 2', description: 'Post Graduate program details for student and family.' },
          { grade: 'Post Graduate 3', description: 'Post Graduate program details for student and family.' },
          { grade: 'Post Graduate 4', description: 'Post Graduate program details for student and family.' },
        ],
        MBA: [
          { grade: 'MBA 1', description: 'MBA program details for student and family.' },
          { grade: 'MBA 2', description: 'MBA program details for student and family.' },
          { grade: 'MBA 3', description: 'MBA program details for student and family.' },
          { grade: 'MBA 4', description: 'MBA program details for student and family.' },
        ],
      };
    

      
  return (
    <>
    <div className='overflow-hidden'>
     
      <div className="relative bg-white py-16 px-4 flex justify-between items-center w-full h-96">
        <div className="half-circle-left "></div>
        <img src="path/to/image1.jpg" alt="Profile 1" className="rounded-lg w-1/4 h-auto" />
        <div className="text-center flex-grow mx-4">
          <h2 className="text-3xl font-bold text-orange-600">Profile Building</h2>
          <p className="mt-4 text-gray-700">
            From the Ivy League to Stanford, MIT and many more... Crimson helps students reach their ultimate college admissions goals.
          </p>
          <button className="mt-6 bg-black text-white py-2 px-4 rounded-full w-64">SPEAK WITH AN ADVISOR</button>
        </div>
        <img src="path/to/image2.jpg" alt="Profile 2" className="rounded-lg w-1/4 h-auto" />
        <div className="half-circle-right"></div>
      </div>

   
      <div className="relative bg-gray-200 py-16 px-4 mt-8 w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800">About <span className="text-orange-600">Profile Building</span></h2>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="orange-square"></div>
          <img src="path/to/image3.jpg" alt="Profile 3" className="rounded-lg w-full h-auto" />
          <img src="path/to/image4.jpg" alt="Profile 4" className="rounded-lg w-full h-auto" />
          <img src="path/to/image5.jpg" alt="Profile 5" className="rounded-lg w-full h-auto" />
          <img src="path/to/image6.jpg" alt="Profile 6" className="rounded-lg w-full h-auto" />
        </div>
        <p className="mt-8 text-gray-700 text-center max-w-4xl mx-auto">
          Rise is an intensive skills development and profile-building program for students aged 11-14, designed to cultivate the abilities and experiences your child needs to be successful in high school, university, and beyond.
          <br/><br/>
          We equip our students to discover their best-fit extracurriculars, define their passions, and develop academic and soft skills—all with an eye towards winning admission to a top university.
        </p>
      </div>
    </div>
  
  





    <div className="w-full p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          What we <span className="text-orange-600">Do?</span>
        </h1>
      </div>

      {/* Accelerate Academics Section */}
      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 p-4">
        <div className="black-square"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Accelerate Academics</h2>
          <p className="text-gray-700 mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your current grades/test scores – filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition – we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
        <div className="md:w-1/2 p-4 flex flex-wrap">
          <img src="path/to/image1.jpg" alt="Image 1" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image2.jpg" alt="Image 2" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image3.jpg" alt="Image 3" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image4.jpg" alt="Image 4" className="rounded-lg w-1/2 p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col md:flex-row mt-4">
        <div className="md:w-1/2 p-4 flex flex-wrap relative">
          <div className="orange-square"></div>
          <img src="path/to/image5.jpg" alt="Image 5" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image6.jpg" alt="Image 6" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image7.jpg" alt="Image 7" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image8.jpg" alt="Image 8" className="rounded-lg w-1/2 p-2" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Drive Standout Extracurriculars</h2>
          <p className="text-gray-700 mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
      </div>
    </div>




    <div className="flex flex-col md:flex-row mb-16 mt-4">
        <div className="md:w-1/2 p-4">
        <div className="black-square"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Accelerate Academics</h2>
          <p className="text-gray-700 mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
        <div className="md:w-1/2 p-4 flex flex-wrap">
          <img src="path/to/image1.jpg" alt="Image 1" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image2.jpg" alt="Image 2" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image3.jpg" alt="Image 3" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image4.jpg" alt="Image 4" className="rounded-lg w-1/2 p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col md:flex-row mt-4">
        <div className="md:w-1/2 p-4 flex flex-wrap relative">
          <div className="orange-square"></div>
          <img src="path/to/image5.jpg" alt="Image 5" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image6.jpg" alt="Image 6" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image7.jpg" alt="Image 7" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image8.jpg" alt="Image 8" className="rounded-lg w-1/2 p-2" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Drive Standout Extracurriculars</h2>
          <p className="text-gray-700 mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
      </div>




      <div className="flex flex-col md:flex-row mb-16 mt-4">
        <div className="md:w-1/2 p-4">
        <div className="black-square"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Accelerate Academics</h2>
          <p className="text-gray-700 mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
        <div className="md:w-1/2 p-4 flex flex-wrap">
          <img src="path/to/image1.jpg" alt="Image 1" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image2.jpg" alt="Image 2" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image3.jpg" alt="Image 3" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image4.jpg" alt="Image 4" className="rounded-lg w-1/2 p-2" />
        </div>
      </div>

      {/* Drive Standout Extracurriculars Section */}
      <div className="flex flex-col md:flex-row mt-4">
        <div className="md:w-1/2 p-4 flex flex-wrap relative">
          <div className="orange-square"></div>
          <img src="path/to/image5.jpg" alt="Image 5" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image6.jpg" alt="Image 6" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image7.jpg" alt="Image 7" className="rounded-lg w-1/2 p-2" />
          <img src="path/to/image8.jpg" alt="Image 8" className="rounded-lg w-1/2 p-2" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Drive Standout Extracurriculars</h2>
          <p className="text-gray-700 mb-4">
            As a Crimson student, your personally matched strategist will help you build a university application list specifically for you, taking into account:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Your current grades/test scores - filling out our will give you a good indication of your current match, target and reach schools - and where Crimson tutoring can take you.</li>
            <li>Your preferred area of study</li>
            <li>Your extracurricular preferences</li>
            <li>Location! Where you want to live and study!</li>
            <li>The competition - we consider your admissions chances and encourage you to aim high.</li>
          </ul>
        </div>
      </div>





      <div className="w-full p-8">
     
      <div className="text-center mb-8">
        <button className="bg-orange-600 text-white py-2 px-4 rounded-full mb-4">Chat With US</button>
        <h1 className="text-3xl font-bold text-gray-800">
          Discover <span className="text-orange-600">Profile Building</span>
        </h1>
      </div>

     
      <div className="flex justify-center mb-8">
        {['Undergraduate', 'Graduate', 'Post Graduate', 'MBA'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-4 ${
              activeTab === tab ? 'border-orange-600 text-orange-600' : 'border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {content[activeTab].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold text-orange-600 mb-2">{item.grade}</h2>
            <p className="text-gray-700 mb-4">
              {item.description}
            </p>
            <a href="#" className="text-orange-600 font-bold">Learn More</a>
          </div>
        ))}
      </div>
    </div>
    


       <div className="flex flex-col items-center main-form md:flex-row items-center bg-black text-white p-8  space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            What’s your <span className="text-orange-600">focus?</span>
          </h2>
          <p className="mb-4 text-2xl text-gray-300">
            Finding your <span className="text-orange-600">passion?</span><br />
            Preparing for <span className="text-orange-600">uni?</span>
          </p>
        </div>
        <form className="bg-white text-black p-4 rounded-lg form-container">
          <h3 className="text-orange-600 text-lg mb-4">Question 1</h3>
          <div className="mb-4">
            <label htmlFor="childName" className="label-1 text-gray-700">What’s your child’s name?</label>
            <input type="text" id="childName" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="label-2 text-gray-700">e-mail</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="flex justify-end ">
            <button type="submit" className="next-button font-bold underline text-sm">Next</button>
          </div>
        </form>
      </div>
    

      <div className='mt-8 mb-8'>
      <div className=''>
          <h2 className="text-4xl font-bold mb-4 test-head inline">What Students are saying about <span className="text-orange-500">Admit Achievers</span></h2>
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




      <div className="ml-10 py-8 shadow-inner">
      <div >
          <h2 className="ml-36 text-4xl font-bold mb-4 test-head inline">What Parents  <span className="text-orange-500">Say</span></h2>
          <div className="ml-36 mb-16 inline ">
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
                      <div className="image-side-text">
              <p className="text-gray-600 mb-4">{Parenttestimonials[currentIndex].message}</p>
              </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {Parenttestimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-600 animate-pulse' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
     </div>





      
      <div className="bg-gray-800 text-white leap-section p-8 rounded-lg shadow-lg flex flex-col items-center text-center mb-8 relative">
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
      
    </>
  );
}

export default ProfileBuilding;
