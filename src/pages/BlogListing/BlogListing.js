import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "Everything you need to know about Personal Loan Calculators",
    date: "Sep 29, 2023",
    image: "image1_url",
    category: "Finance",
  },
  {
    id: 2,
    title: "How to Apply for Scholarships",
    date: "Oct 12, 2023",
    image: "image2_url",
    category: "Education",
  },
  // Add more blog entries here
];

const categories = ["All", "Finance", "Education", "Health", "Technology"];

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
    <div className="bg-gray-800 text-center py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Blog</h1>
      <p className="text-lg text-gray-300 mb-6">
        Studying abroad is not only an academic experience but it's a lifetime experience. KC's Study Abroad Blogs will help you with best resources, advice and tips.
      </p>
      <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
        ENQUIRE NOW
      </button>
    </div>
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blogs</h1>
      <div className="flex justify-center mb-6">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
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
