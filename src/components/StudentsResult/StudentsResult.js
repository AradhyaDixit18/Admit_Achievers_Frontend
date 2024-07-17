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
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Placement Highlights
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Our students have received offers from globally recognized and reputed universities
        </p>
      </div>

      <div className="university-container">
        {[
          { id: 'fit', name: 'FIT', image: AA_Home_UniversityAdmits_FIT, count: 13 },
          { id: 'hec', name: 'HEC', image: AA_Home_UniversityAdmits_HEC, count: 23 },
          { id: 'lbs', name: 'London Business School', image: AA_Home_UniversityAdmits_LBS, count: 65 },
          { id: 'mehnheim', name: 'Mehnheim University', image: AA_Home_UniversityAdmits_Mehnheim, count: 27 },
          { id: 'melbourne', name: 'Melbourne University', image: AA_Home_UniversityAdmits_MelbourneUniversity, count: 12 }
        ].map((university) => (
          <div key={university.id} className="university-item text-center py-2">
            <img
              src={university.image}
              alt={university.name}
              className="university-logo mx-auto"
            />
            <p className="university-text mt-4 text-white">{university.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
