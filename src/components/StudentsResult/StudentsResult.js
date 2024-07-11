import React from 'react';
import AA_Home_UniversityAdmits_FIT from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_FIT.png';
import AA_Home_UniversityAdmits_HEC from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_HEC.png';
import AA_Home_UniversityAdmits_LBS from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_LBS.png';
import AA_Home_UniversityAdmits_Mehnheim from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_Mehnheim.png';
import AA_Home_UniversityAdmits_MelbourneUniversity from '../../assets/Homepage/AA_Home_UniversityAdmitsTickr/AA_Home_UniversityAdmits_MelbourneUniversity.png';
import './StudentResult.css'; 

export const StudentsResult = () => {
  return ( 
    <div className="bg-gray-800 text-white p-8 overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Crimson <span className="text-orange-500">Student</span> Results
        </h1>
        <p className="mt-2">OUR STUDENTS HAVE RECEIVED 3500+ OFFERS TO THE WORLD'S BEST UNIVERSITIES.</p>
      </div>

      <div className="university-container mt-8 overflow-hidden whitespace-nowrap custom-university-container">
        {[
          { id: 'fit', name: 'FIT', image: AA_Home_UniversityAdmits_FIT, count: 13 },
          { id: 'hec', name: 'HEC', image: AA_Home_UniversityAdmits_HEC, count: 23 },
          { id: 'lbs', name: 'London Business School', image: AA_Home_UniversityAdmits_LBS, count: 65 },
          { id: 'mehnheim', name: 'Mehnheim University', image: AA_Home_UniversityAdmits_Mehnheim, count: 27 },
          { id: 'melbourne', name: 'Melbourne University', image: AA_Home_UniversityAdmits_MelbourneUniversity, count: 12 }
        ].map((university, index) => (
          <div key={university.id} className="university-item inline-block text-center px-4 py-2 sm:px-4 custom-university-item">
            <img
              src={university.image}
              alt={university.name}
              className="university-logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="university-text text-white">{university.name}</p>
            <p className="university-text text-white font-bold">{university.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
