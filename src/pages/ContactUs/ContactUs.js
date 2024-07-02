import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Import custom CSS for additional styling

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-md shadow-lg overflow-hidden">
        {/* Top black strip */}
        <div className="bg-black text-white text-center py-8"> {/* Increase height to match the image */}
          <h1 className="text-lg md:text-xl font-semibold">If you have any questions or queries you can Contact Us on the following</h1>
        </div>
        <div className="p-6 flex justify-between items-start gap-4 flex-col md:flex-row">
          {/* Contact Cards */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="contact-card">
              <img src="https://img.icons8.com/ios/50/FF7F00/email.png" alt="Email" className="mx-auto mb-2" /> {/* Orange icon */}
              <p className="text-gray-700">info@admitachievers.com</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="contact-card">
              <img src="https://img.icons8.com/ios/50/FF7F00/phone.png" alt="Phone" className="mx-auto mb-2" /> {/* Orange icon */}
              <p className="text-gray-700">+91 88260 31820</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="contact-card">
              <img src="https://img.icons8.com/ios/50/FF7F00/whatsapp.png" alt="WhatsApp" className="mx-auto mb-2" /> {/* Orange icon */}
              <p className="text-gray-700">+91 88260 31820</p>
            </div>
          </div>
        </div>
        {/* Address Section */}
        <div className="bg-white border-t-4 border-blue-500 p-4 text-center shadow-md">
          <img src="https://img.icons8.com/ios/50/FF7F00/marker.png" alt="Location" className="mx-auto mb-2" /> {/* Orange location icon */}
          <p className="text-gray-700">#230, Second Floor, S-3 Tower, Cloud 9 Towers, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh, India - 201010</p>
        </div>
        {/* Form Section */}
        <div className="p-6">
          <h2 className="text-center text-2xl font-bold mb-4">Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" className="border p-2 rounded" required />
              <input type="email" name="email" placeholder="Email" className="border p-2 rounded" required />
              <input type="text" name="phone" placeholder="Phone No" className="border p-2 rounded" required />
              <input type="text" name="state" placeholder="State" className="border p-2 rounded" required />
              <input type="text" name="city" placeholder="City" className="border p-2 rounded" required />
            </div>
            <textarea name="message" placeholder="Message" className="border p-2 rounded" rows="5" required></textarea>
            <button type="submit" className="bg-orange-600 text-white p-3 rounded-lg shadow-md hover:bg-orange-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
