import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from './blogData'; // Import your blog data
import emailjs from 'emailjs-com';
import './BlogPage.css'; // Import custom CSS for additional styling

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    city: '',
    state: '',
    pinCode: '',
  });
  const [isChecked, setIsChecked] = useState(false);

  const statesOfIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

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

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send the message, please try again.');
      });
  };

  if (!blog) {
    return <div className="error-message">Blog not found</div>;
  }

  return (
    <>
      <div className="bg-slate-800 flex flex-col items-center"></div>
      <div className="w-full bg-white rounded-md shadow-lg overflow-hidden">
        <div className="bg-slate-800 text-white text-center py-16">
          <h1 className="text-lg mb-4 underline font-semibold">Detail Blog</h1>
          <h1 className="text-4xl mb-4 font-bold">{blog.title}</h1>
          <h1 className="text-lg md:text-xl mb-4 font-bold">{blog.date}</h1>
        </div>

        <div className="-mt-16 mb-4 flex justify-center items-start gap-4 flex-col md:flex-row">
          {/* Blog Image */}
          <img src={blog.image} alt="Blog" className="mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-4 pb-8">
          {/* Blog Content */}
          <div className="w-full md:w-2/3 ml-4">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          </div>

          {/* Registration Form */}
          <div className="w-full h-1/2 md:w-1/3 bg-orange-500 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center text-white">Register for a Free Session</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-3 py-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Mobile Number</label>
                <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="w-full px-3 py-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Email Address</label>
                <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} className="w-full px-3 py-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-white">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-3 py-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-white">State</label>
                <select name="state" value={formData.state} onChange={handleInputChange} className="w-full px-3 py-2 rounded-md">
                  <option>select</option>
                  {statesOfIndia.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-white">Pin Code</label>
                <input type="text" name="pinCode" value={formData.pinCode} onChange={handleInputChange} className="w-full px-3 py-2 rounded-md" />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" className="mr-2" checked={isChecked} onChange={handleCheckboxChange} />
                <span className="text-sm text-white">I have read and agree to the <a href="#" className="underline">Terms and Conditions</a></span>
              </div>
              <button type="submit" className="w-full bg-white t px-4 py-2 rounded-md hover:bg-gray-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="w-full bg-white mt-8">
        <div className="bg-white py-8 px-4">
          <div className="bg-gray-900 text-white text-center py-8">
            <h2 className="text-2xl mb-4 font-bold">Need guidance? Let us help you.</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              ENQUIRE NOW
            </button>
          </div>

          <div className="text-center mt-8 mb-4">
            <h2 className="text-2xl font-bold">Related Blogs</h2>
          </div>

          <div className="flex justify-center gap-4 overflow-x-scroll">
            {blogs.map((relatedBlog) => (
              <div 
                key={relatedBlog.id} 
                className="w-80 bg-white rounded-md shadow-lg overflow-hidden cursor-pointer"
                onClick={() => navigate(`/blog-lists/blog/${relatedBlog.id}`)} // Navigate to the detailed view
              >
                <img src={relatedBlog.image} alt="Related Blog" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{relatedBlog.title}</h3>
                  <p className="text-sm text-gray-600">{relatedBlog.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            {/* Pagination */}
            <div className="flex gap-2 items-center">
              <button className="text-gray-600 bg-white hover:bg-gray-100 px-3 py-1 rounded-md">{'<'}</button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="text-gray-600 bg-white hover:bg-gray-100 px-3 py-1 rounded-md"
                >
                  {page}
                </button>
              ))}
              <button className="text-gray-600 bg-white hover:bg-gray-100 px-3 py-1 rounded-md">{'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
