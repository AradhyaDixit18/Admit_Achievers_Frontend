import React from 'react';
import './ComingSoon.css'; // Import the custom CSS
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-333333 text-white">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-bold text-gradient mb-8">Coming Soon</h1>
        <p className="text-lg mb-6 mt-4">
          We are busy crafting something amazing and we can't wait to share it with you. Stay tuned for insightful and tailored content to make your study abroad journey smooth and successful.
        </p>
        <p className="text-lg mb-6">
          In the meantime, if you have any questions or need assistance, don't hesitate to contact us. We're here to help!
        </p>
        <div className="flex justify-center">
          <button
            className="p-2 bg-orange-500 text-white rounded-md"
            onClick={handleContactUs}
          >
            Contact Us
          </button>
        </div>
        <p className="mt-4">
          Thank you for your patience and understanding. Check back soon for updates!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
