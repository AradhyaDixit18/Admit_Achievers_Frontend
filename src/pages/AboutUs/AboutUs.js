import React, { useRef, useEffect } from 'react';
import './AboutUs.css';
import AA_Home_UniversityAdmits_FIT from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_FIT.png';
import AA_Home_UniversityAdmits_HEC from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_HEC.png';
import AA_Home_UniversityAdmits_LBS from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_LBS.png';
import AA_Home_UniversityAdmits_Mehnheim from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_Mehnheim.png';
import AA_Home_UniversityAdmits_MelbourneUniversity from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_MelbourneUniversity.png';

const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth;
    const viewportWidth = container.clientWidth;
    const scrollDistance = totalWidth - viewportWidth;

    container.style.transition = 'transform 20s linear infinite';
    container.style.transform = `translateX(-${scrollDistance}px)`;

    const handleAnimation = () => {
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setTimeout(() => {
        container.style.transition = 'transform 20s linear infinite';
        container.style.transform = `translateX(-${scrollDistance}px)`;
      }, 50);
    };

    container.addEventListener('transitionend', handleAnimation);
    return () => container.removeEventListener('transitionend', handleAnimation);
  }, []);

  return (
    <>
      <div className="about-us-container">
        <section className="top-section bg-white text-center flex justify-center items-center h-[500px]">
          <h1 className="text-orange-500 text-4xl font-bold leading-tight">
            We believe to realize education <br />
            aspirations through the alchemy <br />
            of empathy and holistic approach.
          </h1>
        </section>
        <section className="top-section bg-black text-center flex justify-center items-center h-[500px]">
          <h1 className="text-white text-4xl font-bold leading-tight">
          We believe value-driven outcomes <br />
          for quality engagement, <br />
          less distraction, and zero time-leak.
          </h1>
        </section>
        <section className="bg-white text-center py-12 px-4">
          <h2 className="text-black text-3xl font-bold leading-tight">
            We are <span className="text-orange-500">Admit Achievers</span>
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          We, at Admit Achievers, are passionate about POSITIVE REALISM where we develop a FOCUSED BLUEPRINT to realize your study abroad aspirations.
          </p>
          <div className="video-container mt-8">
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
      <div className="bg-white  p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/path/to/your/image.png" // Replace with the path to your image
              alt="Person with books"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <div className="mb-4">
              <h1 className="text-xl font-bold">WHO WE <span className="text-orange-600">ARE</span></h1>
              <p>
                Purple, Rock, Scissors (PRPL) is an international digital creative agency located in Orlando, Florida, that is made up of strategists, designers, developers, and project managers that are forever curious and ready to transform the way business is done.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-orange-600">OUR <span className="text-black">PEOPLE</span> COME FIRST</h2>
              <p>
                Although we are a well-oiled machine, our people are far from cogs. The talent we cultivate gets the importance of honing their respective crafts. It helps to better serve both each other and our partners, and it shows in everything – from what we design and produce, to what we value and believe.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-2xl font-bold">
            At <span className="text-orange-600 ">Lonely Planet</span>, our core values guide our <span className="text-orange-600">evolution:</span>
          </h2>
          <div className="grid grid-cols-1 w-3/4 flex items-center justify-center ml-48   md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white shadow-md  text-md  p-4 rounded-lg">
              <p>We pursue a vision of the world in which all are welcome. We believe travel can help foster the connection and understanding that makes meaningful moments possible.</p>
            </div>
            <div className="bg-white p-4 text-md shadow-md rounded-lg">
              <p>We pursue a vision of the world in which all are welcome. We believe travel can help foster the connection and understanding that makes meaningful moments possible.</p>
            </div>
            <div className="bg-white text-md  p-4 shadow-md rounded-lg">
              <p>We pursue a vision of the world in which all are welcome. We believe travel can help foster the connection and understanding that makes meaningful moments possible.</p>
            </div>
          </div>
        </div>
        <div className="flex arrow-btns mt-4  justify-center mt-4">
          <button className="px-4 history-button py-2 bg-white rounded-lg mx-2">❮</button>
          <button className="px-4 history-button py-2 bg-white rounded-lg mx-2">❯</button>
        </div>
      </div>
    </div>


      
      <div className="about-us-container">
        <section className="history-section bg-white text-center py-12">
          <h2 className="text-black text-3xl font-bold leading-tight mb-4">
            Our <span className="text-orange-500">History</span>
          </h2>
          <div className="buttons flex justify-center mb-4">
            <button className="history-button ">&#8249;</button>
            <button className="history-button">&#8250;</button>
          </div>
          <div className="year-selector flex justify-center items-center mb-8">
            <label htmlFor="year" className="mr-4">Select Year</label>
            <select id="year" className="border border-gray-400 p-2 rounded">
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
            </select>
          </div>
          <div className="history-content flex justify-center items-center">
            <div className="history-item">
              <img src="/path/to/image1.jpg" alt="History 1" className="history-image" />
              <p className="history-date">2002</p>
              <p className="history-description">June<br/>We pursue a vision of the world in which all are welcome.</p>
            </div>
            <div className="history-item">
              <img src="/path/to/image2.jpg" alt="History 2" className="history-image" />
              <p className="history-date">2002</p>
              <p className="history-description">June<br/>We pursue a vision of the world in which all are welcome.</p>
            </div>
            <div className="history-item">
              <img src="/path/to/image3.jpg" alt="History 3" className="history-image" />
              <p className="history-date">2002</p>
              <p className="history-description">June<br/>We pursue a vision of the world in which all are welcome.</p>
            </div>
          </div>
        </section>
        <section className="accreditations-section bg-white text-center py-12">
          <h2 className="text-black text-3xl font-bold leading-tight mb-4">
            Our <span className="text-orange-500">Accreditations</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            OUR STUDENTS HAVE RECEIVED 3500+ OFFERS TO THE WORLD'S BEST UNIVERSITIES.
          </p>
          <div ref={containerRef} className="university-container mt-8">
            {[
              { name: 'Columbia University', image: AA_Home_UniversityAdmits_FIT },
              { name: 'Yale University', image: AA_Home_UniversityAdmits_HEC },
              { name: 'Brown University', image: AA_Home_UniversityAdmits_LBS },
              { name: 'Stanford University', image: AA_Home_UniversityAdmits_Mehnheim },
              { name: 'MIT', image: AA_Home_UniversityAdmits_MelbourneUniversity }
            ].map((university, index) => (
              <div key={index} className="university-item">
                <img src={university.image} alt={university.name} className="university-logo" />
                <p className="university-text">{university.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-gray-800 ml-44 w-9/12 text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Ready to take the <span className="text-orange-500">Leap</span>?</h2>
        <p className="mb-4">Connect with India's finest counsellors and biggest study abroad community.</p>
        <button className="bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200 animate-pulse">Talk To Counsellor</button>
        <div className="absolute mt-4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/path/to/image1.png" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-white" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/path/to/image2.png" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-white" />
        </div>
        <div className="absolute mt-4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/path/to/image3.png" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-white" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
