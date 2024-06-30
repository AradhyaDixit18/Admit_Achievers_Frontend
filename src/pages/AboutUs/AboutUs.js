
import React, { useRef, useEffect } from 'react';
import './AboutUs.css';

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
          We believe that empathy, <br />
          intuitive design and <br />
          technology push us all forward.
        </h1>
      </section>
      <section className="top-section bg-black text-center flex justify-center items-center h-[500px]">
        <h1 className="text-white text-4xl font-bold leading-tight">
          We believe that empathy, <br />
          intuitive design and <br />
          technology push us all forward.
        </h1>
      </section>
      <section className="bg-white text-center py-12 px-4">
        <h2 className="text-black text-3xl font-bold leading-tight">
          We believe in the <span className="text-orange-500">artist</span>
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Since 2005, we’ve helped people from all over the world sell over $2.5 billion of their work.
          We’re 100% independent and we’re here to help artists, makers, and small brands open a store
          and start making a living doing what they love.
        </p>
        <div className="video-container mt-8">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
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
          {['Columbia University', 'Yale University', 'Brown University', 'Stanford University', 'MIT'].map((university, index) => (
            <div key={index} className="university-item">
              <img src={`/path/to/${university.toLowerCase().replace(/ /g, '_')}_logo.png`} alt={university} className="university-logo" />
              <p className="university-text">{university}</p>
            </div>
          ))}
        </div>
      </section>
    </div>



     <div className="bg-gray-800 ml-44 w-9/12 text-white p-8 rounded-lg shadow-lg  flex flex-col items-center text-center mb-10 ">
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

export default AboutUs;
