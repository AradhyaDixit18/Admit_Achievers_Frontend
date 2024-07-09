import React,{useState,useRef,useEffect} from 'react'
import AA_Home_UniversityAdmits_FIT from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_FIT.png';
import AA_Home_UniversityAdmits_HEC from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_HEC.png';
import AA_Home_UniversityAdmits_LBS from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_LBS.png';
import AA_Home_UniversityAdmits_Mehnheim from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_Mehnheim.png';
import AA_Home_UniversityAdmits_MelbourneUniversity from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_MelbourneUniversity.png';



export const StudentsResult = () => {
    const containerRef = useRef(null);
    const [animationDuration, setAnimationDuration] = useState('0s');
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
          const items = container.querySelectorAll('.university-item');
          const totalWidth = Array.from(items).reduce((sum, item) => sum + item.offsetWidth, 0);
          const containerWidth = container.offsetWidth;
          const duration = (totalWidth / containerWidth) * 30; 
          setAnimationDuration(`${duration}s`);
        }
      }, []);
  return (
    <div className="bg-gray-800 text-white p-8 overflow-hidden">
    <div className="text-center">
      <h1 className="text-3xl font-bold">
        Crimson <span className="text-orange-500">Student</span> Results
      </h1>
      <p className="mt-2">OUR STUDENTS HAVE RECEIVED 3500+ OFFERS TO THE WORLD'S BEST UNIVERSITIES.</p>
    </div>

    <div ref={containerRef} className="university-container mt-8" style={{ animationDuration }}>
      {[
        { name: 'FIT', image: AA_Home_UniversityAdmits_FIT, count: 13 },
        { name: 'HEC', image: AA_Home_UniversityAdmits_HEC, count: 23 },
        { name: 'London Bussiness School', image: AA_Home_UniversityAdmits_LBS, count: 65 },
        { name: 'Mehnheim University', image: AA_Home_UniversityAdmits_Mehnheim, count: 27 },
        { name: 'Melbourne University', image: AA_Home_UniversityAdmits_MelbourneUniversity, count: 12 }
      ].map((university, index) => (
        <div key={index} className="university-item">
          <img
            src={university.image}
            alt={university.name}
            className="university-logo"
          />
          <p className="university-text text-white">{university.name}</p>
          <p className="university-text font-bold text-white">{university.count}</p>
        </div>
      ))}
    </div>
  </div>

 
  )
}
