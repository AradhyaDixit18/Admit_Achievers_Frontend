import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Import custom CSS for additional styling

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userEmail = formData.get('email');
    const userName = formData.get('name');

    const templateParamsCompany = {
      name: userName,
      email: userEmail,
      phone: formData.get('phone'),
      state: formData.get('state'),
      city: formData.get('city'),
      message: formData.get('message')
    };

    const templateParamsUser = {
      name: userName,
      email: userEmail,
      phone: formData.get('phone'),
      state: formData.get('state'),
      city: formData.get('city'),
      message: formData.get('message')
    };

    // Send email to the company
    emailjs.send('service_r9q75qg', 'template_cxkbce1', templateParamsCompany, 'BHX1Ca4sSWoOpfmMq')
      .then((result) => {
          console.log('Email to company sent:', result.text);
      }, (error) => {
          console.log('Error sending email to company:', error.text);
      });

    // Send email to the user
    emailjs.send('service_3clznej', 'template_uy9hwga', templateParamsUser, 'BHX1Ca4sSWoOpfmMq')
      .then((result) => {
          console.log('Email to user sent:', result.text);
      }, (error) => {
          console.log('Error sending email to user:', error.text);
      });

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-md shadow-lg overflow-hidden">
        {/* Top black strip */}
        <div className="bg-black text-white text-center py-8 md:py-16">
          <h1 className="text-lg md:text-xl mb-4 font-semibold">
            If you have any questions or queries you can Contact Us on the following
          </h1>
        </div>
        <div className="p-6 mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Cards */}
          <div className="contact-card flex flex-col ml-24 items-center text-center">
          <p className="text-gray-700 text-lg font-bold">Email</p>
            <img src="https://img.icons8.com/ios/50/FF7F00/email.png" alt="Email" className="mb-2" />
           
            <p className="text-gray-700 ">info@admitachievers.com</p>
          </div>
          <div className="contact-card flex flex-col  items-center text-center">
          <p className="text-gray-700 text-lg font-bold">Phone No.</p>
            <img src="https://img.icons8.com/ios/50/FF7F00/phone.png" alt="Phone" className="mb-2" />
            
            <p className="text-gray-700">+91 8826031820</p>
          </div>
          <div className="contact-card flex flex-col mr-24 items-center text-center">
          <p className="text-gray-700 text-lg font-bold">WhatsApp</p>
            <img src="https://img.icons8.com/ios/50/FF7F00/whatsapp.png" alt="WhatsApp" className="mb-2" />
           
            <p className="text-gray-700">+91 8826031820</p>
          </div>
        </div>
      
        <div className="p-6">
          <h2 className=" text-2xl font-bold mb-4">Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" className="border p-2 rounded" required />
              <input type="email" name="email" placeholder="Email" className="border p-2 rounded" required />
              <input type="text" name="phone" placeholder="Phone No" className="border p-2 rounded" required />
              <input type="text" name="state" placeholder="State" className="border p-2 rounded" required />
              <input type="text" name="city" placeholder="City" className="border p-2 rounded" required />
            </div>
            <textarea name="message" placeholder="Message" className="border p-2 rounded" rows="5" required></textarea>
            <button type="submit" className="custom-send-button w-48 ">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
