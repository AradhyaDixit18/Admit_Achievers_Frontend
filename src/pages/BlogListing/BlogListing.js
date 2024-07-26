import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import the images
import image1 from '../../assets/Blogs/BEST-SUMMER-PROGRAM-TO-STUDY-ABROAD-2-1.png';
import image2 from '../../assets/Blogs/ChatGPT for Study Abroad (2400 × 1200 px).png';

const blogs = [
  {
    id: 1,
    title: "Everything you need to know about Personal Loan Calculators",
    date: "Sep 29, 2023",
    image: image1, // Use the imported image
    category: "Finance",
  },
  {
    id: 2,
    title: "How to Apply for Scholarships",
    date: "Oct 12, 2023",
    image: image2, // Use the imported image
    category: "Education",
  },
  // Add more blog entries here
];

const categories = ["All", "Study Destinations", "Courses", "Services", "Admissions", "News", "More"];

const BlogListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBlogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="bg-333333 text-center py-32 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-lg text-gray-300 mb-6 px-4 max-w-2xl">
          Studying abroad is not only an academic experience but it's a lifetime experience. KC's Study Abroad Blogs will help you with the best resources, advice, and tips.
        </p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
          ENQUIRE NOW
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-5xl font-bold text-center mb-8">Latest Blogs</h1>
        <div className="flex justify-center mb-6 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`mx-2 px-4 py-2 rounded ${
                selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {category}
            </button>
          ))}
         <div className="flex text-2xl justify-center ml-16">
          <input
            type="text"
            placeholder="Search Blogs"
            className="px-4 py-2 border rounded-l-lg w-full max-w-xs"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12.9 14.32a8 8 0 111.414-1.414l4.284 4.285a1 1 0 01-1.414 1.414l-4.285-4.284zM10 16a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </button>
        </div>
        </div>
        
        <div className="grid grid-cols-1 ml-44 mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="bg-white w-3/4 shadow-md rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{blog.title}</h2>
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <Link to={`/blog-lists/blog/${blog.id}`}>
                  <button className="mt-4 bg-orange-500 text-white py-1 px-4 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === number ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogListing;
