import { useState } from 'react'
import React from 'react'

import banner from '../../assets/essay-review/Essays Banner 1.png'

export const DestinationGroup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        preferredDestination: '',
        modeOfCommunication: '',
      });
    
      const [isChecked, setIsChecked] = useState(false);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const isFormComplete = Object.values(formData).every(field => field.trim() !== '');
    
        if (!isFormComplete) {
          alert('Please fill out all fields.');
          return;
        }
    
        if (!isChecked) {
          alert('Please agree to the Terms and Conditions.');
          return;
        }
    
        // Send form data using EmailJS or any other email service here.
        console.log('Form data submitted:', formData);
      };
    
  return (
    <>
    <div className="relative w-full h-96 overflow-hidden z-0">
    <img src={banner} alt="Background" className="absolute w-full h-full object-cover hero-image" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 gap-6">
     
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Why Study in USA?</h2>
          <p className="mb-4">
            Out of the top 100 universities in the world, 48 universities are from the USA. There is no doubt about the quality of education provided in the USA. But is that the only attractive thing about the country? Not at all! Here is what draws students:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-xl text-red-600 mr-2">📈</span>
              <div>
                <h3 className="font-semibold">Ranking</h3>
                <p>Needless to stress, the USA has some of the finest universities the world has ever seen. 15 of the top 20 universities are American, according to Times Higher Education. Universities like MIT, Stanford, and Harvard are every student's dream.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-red-600 mr-2">🏡</span>
              <div>
                <h3 className="font-semibold">Quality of Life</h3>
                <p>Needless to stress, the USA has some of the finest universities the world has ever seen. 15 of the top 20 universities are American, according to Times Higher Education. Universities like MIT, Stanford, and Harvard are every student's dream.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-red-600 mr-2">🎓</span>
              <div>
                <h3 className="font-semibold">Student Satisfaction</h3>
                <p>Needless to stress, the USA has some of the finest universities the world has ever seen. 15 of the top 20 universities are American, according to Times Higher Education. Universities like MIT, Stanford, and Harvard are every student's dream.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-red-600 mr-2">💼</span>
              <div>
                <h3 className="font-semibold">Employability</h3>
                <p>Needless to stress, the USA has some of the finest universities the world has ever seen. 15 of the top 20 universities are American, according to Times Higher Education. Universities like MIT, Stanford, and Harvard are every student's dream.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-orange-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Aspire to Study Abroad? Submit your details here.</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">What is your phone number?</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Destination</label>
              <select name="preferredDestination" value={formData.preferredDestination} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500">
                <option value="">select</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mode of Communication</label>
              <select name="modeOfCommunication" value={formData.modeOfCommunication} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500">
                <option value="">select</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="In-Person">In-Person</option>
              </select>
            </div>
            <div className="flex items-start">
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="h-4 w-4 text-orange-600 border-gray-300 rounded" />
              <label className="ml-2 text-sm text-gray-700">I have read and agree to the <a href="#" className="underline">Terms and Conditions</a></label>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600">Submit</button>
          </form>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="path-to-image.jpg" alt="Piyush Patyal" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-bold">Piyush Patyal</h4>
            <p className="text-sm text-gray-600">Delhi University - CVS</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="path-to-image.jpg" alt="Piyush Patyal" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-bold">Piyush Patyal</h4>
            <p className="text-sm text-gray-600">Delhi University - CVS</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="path-to-image.jpg" alt="Piyush Patyal" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-bold">Piyush Patyal</h4>
            <p className="text-sm text-gray-600">Delhi University - CVS</p>
          </div>
        </div>
   
    </div>
    </>
  )
}
